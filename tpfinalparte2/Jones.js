class Jones {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 40;
    this.direccion = "adelante";
    this.frame = 0;
    this.contador = 0;
    this.enMovimiento = false;
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;

    this.x = constrain(this.x, 0, width - this.tam);
    this.y = constrain(this.y, 0, height - this.tam);

    if (dy < 0) this.direccion = "atras";
    else if (dy > 0) this.direccion = "adelante";
    else if (dx < 0) this.direccion = "izquierda";
    else if (dx > 0) this.direccion = "derecha";

    this.enMovimiento = true;
  }

  mostrar() {
    let frames = jonesAdelante; // valor por defecto

    if (this.direccion === "adelante") frames = jonesAdelante;
    else if (this.direccion === "atras") frames = jonesAtras;
    else if (this.direccion === "izquierda") frames = jonesIzquierda;
    else if (this.direccion === "derecha") frames = jonesDerecha;

    // Protección por si no cargó la imagen
    if (!frames || frames.length === 0) {
      fill(200, 150, 50);
      rect(this.x, this.y, this.tam, this.tam);
      return;
    }

    if (this.enMovimiento) {
      this.contador++;
      if (this.contador > 6) {
        this.frame = (this.frame + 1) % frames.length;
        this.contador = 0;
      }
    } else {
      this.frame = 0;
    }

    image(frames[this.frame], this.x, this.y, this.tam, this.tam);
    this.enMovimiento = false;
  }

  reiniciar(x, y) {
    this.x = x;
    this.y = y;
    this.direccion = "adelante";
    this.frame = 0;
  }
}
