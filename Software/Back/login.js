import fs from "fs"; 
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function login ({mail, contraseña}){
let usuario = fs.readFileSync("usuarios.json", "utf-8")
let usuarioArray = JSON.parse(usuario);
    let correcto = false;
for (let i=0; i<usuarioArray.length; i++){
    if (mail===usuarioArray[i].mail && contraseña===usuarioArray[i].contraseña){
        correcto = true
    }     
}
return correcto

}
subscribePOSTEvent ("iniciodesesion", login)
    startServer()