import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function registro (data){
let usuariosJSON = fs.readFileSync ("usuarios.json", "utf-8")
let usuariosArray = JSON.parse (usuariosJSON)
let usuario = data
usuariosArray.push (usuario)
let usuariosjson = JSON.stringify (usuariosArray)
fs.writeFileSync ("usuarios.json", usuariosjson)
return usuario
}

subscribePOSTEvent("inforegistro", registro)
startServer()
