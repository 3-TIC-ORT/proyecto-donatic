let BotonVolver= document.getElementById("VolverMenu")
let emailusuario= document.getElementById("escribir.email");
let contraseña= document.getElementById("escribir.contra");
const Botoniniciarsesion = document.getElementById("BotonIniciarSesion");
BotonVolver.addEventListener("click", FuncionRegresar);
function FuncionRegresar (){
window.location.href = '../Pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}
Botoniniciarsesion.addEventListener("click",(click) => {
    alert(emailusuario.value +" "+ contraseña.value);
  })
Botoniniciarsesion.addEventListener("click", FuncionIniciarSesion)
function FuncionIniciarSesion (){
  window.location.href = '../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}