let emailusuario= document.getElementById("escribir.email");
let contraseña= document.getElementById("escribir.contra");
const Botoniniciarsesion = document.getElementById("BotonIniciarSesion")
Botoniniciarsesion.addEventListener("click",(click) => {
    alert(emailusuario.value +" "+ contraseña.value);
  })