import fs from "fs";

function registro (mail, contraseña){
let data = fs.readFileSync ("Software/Back/usuarios.json", "utf-8")
let usuariosArray = JSON.parse (data)
let usuario = {mail, contraseña}
usuariosArray.push (usuario)
let usuariosjson = JSON.stringify (usuariosArray)
fs.writeFileSync ("Software/Back/usuarios.json", usuariosjson)
}
registro ("zuri@gmail.com",0712)