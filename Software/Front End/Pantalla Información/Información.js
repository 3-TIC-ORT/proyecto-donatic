connect2Server();
const BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio() {
  window.location.href =
    "../Pantalla de inicio estudiantes/Inicio estudiantes.html";
}

BotonVolver.addEventListener("click", VolverAlInicio);

const contenedorInfo = document.getElementById("Informa");

getEvent("mostrarinfo", (comentariosRecibidos) => {
  if (Array.isArray(comentariosRecibidos)) {
    comentariosRecibidos.forEach((Info) => {
      const pInfo = document.createElement("p");
      pInfo.textContent = `user: ${Info.post}`;
      contenedorInfo.appendChild(pInfo);
    });
  }
});
