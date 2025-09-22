let BotonGestionarPerfil= document.getElementById("BotonGestionPerfil");
function IrGestionarPerfil(){
    window.location.href = '../Pantalla de gestion de Perfil/Pantalla gestion perfil.html'
};

let BotonCuestionario = document.getElementById("BotonCuestionario");
function IrCuestionario(){
    window.location.href= '../Pantalla cuestionario/Pantalla Cuestionario.html'
};

let BotonIrInformación = document.getElementById("BotonInformacion");
function IrInformación(){
    window.location.href='../Pantalla Información/Información.html'
};

let BotonSelectorJuegos = document.getElementById("BotonJuegos");
function IrSelectorJuegos(){
    window.location.href='../Pantalla de juegos/Selector de Juegos.html'
};

let BotonCerrarSesion = document.getElementById("BotonCerrarSesion")
function FuncionCerrarSesion(){
    window.location.href = '../Pantalla de inicio no registrados/pantalla de inicio no registrados.html'
};
BotonGestionarPerfil.addEventListener("click", (IrGestionarPerfil));
BotonCuestionario.addEventListener("click", (IrCuestionario));
BotonIrInformación.addEventListener("click", (IrInformación));
BotonSelectorJuegos.addEventListener("click", (IrSelectorJuegos));
BotonCerrarSesion.addEventListener("click", (FuncionCerrarSesion))
