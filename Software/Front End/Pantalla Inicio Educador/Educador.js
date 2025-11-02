let BotonGestionar = document.getElementById("BotonGestionarPerfil");
function Perfil(){
    window.location.href='../Pantalla de gestion de perfil educador/GestionPerfilEdu.html'
}
BotonGestionar.addEventListener("click", (Perfil))

let BotonIrCrearInfo = document.getElementById("BotonIrInfo");
function IrCrearInfo (){
    window.location.href='../Pantalla Crear Info/CrearInfo.html'
}
BotonIrCrearInfo.addEventListener("click", (IrCrearInfo));

    let BotonCerrarLaSesion = document.getElementById("BotonCerrarSesion");
function CerrarSesion (){
    window.location.href='../pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}
BotonCerrarLaSesion.addEventListener("click", (CerrarSesion));

    let BotonIrClases = document.getElementById("BotonClases");
function IrClases (){
    window.location.href='../Pantalla clases/Clases.html'
}
BotonIrClases.addEventListener("click", (IrClases));

    let BotonIrStats = document.getElementById("BotonIrEstadisticas");
function IrStats (){
    window.location.href='../Pantalla Estadisticas/Stats.html'
}
BotonIrStats.addEventListener("click", (IrStats));
