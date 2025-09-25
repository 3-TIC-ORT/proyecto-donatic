
import fs from "fs"; 
let usuario = fs.readFileSync("usuarios.json", "utf-8")
let usuarioArray = JSON.parse(usuario);

function login (mail, contraseña){
    let correcto = false;
for (let i=0; i<usuarioArray.length; i++){
    if (mail===usuarioArray[i].mail && contraseña===usuarioArray[i].contraseña){
        correcto = true
    }     
}
console.log (correcto)

}
login("yyy@gmail.com", 5678)