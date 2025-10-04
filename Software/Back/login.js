import fs from "fs"; 
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function login ({nombre, apellido, contraseña}){
let usuario = fs.readFileSync("usuarios.json", "utf-8")
let usuarioArray = JSON.parse(usuario);
    let correcto = false;
for (let i=0; i<usuarioArray.length; i++){
    if (nombre===usuarioArray[i].nombre && apellido===usuarioArray[i].apellido && contraseña===usuarioArray[i].contraseña){
        correcto = true
    }     
}
return correcto

}
subscribePOSTEvent ("iniciodesesion", login)
    startServer()