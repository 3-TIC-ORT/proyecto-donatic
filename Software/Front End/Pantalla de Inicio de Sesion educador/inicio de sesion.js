connect2Server();
let mailImput=document.getElementById("escribir.email")
let passwordImput =document.getElementById("escribir.contra")
let FormInicio= document.getElementById("FormInicio");
const Botoniniciarsesion = document.getElementById("BotonIniciarSesion");

let Botonvolver = document.getElementById("Botonvolver");
function Funcionvolver (){
    window.location.href = '../Pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}
Botonvolver.addEventListener("click", Funcionvolver)


FormInicio.addEventListener("submit", (e)=>{
  e.preventDefault();

  let datosLogin={
    nombreCompleto: mailImput.value,
    clave: passwordImput.value,
  };
 postEvent("iniciodesesion", datosLogin, (respuesta) =>{
  if (respuesta.false){
    alert (respuesta.error);
  }
  else{
    alert("Bienvenido " + respuesta.nombre)
    window.location.href = "../Pantalla inicio Educador/Educador.html"
  }  
 });
});
