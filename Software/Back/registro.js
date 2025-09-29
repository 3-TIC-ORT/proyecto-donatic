import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function registro (mail, contraseña){
let data = fs.readFileSync ("usuarios.json", "utf-8")
let usuariosArray = JSON.parse (data)
let usuario = {mail, contraseña}
usuariosArray.push (usuario)
let usuariosjson = JSON.stringify (usuariosArray)
fs.writeFileSync ("usuarios.json", usuariosjson)
}
registro ("zuri@gmail.com", "0712")
startServer()