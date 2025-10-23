connect2Server();
let BotonVolver= document.getElementById("VolverMenu")
let mailImput=document.getElementById("escribir.email")
let passwordImput =document.getElementById("escribir.contra")
let FormInicio= document.getElementById("FormInicio");
const Botoniniciarsesion = document.getElementById("BotonIniciarSesion");
BotonVolver.addEventListener("click", FuncionRegresar);
function FuncionRegresar (){
window.location.href = '../Pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}
FormInicio.addEventListener("submit", (e)=>{
  e.preventDefault();

  let datosLogin={
    mail: mailImput.value,
    password: passwordImput.value,
  };
 postEvent("iniciodesesion", datosLogin, (respuesta) =>{
  if (respuesta.false){
    alert (respuesta.error);
  }
  else{
    alert("Bienvenido" + respuesta.nombre)
    window.location.href = "../Pantalla de inicio estudiantes/inicio estudiantes.html"
  }  
 });
});
