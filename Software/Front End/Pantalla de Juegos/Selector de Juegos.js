let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonVolver.addEventListener("click", (VolverAlInicio));

let BotonJuego2 = document.getElementById("Juego2");
function IrVF (){
    window.location.href='../Juego Verdadero Falso/VF.html'
}
BotonJuego2.addEventListener("click", (IrVF));

let BotonJuego3 = document.getElementById("Juego3");
function IrTipos (){
    window.location.href='../Juego Tipos/Tipos.html'
}
BotonJuego3.addEventListener("click", (IrTipos));

let BotonJuego1 = document.getElementById("Juego1");
function IrJuegoUnir (){
    window.location.href='../Juego unir con flechas/JuegoUnir.html'
}
BotonJuego1.addEventListener("click",(IrJuegoUnir));