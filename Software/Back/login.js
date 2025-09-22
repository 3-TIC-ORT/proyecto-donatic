
import fs from "fs"; 
let usuario = fs.readFileSync("usuarios.json", "utf-8")
let usuarioArray = JSON.parse(usuario).usuarios;

function login (mail, contraseña){
for (let i=0; i<usuarioArray.length; i++){
    if (mail===usuarioArray[i].mail && contraseña===usuarioArray[i].contraseña){
        let correcto = true
    }
    else {
        let correcto = false
    }
    console.log (correcto)
        
}
}
login("yyy@gmail.com", 5678)