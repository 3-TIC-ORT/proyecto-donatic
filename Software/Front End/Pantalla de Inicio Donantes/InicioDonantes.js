let BotonGestionarPerfil= document.getElementById("BotonGestionPerfil");
function IrGestionarPerfil(){
    window.location.href = "../Pantalla de gestion de Perfil/Pantalla gestion perfil.html"
};
BotonGestionarPerfil.addEventListener("click", (IrGestionarPerfil));
let BotonCuestionario = document.getElementById("BotonCuestionario");
function IrCuestionario(){
    window.location.href= "../Pantalla Cuestionario/Pantalla Cuestionario.html"
}
BotonCuestionario.addEventListener("click", (IrCuestionario));
let BotonIrInformación = document.getElementById("BotonInformacion");
function IrInformación(){
    window.location.href="../Pantalla Información/Información.html"
}
BotonIrInformación.addEventListener("click", (IrInformación));
let BotonSelectorJuegos = document.getElementById("BotonJuegos");
function IrSelectorJuegos(){
    window.location.href="../Pantalla de Juegos/Selector de Juegos.html"
}
BotonCerrarSesion.addEventListener("click", FuncionCerrarSesion)
function FuncionCerrarSesion(){
    window.location.href = '../Pantalla de Inicio de Sesion/Inicio de sesion.html'
}
BotonSelectorJuegos.addEventListener("click", (IrSelectorJuegos));