import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function registro (data){
let usuariosJSON = fs.readFileSync ("usuarios.json", "utf-8")
let usuariosArray = JSON.parse (usuariosJSON)
let usuario =  data
usuariosArray.push (usuario)
let usuariosjson = JSON.stringify (usuariosArray, null, 2)
fs.writeFileSync ("usuarios.json", usuariosjson)
unirseAClase({codigoClase: data.codigoClase, nombreAlumno: data.nombreAlumno})
return usuario

}
subscribePOSTEvent("registro", registro);

function login (data){
let usuario = fs.readFileSync("usuarios.json", "utf-8")
let usuarioArray = JSON.parse(usuario);
let respuesta = false;
for (let i=0; i<usuarioArray.length; i++){
    if (data.nombreCompleto===usuarioArray[i].nombreCompleto && data.clave===usuarioArray[i].clave){
        respuesta = true
    }
}
return respuesta
}
subscribePOSTEvent ("iniciodesesion", login);

function crearClase (data){
let clasesJSON = fs.readFileSync ("clases.json", "utf-8")
let clasesArray = JSON.parse (clasesJSON)
let clase = data
clasesArray.push (clase)
let clasesjson = JSON.stringify (clasesArray, null, 2)
fs.writeFileSync ("clases.json", clasesjson)
return clase
}
subscribePOSTEvent("creaciondeclases", crearClase);

function mostrarClase (){
    let clasesJSON = fs.readFileSync ("clases.json", "utf-8")
    let clasesArray = JSON.parse (clasesJSON) 
    return clasesArray
}
subscribeGETEvent("mostrarClase", mostrarClase)

function unirseAClase ({codigoClase, nombreAlumno}){
let clasesJSON = fs.readFileSync ("clases.json", "utf-8")
    let clasesArray = JSON.parse (clasesJSON) 
    for(let i = 0; i<clasesArray.length; i++){
        if (clasesArray[i].codigoClase == codigoClase){
            if (!clasesArray.alumnos){
                clasesArray.alumnos = []
            }
            clasesArray[i].alumnos.push (nombreAlumno)
        }
    }
    let clasesjson = JSON.stringify (clasesArray, null, 2)
fs.writeFileSync ("clases.json", clasesjson)
return clasesArray
}
subscribePOSTEvent ("unirseAClase", unirseAClase)

function juegos (data){
let juegosJSON = fs.readFileSync ("juegos.json", "utf-8")
let juegosArray = JSON.parse (juegosJSON)
let juegosResultado = data
juegosArray.push (juegosResultado)
let juegosjson = JSON.stringify (juegosArray, null, 2)
fs.writeFileSync ("juegos.json", juegosjson)
return juegosResultado
}

subscribePOSTEvent("juegosResultados", juegos);

function sumarPuntajeJuego ({nombreAlumno, juego, resultado}){
let juegosJSON = fs.readFileSync ("juegos.json", "utf-8")
    let juegosArray = JSON.parse (juegosJSON) 
    for(let i = 0; i<juegosArray.length; i++){
        if (juegosArray[i].nombreDelAlumno == nombreAlumno){
            if (!juegosArray.resultados){
                juegosArray.resultados = []
            }
            juegosArray[i].resultados.push ({juego, resultado})
        }
    }
    let juegosjson = JSON.stringify (juegosArray, null, 2)
fs.writeFileSync ("juegos.json", juegosjson)
return juegosArray
}
subscribePOSTEvent ("sumarPuntaje",sumarPuntajeJuego)

function subirinfo (data){
let pizarronJSON = fs.readFileSync ("pizarron.json", "utf-8")
let pizarronArray = JSON.parse (pizarronJSON)
let info = data
pizarronArray.push (info)
let pizarronjson = JSON.stringify (pizarronArray, null, 2)
fs.writeFileSync ("pizarron.json", pizarronjson)
return info
}
subscribePOSTEvent("subirInfo", subirinfo);

function mostrarInfo (){
    let pizarronJSON = fs.readFileSync ("pizarron.json", "utf-8")
    let pizarronArray = JSON.parse (pizarronJSON) 
    return pizarronArray
}
subscribeGETEvent("mostrarinfo", mostrarInfo)


function gestionPerfil ({nombre, apellido, nuevoNombre, nuevoApellido, nuevaContraseña, nuevaClase, nuevaFoto}){
let usuariosJSON = fs.readFileSync ("usuarios.json", "utf-8")
let usuariosArray = JSON.parse (usuariosJSON)
for (let i = 0; i<usuariosArray.length; i++){
    if (usuariosArray[i].nombre == nombre && usuariosArray[i].apellido == apellido){
if(nuevoNombre){
    usuariosArray[i].nombre = nuevoNombre
}
if(nuevoApellido){
    usuariosArray[i].apellido = nuevoApellido
}
if(nuevaContraseña){
    usuariosArray[i].contraseña = nuevaContraseña
}
if(nuevaClase){
    usuariosArray[i].clase = nuevaClase
}
if(nuevaFoto){
    usuariosArray[i].foto = nuevaFoto
}
let usuariosjson = JSON.stringify(usuariosArray, null, 2)
fs.writeFileSync ("usuarios.json", usuariosjson)
    }
}
return usuariosArray
}
subscribePOSTEvent("gestionPerfil", gestionPerfil);
    startServer()

// hacer que guarde rol pq no me viene con el registro. tmp se guarda la clase?!
//arreglar porque con el registro no se une a clase