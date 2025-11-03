const BotonCerrarLaSesion = document.getElementById("ButonVolver");
const BotonEducador = document.getElementById("Educador");
const BotonEstudiante = document.getElementById("Estudiante");

BotonEducador.addEventListener('click', (e) => {
    localStorage.removeItem('rolUsuario')
    localStorage.setItem('rolUsuario', 'Educador')
    window.location.href='../Pantalla de registro/PantallaRegistro.html'
})

BotonEstudiante.addEventListener('click', (e) => {
    localStorage.removeItem('rolUsuario')
    localStorage.setItem('rolUsuario', 'Estudiante')
    window.location.href='../Pantalla de registro/PantallaRegistro.html'
})