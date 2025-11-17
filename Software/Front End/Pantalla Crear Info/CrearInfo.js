connect2Server();

let BotonVolver = document.getElementById("VolverInicio");
const popup = document.getElementById("popup");
const subirinfo = document.getElementById("subirinfo");
const confirmar = document.getElementById("confirmar");

const inputTitulo = document.getElementById("tituloposteo");
const inputInformacion = document.getElementById("informacion");

let ListadeInfo = [];
const inputInfo = document.getElementById("InfoInput");
const subirInfo = document.getElementById("SubirLaInfo");
const ulInfo = document.getElementById("Info");

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
      });

      if (inputTitulo) inputTitulo.value = "";
      if (inputInformacion) inputInformacion.value = "";
      if (popup) popup.style.display = "none";
    } else {
      alert("Por favor, complete el título y la información.");
    }
  });
}

if (subirInfo) {
  subirInfo.addEventListener("click", function () {
    const info = inputInfo ? inputInfo.value.trim() : "";

    if (info !== "") {
      ListadeInfo.push(info);
      if (inputInfo) inputInfo.value = "";

      if (ulInfo) ulInfo.innerHTML = "";

      for (let i = 0; i < ListadeInfo.length; i++) {
        const li = document.createElement("li");
        li.textContent = ListadeInfo[i];
        li.className = "tipocomentario";
        if (ulInfo) ulInfo.appendChild(li);
      }

      postEvent("subirInfoListaSimple", ListadeInfo, () => {});
    }
  });
}
