function VolverAlInicio (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}

BotonVolver.addEventListener("click", VolverAlInicio);

const contenedorInfo = document.getElementById('Informa');

getEvent("mostrarinfo", (comentariosRecibidos) => {
    if (Array.isArray(comentariosRecibidos)) {
        comentariosRecibidos.forEach(Info => {
            const pInfo = document.createElement('p');
            pInfo.textContent = `*${Info.Infor}`;
            contenedorInfo.appendChild(pInfo);
        });
    }
});