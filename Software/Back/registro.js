import fs from "fs";

function registro (mail, contraseña){
let usuario = mail + contraseña
let usuariojson = JSON.stringify (usuario)
fs.writeFileSync ("Software/Back/usuarios.json", usuariojson)
}
registro ("zuri@gmail.com",0712)
