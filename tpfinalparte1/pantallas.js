//PANTALLA 1 DONOVAN LE ENTREGA EL PAQUETE A INDY
function pantalla1() {
  image(imagenes[1], 0, 0, width, height);
  fill(0, 175);
  rect(55, 25, 690, 70, 6);
  fill(255);
  textSize(16);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[0] + "\n" + mistextos[1] + "\n" + mistextos[2];
  text(diarioTexto, width / 2, 32);

  // si el mouse está sobre el paquete
  if (mouseX > 360 && mouseX < 490 && mouseY > 260 && mouseY < 340) {
    image(paquete, 0, 0, width, height);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(mistextos[3], mouseX, mouseY - 29);
  }
}


//PANTALLA 2 INDY ABRE EL MISTERIOSO PAQUETE
function pantalla2() {
  image(imagenes[2], 0, 0, width, height);
  fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text(mistextos[4], width / 2, 45);

  // al pasar el mouse por el paquete:
  if (mouseX > 180 && mouseX < 500 && mouseY > 230 && mouseY < 380) {
    image(abrirpaquete, 0, 0, width, height);
    // texto cerca del mouse
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(mistextos[5], mouseX, mouseY - 29);
    // re-dibujar el texto de historia arriba
    fill(0, 175);
    rect(55, 25, 690, 60, 6);
    fill(255);
    textSize(17);
    textAlign(CENTER, TOP);
    text(mistextos[4], width / 2, 45);
  }
}


//PANTALLA 3 PLANO DEL DIARIO DE HENRY JONES SOBRE LA MESA
function pantalla3() {
  image(imagenes[3], 0, 0, width, height);
  // TEXTO NO INTERACTIVO DE LA HISTORIA
  fill(0, 175);
  rect(40, 20, 710, 68, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[6] + "\n" + mistextos[7] + "\n" + mistextos[8];
  text(diarioTexto, width / 2, 28);
  textSize(18);
  text(mistextos[9], width / 2, 300);

  //CATACUMBAS DIARIO
  if (mouseX > 410 && mouseX < 624 && mouseY > 120 && mouseY < 307) {
    image(siInvestigar, 0, 0, width, height);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Ir a las catacumbas", mouseX, mouseY - 29);
  } 
  // CORREA DIARIO
  else if (mouseX > 650 && mouseX < 790 && mouseY > 173 && mouseY < 292) {
    image(noInvestigar, 0, 0, width, height);
    fill(0, 200);
    rect(mouseX - 100, mouseY - 45, 200, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Cerrar el diario", mouseX, mouseY - 29);
  }
}


//PANTALLA 4 CATACUMBAS: TRES CAMINOS
function pantalla4() {
  image(imagenes[4], 0, 0, width, height);

  // CAMINO ESCONDIDO
  if (mouseX > 10 && mouseX < 260 && mouseY > 40 && mouseY < 400) {
    image(caminoescondido, 0, 0, width, height);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(mistextos[14], mouseX, mouseY - 29);
  }
  // CAMINO CENTRO
  else if (mouseX > 330 && mouseX < 610 && mouseY > 25 && mouseY < 400) {
    image(caminoarriba, 0, 0, width, height);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(mistextos[13], mouseX, mouseY - 29);
  }
  // PUENTE
  else if (mouseX > 550 && mouseX < 800 && mouseY > 40 && mouseY < 440) {
    image(caminopuente, 0, 0, width, height);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(mistextos[15], mouseX, mouseY - 29);
  }

  // TEXTO NO INTERACTIVO
  fill(0, 175);
  rect(55, 10, 690, 42, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  text(mistextos[11] + "\n" + mistextos[12], width / 2, 15);
}

//PANTALLA 5 PRIMER FINAL. FINAL MALO
function pantalla5() {
  image(imagenes[5], 0, 0, width, height);

  fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(mistextos[10], width / 2, 55);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}


// PANTALLA 6 CAMINO ESCONDIDO
function pantalla6() {
  image(imagenes[6], 0, 0, width, height);

  fill(0, 175);
  rect(55, 15, 690, 70, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[19] + "\n" + mistextos[20] + "\n" + mistextos[21];
  text(diarioTexto, width / 2, 22);

  // BOTÓN CORRER 
  if (mouseEnBoton(520, 320, 120, 110)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(correrAN, 520, 320, 120, 110);
  noTint();

  if (mouseEnBoton(520, 320, 120, 110)) {
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Correr", mouseX, mouseY - 29);
  }

  // BOTÓN CUERPO A TIERRA
  if (mouseEnBoton(660, 320, 120, 110)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(cuerpoAT, 660, 320, 120, 110);
  noTint();

  if (mouseEnBoton(660, 320, 120, 110)) {
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Agacharse", mouseX, mouseY - 29);
  }
}

// PANTALLA 7 TE DESCUBREN
function pantalla7() {
  image(imagenes[7], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botoncont, 250, 280, 280, 160);
  noTint();

  fill(0, 175);
  rect(55, 20, 690, 78, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[16] + "\n" + mistextos[17] + "\n" + mistextos[18];
  text(diarioTexto, width / 2, 32);
}

// PANTALLA 8 TE CAÉS DEL PUENTE (FINAL MALO)
function pantalla8() {
  image(imagenes[8], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}

// SECUESTRO
function pantalla9() {
  image(imagenes[9], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botoncont, 250, 280, 280, 160);
  noTint();
}

// TE DISPARAN
function pantalla10() {
  image(imagenes[10], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}

function pantalla11() {
  image(imagenes[11], 0, 0, width, height);

  // Área del avión
  if (mouseX > 220 && mouseX < 760 && mouseY > 70 && mouseY < 350) {
    image(avion, 80, 15, 700, 390);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Subirse al avión", mouseX, mouseY - 29);
  }
}

function pantalla12() {
  image(imagenes[12], 0, 0, width, height);

  if (mouseX > 485 && mouseX < 700 && mouseY > 45 && mouseY < 370) {
    image(puerta, 485, 44, 240, 266);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Entrar a la cueva", mouseX, mouseY - 29);
  }
  
   fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Bajas del avion y ves la puerta del templo, decides entrar.", width/2, 55);
  
  
}

function pantalla13() {
  image(imagenes[13], 0, 0, width, height);

  if (mouseX > 75 && mouseX < 150 && mouseY > 290 && mouseY < 410) {
    // daga
    image(daga, 95, 335, 80, 75);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Escapar con la daga", mouseX, mouseY - 29);
  } else if (mouseX > 156 && mouseX < 235 && mouseY > 335 && mouseY < 360) {
    // mechero
    image(mechero, 132, 325, 55, 55);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Escapar con el mechero", mouseX, mouseY - 29);
  }

  fill(0, 175);
  rect(55, 20, 610, 78, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[22] + "\n" + mistextos[23];
  text(diarioTexto, width / 2, 32);
}

function pantalla14() {
  image(imagenes[14], 0, 0, width, height);

  if (mouseX > 485 && mouseX < 700 && mouseY > 45 && mouseY < 370) {
    image(puerta2, 475, 48, 270, 290);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Entrar a la cueva", mouseX, mouseY - 29);
  }
}

function pantalla15() {
  image(imagenes[15], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}

//LLEGA AL ACERTIJO SOLO INDY
function pantalla16() {
  image(imagenes[16], 0, 0, 800, 450);

  //VIENTO
  if (mouseX > 225 && mouseX < 325 && mouseY > 220 && mouseY < 330) {
    fill(255, 215, 0, 70);
    stroke(255, 230, 140, 200);
    strokeWeight(2);
    rect(225, 220, 100, 110, 4);
    noStroke();
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Símbolo del viento", mouseX, mouseY - 29);
  }
  //SOL
  else if (mouseX > 355 && mouseX < 460 && mouseY > 220 && mouseY < 330) {
    fill(255, 215, 0, 70);
    stroke(255, 230, 140, 200);
    strokeWeight(2);
    rect(355, 220, 105, 110, 4);
    noStroke();
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Símbolo del sol", mouseX, mouseY - 29);
  }
  //AGUA
  else if (mouseX > 490 && mouseX < 595 && mouseY > 220 && mouseY < 330) {
    fill(255, 215, 0, 70);
    stroke(255, 230, 140, 200);
    strokeWeight(2);
    rect(490, 220, 105, 110, 4);
    noStroke();
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Símbolo del agua", mouseX, mouseY - 29);
  }
  noStroke();
}

//LLEGAN AL ACERTIJO HENRY E INDY
function pantalla17() {
  image(imagenes[17], 0, 0, width, height);

  //VIENTO
  if (mouseX > 225 && mouseX < 325 && mouseY > 220 && mouseY < 330) {
    fill(255, 215, 0, 70);
    stroke(255, 230, 140, 200);
    strokeWeight(2);
    rect(225, 220, 100, 110, 4);
    noStroke();
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Símbolo del viento", mouseX, mouseY - 29);
  }
  //SOL
  else if (mouseX > 355 && mouseX < 460 && mouseY > 220 && mouseY < 330) {
    fill(255, 215, 0, 70);
    stroke(255, 230, 140, 200);
    strokeWeight(2);
    rect(355, 220, 105, 110, 4);
    noStroke();
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Símbolo del sol", mouseX, mouseY - 29);
  }
  //AGUA
  else if (mouseX > 490 && mouseX < 595 && mouseY > 220 && mouseY < 330) {
    fill(255, 215, 0, 70);
    stroke(255, 230, 140, 200);
    strokeWeight(2);
    rect(490, 220, 105, 110, 4);
    noStroke();
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Símbolo del agua", mouseX, mouseY - 29);
  }
  noStroke();
}

//FINAL MALO. TRAMPA DEL ACERTIJO SOLO INDIANA JONES
function pantalla18() {
  image(imagenes[18], 0, 0, width, height);

  fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Elegiste el símbolo equivocado. Una trampa milenaria se activa en el templo.", width/2, 55);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}
//FINAL MALO CON HENRY
function pantalla19() {
  image(imagenes[19], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}
// CONSEGUISTE EL TESORO
function pantalla20() {
  image(imagenes[20], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}
//TESORO JUNTOP A HENRY
function pantalla21() {
  image(imagenes[21], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}
