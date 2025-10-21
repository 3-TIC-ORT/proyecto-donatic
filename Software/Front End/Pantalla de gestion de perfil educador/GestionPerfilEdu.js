let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonVolver.addEventListener("click", (VolverAlInicio));
let BotonCerrarSesion = document.getElementById("BotonCerrarSesion");
function FuncionCerrarSesion(){
    window.location.href = '../Pantalla de inicio no registrados/pantalla de inicio no registrados.html'
};
BotonCerrarSesion.addEventListener("click",(FuncionCerrarSesion));