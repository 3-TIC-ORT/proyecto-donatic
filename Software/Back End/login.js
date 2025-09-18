import fs from "fs"; 
let emailIngresado = document.getElementById ("escribir.email");
let contraseñaIngresada = document.getElementById ("escribir.contra");
let usuario = fs.readFileSync("usuarios.json", "utf-8")
let usuarioArray = JSON.parse(usuario);
for (i=0; i<usuarioArray.length; i++){
    if (emailIngresado===usuarioArray[i] && contraseñaIngresada===usuarioArray[i]){
        console.log("correcto")}
        else {
            console.log ("incorrecto")
        }
}