connect2Server();

const nombreCompletoOriginal = localStorage.getItem('nombreUsuario');

let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio() {
 window.location.href =
 "../Pantalla de inicio estudiantes/Inicio estudiantes.html";
}
BotonVolver.addEventListener("click", VolverAlInicio);

let BotonCerrarSesion = document.getElementById("BotonCerrarSesion");
function FuncionCerrarSesion() {
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('rolUsuario');
    
    window.location.href = '../pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}
BotonCerrarSesion.addEventListener("click", FuncionCerrarSesion);


const botonConfirmar = document.querySelector('.Confirmar');
const inputNombreYApellido = document.querySelector('input[name="nombreYapellido"]');
const inputContrasena = document.querySelector('input[name="contraseña"]');
const inputFileFoto = document.getElementById('foto-perfil');

const inputCodigo1 = document.getElementById('input1');
const inputCodigo2 = document.getElementById('input2');
const inputCodigo3 = document.getElementById('input3');
const inputCodigo4 = document.getElementById('input4');


botonConfirmar.addEventListener("click", (e) => {
    e.preventDefault();

    if (!nombreCompletoOriginal) {
        alert("Error: No se encontró la sesión del usuario para actualizar el perfil.");
        return;
    }

    const nuevoNombreCompleto = inputNombreYApellido.value.trim() || undefined;
    const nuevaContrasena = inputContrasena.value.trim() || undefined;
    const nuevaFotoFile = inputFileFoto.files[0] || undefined;
    
    const nuevoCodigoClase = 
        inputCodigo1.value + inputCodigo2.value + inputCodigo3.value + inputCodigo4.value;

    const datosGestion = {
        nombreCompleto: nombreCompletoOriginal, 
        
        nuevoNombreCompleto: nuevoNombreCompleto, 
        nuevaContraseña: nuevaContrasena,
        nuevaClase: nuevoCodigoClase.length === 4 ? nuevoCodigoClase : undefined,
        nuevaFoto: nuevaFotoFile, 
    };

    console.log("Enviando gestión de perfil:", datosGestion);

    postEvent("gestionPerfil", datosGestion, (respuesta) => {
        
        if (respuesta && respuesta.error) {
            alert(`Error al actualizar: ${respuesta.error}`);
        } else {
            if (nuevoNombreCompleto) {
                localStorage.setItem('nombreUsuario', nuevoNombreCompleto);
            }
            alert("Perfil actualizado correctamente.");
            window.location.reload();
        }
    });
});


function moveNext(current, nextId) {
if (current.value.length === 1 && nextId) {
  document.getElementById(nextId).focus();
 }
}
function moveBack(event, prevId) {
if (event.key === "Backspace" && !event.target.value && prevId) {
  document.getElementById(prevId).focus(); }
}
