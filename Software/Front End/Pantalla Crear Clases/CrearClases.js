    let BotonIrClases = document.getElementById("BotonClases");
function IrClases (){
    window.location.href='../Pantalla Gestionar Clases/Clases.html'
}
BotonIrClases.addEventListener("click", (IrClases));
let Nombre = document.getElementById("nombreClase");
let Contraseña = document.getElementById("contraseñaClase");
let BotonCrear = document.getElementById("botonCrear");
BotonCrear.addEventListener("click",(click) => {
    alert(Nombre.value +", "+ Contraseña.value);
  })