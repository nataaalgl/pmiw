let activate = [];
let floatAnim = [];
let burgerAnim = [];
let bartman = [];
let frameActual = 0;
let estado = "activate";
let velocidad = 3;
let posX = 0;
let posY = 350;
let velocidadHomero = 2;
let fondo;
let xFondo = 0;
let burgerX = 700;
let burgerY = 370;
let burgerFrame = 0;
let burgerVelocidad = 6;
let burgerVisible = true;
let titulo;
let tituloY = -400;
let velocidadTitulo = 2;
let gravedadTitulo = 1;
let reboteTitulo = 0.6;
let tituloActivo = false;
let mostrarBoton = false;

// boton de iniciar
let botonIniciar;
let btnX, btnY, btnW = 300, btnH = 180;

// Bartman volando
let bartmanX = -150;
let bartmanY = 40;
let bartmanFrame = 0;
let bartmanVelocidad = 3;
let bartmanAnimVel = 3;

function preload() {
  for (let i = 0; i < 16; i++) {
    let num = nf(i, 2);
    activate[i] = loadImage("data/activate_" + num + ".png");
  }
  for (let i = 0; i < 10; i++) {
    let num = nf(i, 2);
    floatAnim[i] = loadImage("data/float_" + num + ".png");
  }
  for (let i = 0; i < 6; i++) {
    let num = nf(i, 2);
    burgerAnim[i] = loadImage("data/burger_" + num + ".png");
  }
  for (let i = 0; i < 5; i++) {
    let num = nf(i, 2);
    bartman[i] = loadImage("data/bartman_" + num + ".png");
  }
  fondo = loadImage("data/fondo.png");
  titulo = loadImage("data/titulo.png");
  botonIniciar = loadImage("data/boton_iniciar.png");
}

function setup() {
  createCanvas(800, 600);
  btnX = width / 2 - btnW / 2;
  btnY = height - 250;
}

function draw() {
  moverFondo();

  // Hamburguesa para hmero
  if (burgerVisible) {
    if (frameCount % burgerVelocidad === 0) {
      burgerFrame = (burgerFrame + 1) % burgerAnim.length;
    }
    image(burgerAnim[burgerFrame], burgerX, burgerY, 90, 90);
  }

  // estado de homero
  if (estado === "activate") {
    posX += velocidadHomero;

    // funcion de retornarw
    if (llegoALaHamburguesa(posX, burgerX)) {
      burgerVisible = false;
      estado = "float";
      tituloActivo = true;
    }
  } else if (estado === "float") {
    posY -= 2.5;
  }

  // dibujo de hoemro
  switch (estado) {
    case "activate":
      reproducirAnimacion(activate, velocidad, posX, posY, 120, 120);
      break;
    case "float":
      reproducirAnimacion(floatAnim, velocidad + 2, posX, posY, 140, 140);
      break;
  }

  // vuelo de bart
  if (frameCount % bartmanAnimVel === 0) {
    bartmanFrame = (bartmanFrame + 1) % bartman.length;
  }
  bartmanX += bartmanVelocidad;
  if (bartmanX > width + 100) {
    bartmanX = -150;
  }
 
  dibujarPersonaje(bartman, bartmanFrame, bartmanX, bartmanY, 120, 90);

  // Título que cae
  if (tituloActivo) {
    animarTitulo();
  }

  // Botón simplemnte visual
  if (mostrarBoton) {
    image(botonIniciar, btnX, btnY, btnW, btnH);
  }
}

// Reiniciar con R 
function keyPressed() {
  if (key === 'r' || key === 'R') {
    estado = "activate";
    posX = 0;
    posY = 350;
    burgerVisible = true;
    tituloActivo = false;
    tituloY = -400;
    velocidadTitulo = 2;
    frameActual = 0;
    burgerFrame = 0;
    xFondo = 0;
    mostrarBoton = false;
    bartmanX = -150;
  }
}

// funciones

// 1) Función con parámetros (ya la tenías)
function reproducirAnimacion(frames, vel, x, y, w, h) {
  if (frameCount % vel === 0) {
    frameActual = (frameActual + 1) % frames.length;
  }
  image(frames[frameActual], x, y, w, h);
}

// 2) Segunda función con parámetros (NUEVA)
function dibujarPersonaje(frames, frame, x, y, w, h) {
  image(frames[frame], x, y, w, h);
}

// 3) Función que RETORNA un valor (NUEVA)
function llegoALaHamburguesa(x, objetivo) {
  return x + 50 >= objetivo;
}

function moverFondo() {
  xFondo -= 1.2;
  if (xFondo <= -fondo.width) xFondo = 0;
  image(fondo, xFondo, 0, fondo.width, height);
  image(fondo, xFondo + fondo.width, 0, fondo.width, height);
}

function animarTitulo() {
  imageMode(CENTER);
  image(titulo, width / 2, tituloY, 620, 250);
  imageMode(CORNER);

  velocidadTitulo += gravedadTitulo;
  tituloY += velocidadTitulo;

  if (tituloY > 220) {
    tituloY = 220;
    velocidadTitulo *= -reboteTitulo;

    if (abs(velocidadTitulo) < 1.5) {
      mostrarBoton = true;
    }
  }
}
