const BotonRegistrarse = document.getElementById("BotonRegistrarse");
const BotonIniciarSesion = document.getElementById("BotonIniciarSesion");
function IniciarSesion (){
    window.location.href = '../Pantalla Elegir Rol/Rol.html';
};
function Registrarse (){
    window.location.href = '../Pantalla de registro/PantallaRegistro.html';
};
BotonRegistrarse.addEventListener("click",(e)=>{
    localStorage.removeItem('sesiónUsuario')
    localStorage.setItem('sesiónUsuario', 'registro')   
});
BotonIniciarSesion.addEventListener("click",(IniciarSesion));