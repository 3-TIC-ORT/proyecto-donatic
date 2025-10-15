import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function juegos (data){
let juegosJSON = fs.readFileSync ("juegos.json", "utf-8")
let juegosArray = JSON.parse (juegosJSON)
let juegosResultado = data
juegosArray.push (juesgosResultado)
let juegosjson = JSON.stringify (juegosArray)
fs.writeFileSync ("juegos.json", juegosjson)
return juegosResultado
}

subscribePOSTEvent("juegosResultados", juegos)
startServer()