let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio (){
    window.location.href='../Pantalla Inicio Educador/Educador.html'
}
BotonVolver.addEventListener("click", (VolverAlInicio));

let BotonIrCrearClases = document.getElementById("IrCREAR");
function IrCrear (){
    window.location.href='../Pantalla Crear Clases/CrearClases.html'
}
BotonIrCrearClases.addEventListener("click", (IrCrear));

let BotonIrGestionarClases = document.getElementById("IrGESTIONAR");
function IrGestionar (){
    window.location.href='../Pantalla Gestionar Clases/Clases.html'
}
BotonIrGestionarClases.addEventListener("click", (IrGestionar));
