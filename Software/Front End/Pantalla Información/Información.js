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

      const postDiv = document.createElement("div");
      postDiv.classList.add("post-card");

      const hTitulo = document.createElement("h3");
      hTitulo.textContent = titulo;
      hTitulo.classList.add("post-titulo");
      postDiv.appendChild(hTitulo);

      const pInfo = document.createElement("p");
      pInfo.textContent = contenido;
      pInfo.classList.add("post-contenido");
      postDiv.appendChild(pInfo);

      contenedorInfo.appendChild(postDiv);
    });

    if (comentariosRecibidos.length === 0) {
      contenedorInfo.textContent =
        "No hay información disponible en el pizarrón.";
    }
  } else {
    contenedorInfo.textContent = "Error al cargar la información.";
  }
});
