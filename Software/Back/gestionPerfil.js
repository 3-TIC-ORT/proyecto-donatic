import fs from "fs"; 
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function gestionPerfil ({nuevoNombre, nuevoApellido, nuevaContraseña, nuevaClase}){
let usuariosJSON = fs.readFileSync ("usuarios.json", "utf-8")
let usuariosArray = JSON.parse (usuariosJSON)
let nuevoUsuarioArray 

return 
}

subscribePOSTEvent("gestionPerfil", gestionPerfil)
startServer()
