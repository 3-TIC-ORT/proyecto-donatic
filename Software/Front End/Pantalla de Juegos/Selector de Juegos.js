let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonVolver.addEventListener("click", (VolverAlInicio));

let BotonJuego1 = document.getElementById("JuegoVF");
function IrVF (){
    window.location.href='../Juego Verdadero Falso/VF.html'
}
BotonJuego1.addEventListener("click", (IrVF));

let BotonJuego2 = document.getElementById("JuegoTipos");
function IrTipos (){
    window.location.href='../Juego Tipos/Tipos.html'
}
BotonJuego2.addEventListener("click", (IrTipos));

let BotonJuego3 = document.getElementById("JuegoUnir");
function IrJuegoUnir (){
    window.location.href='../Juego unir con flechas/JuegoUnir.html'
}
BotonJuego3.addEventListener("click",(IrJuegoUnir));