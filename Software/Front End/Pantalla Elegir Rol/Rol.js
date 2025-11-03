const BotonCerrarLaSesion = document.getElementById("ButonVolver");
const BotonEducador = document.getElementById("Educador");
const BotonEstudiante = document.getElementById("Estudiante");
const SesionUsuario = localStorage.getItem('sesiónUsuario');

BotonEducador.addEventListener('click', (e) => {
    localStorage.removeItem('rolUsuario')
    localStorage.setItem('rolUsuario', 'Educador')
    if (SesionUsuario == 'registro'){
        window.location.href='../Pantalla de registro/PantallaRegistro.html'
    }
    else{
    window.location.href = '../Pantalla de Inicio de Sesion/Inicio de sesion.html'
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