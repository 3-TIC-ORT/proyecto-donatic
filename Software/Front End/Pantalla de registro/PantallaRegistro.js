connect2Server();
const Botonvolver = document.getElementById("Botonvolver");
const BotonRegistrarse = document.getElementById("BotonRegistrarse");
const inputNombreYApellido = document.getElementById("inputNombre");
const inputContrasena = document.getElementById("inputContrasena");
const inputCodigo1 = document.getElementById("input1");
const inputCodigo2 = document.getElementById("input2");
const inputCodigo3 = document.getElementById("input3");
const inputCodigo4 = document.getElementById("input4");
const inputFileFoto = document.getElementById("inputFotoPerfil");
Botonvolver.addEventListener("click", Funcionvolver);
function Funcionvolver() {
  window.location.href =
    "../Pantalla de inicio no registrados/pantalla de inicio no registrados.html";
}
BotonRegistrarse.addEventListener("click", () => {
  const nombre = inputNombreYApellido.value;
  const contrasena = inputContrasena.value;
  const fotoDePerfil = inputFileFoto.files[0];
  const codigo =
    inputCodigo1.value +
    inputCodigo2.value +
    inputCodigo3.value +
    inputCodigo4.value;
  const datosRegistro = {
    nombreCompleto: nombre,
    clave: contrasena,
    codigoClase: codigo,
    foto: fotoDePerfil,
  };
  postEvent("registro", datosRegistro, (respuesta) => {
    window.location.href =
      "../Pantalla de inicio estudiantes/inicio estudiantes.html";
  });
});

function moveNext(current, nextId) {
  if (current.value.length === 1 && nextId) {
    document.getElementById(nextId).focus();
  }
}
function moveBack(event, prevId) {
  if (event.key === "Backspace" && !event.target.value && prevId) {
    document.getElementById(prevId).focus();
  }
}
