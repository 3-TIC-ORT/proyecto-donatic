
import fs from "fs"; 
let usuario = fs.readFileSync("usuarios.json", "utf-8")
let usuarioArray = JSON.parse(usuario);

function login (mail, contraseña){
for (let i=0; i<usuarioArray.length; i++){
    if (mail===usuarioArray[i] && contraseña===usuarioArray[i]){
        console.log("correcto")}
        else {
            console.log ("incorrecto")
        }
}
}
login("xxx@gmail.com", "1234")