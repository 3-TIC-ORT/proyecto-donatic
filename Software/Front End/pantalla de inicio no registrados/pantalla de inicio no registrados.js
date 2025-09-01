let BotonRegistrarse = document.getElementById("BotonRegistrarse");
let BotonIniciarSesion = document.getElementById("BotonIniciarSesion");
function IniciarSesion (){
    window.location.href = '../Pantalla de Inicio de Sesion/Inicio de sesion.html';
};
function Registrarse (){
    window.location.href = '../PantallaRegistro/PantallaRegistro.html';
};
BotonRegistrarse.addEventListener("click",(Registrarse));
BotonIniciarSesion.addEventListener("click",(IniciarSesion))