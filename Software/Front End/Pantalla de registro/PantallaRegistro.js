connect2Server();
const Botonvolver = document.getElementById("Botonvolver");
const BotonRegistrarse = document.getElementById("BotonRegistrarse");
const inputNombreYApellido = document.getElementById("inputNombre");
const inputContrasena = document.getElementById("inputContrasena");
const inputCodigo = document.getElementById("inputCodigoClase");
const inputFileFoto = document.getElementById("inputFotoPerfil");
Botonvolver.addEventListener("click", Funcionvolver)
function Funcionvolver (){
    window.location.href = '../Pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}
BotonRegistrarse.addEventListener("click", () => {
    const nombre = inputNombreYApellido.value;
    const contrasena = inputContrasena.value;
    const codigo = inputCodigo.value;
    const fotoDePerfil = inputFileFoto.files[0]; 
    const datosRegistro = {
        nombreCompleto: nombre,
        clave: contrasena,
        codigoClase: codigo,
        foto: fotoDePerfil
    };


    postEvent("REGISTRO", datosRegistro, (respuesta) => {
        console.log("Respuesta del Backend:", respuesta);
        if (respuesta && respuestaDelBackend.true) {
            window.location.href = '../Pantalla Inicio Educador/Educador.html';
        } else {
            alert("Error en el registro: " + (respuestaDelBackend ? respuestaDelBackend.mensaje : "El servidor no respondió."));
        }
    });
});



