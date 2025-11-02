    let BotonIrClases = document.getElementById("BotonClases");
function IrClases (){
    window.location.href='../Pantalla clases/Clases.html'
}
BotonIrClases.addEventListener("click", (IrClases));

function moveNext(current, nextId) {
  if (current.value.length === 1 && nextId) {
    document.getElementById(nextId).focus();
  }
}
function moveBack(event, prevId) {
  // Si presiona Backspace y el input está vacío, volver al anterior
  if (event.key === "Backspace" && !event.target.value && prevId) {
    document.getElementById(prevId).focus();
  }
}

let Nombre = document.getElementById("nombreClase");
let Contraseña = document.getElementById("contraseñaClase");
let BotonCrear = document.getElementById("botonCrear");
let datosRegistro = {
    nombre: Nombre,
    codigo: Contraseña
};
BotonCrear.addEventListener("click",(click) => {
    alert(Nombre.value +", "+ Contraseña.value);
  })