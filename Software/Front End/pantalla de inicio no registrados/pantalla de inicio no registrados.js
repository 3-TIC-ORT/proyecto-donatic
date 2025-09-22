let BotonRegistrarse = document.getElementById("BotonRegistrarse");
let BotonIniciarSesion = document.getElementById("BotonIniciarSesion");
function IniciarSesion (){
    window.location.href = '../Pantalla de inicio de sesion/Inicio de sesion.html';
};
function Registrarse (){
    window.location.href = '../Pantalla de registro/PantallaRegistro.html';
};
BotonRegistrarse.addEventListener("click",(Registrarse));
BotonIniciarSesion.addEventListener("click",(IniciarSesion))