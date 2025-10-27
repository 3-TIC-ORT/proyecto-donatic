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

subscribePOSTEvent("registro", registro);

function login ({nombre, apellido, contraseña}){
let usuario = fs.readFileSync("usuarios.json", "utf-8")
let usuarioArray = JSON.parse(usuario);
let respuesta = false;
for (let i=0; i<usuarioArray.length; i++){
    if (nombre===usuarioArray[i].nombre && apellido===usuarioArray[i].apellido && contraseña===usuarioArray[i].contraseña){
        respuesta = true
    }
return respuesta
}
}
subscribePOSTEvent ("iniciodesesion", login);

function crearClase (data){
let clasesJSON = fs.readFileSync ("clases.json", "utf-8")
let clasesArray = JSON.parse (clasesJSON)
let clase = data
clasesArray.push (clase)
let clasesjson = JSON.stringify (clasesArray)
fs.writeFileSync ("clases.json", clasesjson)
return clase
}
subscribePOSTEvent("creaciondeclases", crearClase);

function juegos (data){
let juegosJSON = fs.readFileSync ("juegos.json", "utf-8")
let juegosArray = JSON.parse (juegosJSON)
let juegosResultado = data
juegosArray.push (juegosResultado)
let juegosjson = JSON.stringify (juegosArray)
fs.writeFileSync ("juegos.json", juegosjson)
return juegosResultado
}

subscribePOSTEvent("juegosResultados", juegos);

function subirinfo (data){
let pizarronJSON = fs.readFileSync ("pizarron.json", "utf-8")
let pizarronArray = JSON.parse (pizarronJSON)
let info = data
pizarronArray.push (info)
let pizarronjson = JSON.stringify (pizarronArray)
fs.writeFileSync ("pizarron.json", pizarronjson)
return info
}
subscribePOSTEvent("subirInfo", subirinfo);

function gestionPerfil ({nombre, apellido, nuevoNombre, nuevoApellido, nuevaContraseña, nuevaClase, nuevaFoto}){
let usuariosJSON = fs.readFileSync ("usuarios.json", "utf-8")
let usuariosArray = JSON.parse (usuariosJSON)
for (let i = 0; i<usuariosArray.length; i++){
    if (usuariosArray[i].nombre == nombre && usuariosArray[i].apellido == apellido){
usuariosArray[i] = [nuevoNombre, nuevoApellido, nuevaContraseña, nuevaClase, nuevaFoto]
let usuariosjson = JSON.stringify(usuariosArray)
fs.writeFileSync ("usuarios.json", usuariosjson)
    }
}
return usuariosArray
}
subscribePOSTEvent("gestionPerfil", gestionPerfil);
    startServer()

