connect2Server();

const nombreCompletoOriginal = localStorage.getItem('nombreUsuario');


let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio() {
    window.location.href = '../Pantalla Inicio Educador/Educador.html';
}
if (BotonVolver) BotonVolver.addEventListener("click", VolverAlInicio);

let BotonCerrarSesion = document.getElementById("BotonCerrarSesion");
function FuncionCerrarSesion() {
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('rolUsuario');
    window.location.href = '../Pantalla de inicio no registrados/pantalla de inicio no registrados.html';
}
if (BotonCerrarSesion) BotonCerrarSesion.addEventListener("click", FuncionCerrarSesion);



const botonConfirmar = document.querySelector('.Confirmar');
const inputNombreYApellido = document.querySelector('input[name="nombreYapellido"]');
const inputContrasena = document.querySelector('input[name="contraseña"]');
const inputFileFoto = document.getElementById('foto-perfil');

const inputCodigo1 = document.getElementById('input1');
const inputCodigo2 = document.getElementById('input2');
const inputCodigo3 = document.getElementById('input3');
const inputCodigo4 = document.getElementById('input4');

if (botonConfirmar) {
    botonConfirmar.addEventListener("click", (e) => {
        e.preventDefault();

        if (!nombreCompletoOriginal) {
            alert("Error: No se encontró la sesión del usuario.");
            return;
        }

        const nuevoNombreCompleto = inputNombreYApellido.value.trim() || undefined;
        const nuevaContrasena = inputContrasena.value.trim() || undefined;
        const nuevaFotoFile = inputFileFoto ? (inputFileFoto.files[0] || undefined) : undefined;
                const nuevoCodigoClase = (inputCodigo1 && inputCodigo2 && inputCodigo3 && inputCodigo4) 
            ? (inputCodigo1.value + inputCodigo2.value + inputCodigo3.value + inputCodigo4.value)
            : "";

        const datosGestion = {
            nombreCompleto: nombreCompletoOriginal, 
            nuevoNombreCompleto: nuevoNombreCompleto, 
            nuevaClave: nuevaContrasena,
            nuevaClase: nuevoCodigoClase.length === 4 ? nuevoCodigoClase : undefined,
            nuevaFoto: nuevaFotoFile, 
        };

        console.log("Enviando gestión de perfil (Educador):", datosGestion);

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
}