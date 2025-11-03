const BotonSalir = document.getElementById("ButonVolver");
const BotonEducador = document.getElementById("Educador");
const BotonEstudiante = document.getElementById("Estudiante");
const SesionUsuario = localStorage.getItem('sesiónUsuario');

function Salir (){
    window.location.href = '../Pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}
BotonSalir.addEventListener("click", (Salir));

BotonEducador.addEventListener('click', (e) => {
    localStorage.removeItem('rolUsuario')
    localStorage.setItem('rolUsuario', 'Educador')
    if (SesionUsuario == 'registro'){
        window.location.href='../Pantalla de registro educador/PantallaRegistro.html'
    }
    else{
    window.location.href = '../Pantalla de Inicio de Sesion educador/Inicio de sesion.html'
    }

})

BotonEstudiante.addEventListener('click', (e) => {
    localStorage.removeItem('rolUsuario')
    localStorage.setItem('rolUsuario', 'Estudiante')
    if (SesionUsuario == 'registro'){
        window.location.href='../Pantalla de registro/PantallaRegistro.html'
    }
    else{
    window.location.href = '../Pantalla de Inicio de Sesion/Inicio de sesion.html'
    }
})