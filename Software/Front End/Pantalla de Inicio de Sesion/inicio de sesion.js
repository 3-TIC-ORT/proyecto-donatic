connect2Server();
let mailImput = document.getElementById("escribir.email");
let passwordImput = document.getElementById("escribir.contra");
let FormInicio = document.getElementById("FormInicio");
const Botoniniciarsesion = document.getElementById("BotonIniciarSesion");
const RolUsuario = localStorage.getItem("rolUsuario");

let Botonvolver = document.getElementById("Botonvolver");
function Funcionvolver() {
  window.location.href =
    "../Pantalla de inicio no registrados/pantalla de inicio no registrados.html";
}
if (Botonvolver) {
  Botonvolver.addEventListener("click", Funcionvolver);
}

FormInicio.addEventListener("submit", (e) => {
  e.preventDefault();

  let datosLogin = {
    nombreCompleto: mailImput.value,
    clave: passwordImput.value,
  };
  postEvent("iniciodesesion", datosLogin, (respuesta) => {
    if (respuesta === true) {
      localStorage.setItem("nombreUsuario", datosLogin.nombreCompleto);
      alert("Bienvenido " + datosLogin.nombreCompleto);
      window.location.href =
        "../Pantalla de inicio estudiantes/inicio estudiantes.html";
    } else {
      alert(
        "Error de inicio de sesión: El usuario o la clave son incorrectos."
      );
    }
  });
});
