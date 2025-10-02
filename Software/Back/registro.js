import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function registro ({rol, nombre, apellido, mail, contraseña}){
let data = fs.readFileSync ("usuarios.json", "utf-8")
let usuariosArray = JSON.parse (data)
let usuario = {rol, nombre, apellido, mail, contraseña}
usuariosArray.push (usuario)
let usuariosjson = JSON.stringify (usuariosArray)
fs.writeFileSync ("usuarios.json", usuariosjson)
}

subscribePOSTEvent("info", registro)
startServer()
