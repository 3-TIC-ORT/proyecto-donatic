import fs from "fs"; 
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function subirInfo (data){
let pizarronJSON = fs.readFileSync ("pizarron.json", "utf-8")
let pizarronArray = JSON.parse (pizarronJSON)
let info = data
pizarronArray.push (info)
let pizarronjson = JSON.stringify (pizarronArray)
fs.writeFileSync ("pizarron.json", pizarronjson)
return info
}
subscribePOSTEvent("subirInfo", subirinfo)
startServer()