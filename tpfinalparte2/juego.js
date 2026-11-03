class Juego {
  constructor() {
    this.estado = "inicio";
    this.jones = new Jones(width / 2 - 20, 350);
    this.enemigos = [];
    this.generarEnemigos();
  }
       generarEnemigos() {
    this.enemigos = [];

    // rocas
     this.enemigos.push(new Enemigo(80, 148, "roca", 2.3, 1));
    this.enemigos.push(new Enemigo(420, 148, "roca", 2.3, 1));

    // escorpiones
    this.enemigos.push(new Enemigo(30, 185, "escorpion", 2.1, 1));
    this.enemigos.push(new Enemigo(380, 185, "escorpion", 2.1, 1));

    // serpientes
    this.enemigos.push(new Enemigo(120, 245, "serpiente", 3.0, -1));
    this.enemigos.push(new Enemigo(480, 245, "serpiente", 3.0, -1));

    // arañas 
    this.enemigos.push(new Enemigo(80, 275, "arana", 2.8, -1));
    this.enemigos.push(new Enemigo(420, 275, "arana", 2.8, -1));
  
    // cocodrilos
    this.enemigos.push(new Enemigo(0, 110, "cocodrilo", 1.7, 1));
    this.enemigos.push(new Enemigo(300, 110, "cocodrilo", 1.7, 1));
  }
  
 actualizar() {
  if (this.estado !== "jugando") return;

  for (let e of this.enemigos) {
    e.mover();
  }

  this.revisarColisiones();

  if (this.jones.y < 40) {
    this.estado = "ganado";
  }
}
  
  revisarColisiones() {
  for (let e of this.enemigos) {
    if (this.colision(this.jones, e)) {
      this.estado = "perdido";
    }
  }
}

  colision(a, b) {
    let margen = 8;
    return (
      a.x + margen < b.x + b.w - margen &&
      a.x + a.tam - margen > b.x + margen &&
      a.y + margen < b.y + b.h - margen &&
      a.y + a.tam - margen > b.y + margen
    );
  }
  

  mostrar() {
    image(imgFondo, 0, 0, width, height);

    if (this.estado === "inicio") {
      this.mostrarInicio();
    } 
    else if (this.estado === "jugando") {
      // Dibujar enemigos
      for (let i = 0; i < this.enemigos.length; i++) {
        this.enemigos[i].mostrar();
      }
      // Dibujar a Jones
      this.jones.mostrar();
    } 
    else if (this.estado === "ganado") {
      this.mostrarGanado();
    } 
    else if (this.estado === "perdido") {
      this.mostrarPerdido();
    }
  }

 mostrarInicio() {
    fill(0, 180);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Juego de tp final sobre indiana jones", width/2, 140);
    textSize(16);
    text("toca enter y empieza", width/2, 280);
  }

  mostrarGanado() {
    fill(0, 180);
    rect(0, 0, width, height);
    fill(100, 255, 100);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("ganaste", width/2, height/2 - 20);
    fill(255);
    textSize(16);
    text("Presioná R para reiniciar", width/2, height/2 + 30);
  }

  mostrarPerdido() {
    fill(0, 180);
    rect(0, 0, width, height);
    fill(255, 80, 80);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("perdiste", width/2, height/2 - 20);
    fill(255);
    textSize(16);
    text("Presioná R para reiniciar", width/2, height/2 + 30);
  }

  reiniciar() {
    this.jones.reiniciar(width / 2 - 20, 350);
    this.generarEnemigos();
    this.estado = "jugando";
  }
}
