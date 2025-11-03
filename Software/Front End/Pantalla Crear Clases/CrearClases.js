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
  if (event.key === "Backspace" && !event.target.value && prevId) {
    document.getElementById(prevId).focus();
  }
}

let BotonAleatorio =document.getElementById("aleatorio"); 
function Random() {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(input => {
    const randomNum = Math.floor(Math.random() * 10);
    input.value = randomNum;
  });
}
BotonAleatorio.addEventListener("click", (Random));

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