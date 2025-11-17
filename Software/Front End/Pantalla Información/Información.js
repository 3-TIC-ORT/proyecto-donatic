connect2Server();
const BotonVolver = document.getElementById("VolverInicio");

function VolverAlInicio() {
  window.location.href =
    "../Pantalla de inicio estudiantes/Inicio estudiantes.html";
}

if (BotonVolver) {
  BotonVolver.addEventListener("click", VolverAlInicio);
}

const contenedorInfo = document.getElementById("Informa");

getEvent("mostrarinfo", (comentariosRecibidos) => {
  if (Array.isArray(comentariosRecibidos)) {
    contenedorInfo.innerHTML = "";

    comentariosRecibidos.forEach((posteo) => {
      const titulo = posteo.titulo || "Sin Título";
      const contenido = posteo.contenido || "Contenido no disponible";

      const hTitulo = document.createElement("h4");
      hTitulo.textContent = ` ${titulo}`;
      contenedorInfo.appendChild(hTitulo);

      const pInfo = document.createElement("p");
      pInfo.textContent = contenido; // Se muestra solo el contenido
      contenedorInfo.appendChild(pInfo);

      contenedorInfo.appendChild(document.createElement("hr"));
    });
    //Ayuda 17/11
    if (comentariosRecibidos.length === 0) {
      contenedorInfo.textContent =
        "No hay información disponible en el pizarrón.";
    }
  } else {
    contenedorInfo.textContent = "Error al cargar la información.";
  }
});
