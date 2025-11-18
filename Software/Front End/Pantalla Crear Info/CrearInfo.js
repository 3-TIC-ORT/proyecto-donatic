connect2Server();

let BotonVolver = document.getElementById("VolverInicio");
const popup = document.getElementById("popup");
const subirinfo = document.getElementById("subirinfo");
const confirmar = document.getElementById("confirmar");

const inputTitulo = document.getElementById("tituloposteo");
const inputInformacion = document.getElementById("informacion");

const contenedorPrincipal = document.querySelector(".Container");

function VolveralInicio() {
  window.location.href = "../Pantalla Inicio Educador/Educador.html";
}

if (BotonVolver) {
  BotonVolver.addEventListener("click", VolveralInicio);
}

if (popup) {
  popup.style.display = "none";
}

if (subirinfo && popup) {
  subirinfo.addEventListener("click", function () {
    popup.style.display = "block";
  });
}

if (confirmar) {
  confirmar.addEventListener("click", function () {
    const titulo = inputTitulo ? inputTitulo.value.trim() : "";
    const contenido = inputInformacion ? inputInformacion.value.trim() : "";

    if (titulo !== "" && contenido !== "") {
      alert(
        `Se enviará el siguiente posteo:\n\nTítulo: ${titulo}\nContenido: ${contenido}`
      );

      const datosPosteo = {
        titulo: titulo,
        contenido: contenido,
      };

      postEvent("subirInfo", datosPosteo, (respuesta) => {
        console.log("Información subida con éxito:", respuesta);
        cargarPostsEnTarjetas();
      });

      if (inputTitulo) inputTitulo.value = "";
      if (inputInformacion) inputInformacion.value = "";
      if (popup) popup.style.display = "none";
    } else {
      alert("Por favor, complete el título y la información.");
    }
  });
}

function cargarPostsEnTarjetas() {
  if (!contenedorPrincipal) {
    console.error(
      "ERROR: No se encontró el contenedor principal con la clase '.Container'."
    );
    return;
  }

  contenedorPrincipal.innerHTML = "";

  getEvent("mostrarinfo", (posteosRecibidos) => {
    if (!Array.isArray(posteosRecibidos) || posteosRecibidos.length === 0) {
      contenedorPrincipal.textContent = "";
      return;
    }

    posteosRecibidos.forEach((post, index) => {
      const tituloPost = post.titulo || "Post sin Título";
      const contenidoPost = post.contenido || "Post sin Contenido";

      const tarjetaActual = document.createElement("div");
      tarjetaActual.classList.add("tarjeta");

      tarjetaActual.innerHTML = `
                <div class="titulo">${tituloPost}</div>
                <div class="info">${contenidoPost}</div>
            `;

      contenedorPrincipal.appendChild(tarjetaActual);
    });
  });
}

cargarPostsEnTarjetas();

setInterval(cargarPostsEnTarjetas, 5000);

if (document.getElementById("SubirLaInfo")) {
  document.getElementById("SubirLaInfo").addEventListener("click", function () {
    const info = document.getElementById("InfoInput")
      ? document.getElementById("InfoInput").value.trim()
      : "";

    if (info !== "") {
    }
  });
}
