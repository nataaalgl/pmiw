let juego;

// Jones
let jonesAdelante = [];
let jonesAtras = [];
let jonesIzquierda = [];
let jonesDerecha = [];

// Enemigos
let rocas = [];
let aranas = [];
let escorpiones = [];
let serpientes = [];
let cocodrilos = [];

// Fondo
let imgFondo;

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.mostrar();
}

function keyPressed() {
  // Empezar el juego
  if (juego.estado === "inicio" && keyCode === ENTER) {
  juego.estado = "jugando";
}

  // Reiniciar
  if ((juego.estado === "ganado" || juego.estado === "perdido") && (key === 'r' || key === 'R')) {
    juego.reiniciar();
  }

  // Hcace que jones se mueva
  if (juego.estado === "jugando") {
    if (keyCode === UP_ARROW) {
      juego.jones.mover(0, -40);
    } 
    else if (keyCode === DOWN_ARROW) {
      juego.jones.mover(0, 40);
    } 
    else if (keyCode === LEFT_ARROW) {
      juego.jones.mover(-40, 0);
    } 
    else if (keyCode === RIGHT_ARROW) {
      juego.jones.mover(40, 0);
    }
  }
}
