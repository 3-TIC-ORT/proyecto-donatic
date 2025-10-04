import fs from "fs"; 
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function crearClase (data){
let clasesJSON = fs.readFileSync ("clases.json", "utf-8")
let clasesArray = JSON.parse (clasesJSON)
let clase = data
clasesArray.push (clase)
let clasesjson = JSON.stringify (clasesArray)
fs.writeFileSync ("clases.json", clasesjson)
return clase
}
subscribePOSTEvent("creaciondeclases", crearClase)
startServer()
