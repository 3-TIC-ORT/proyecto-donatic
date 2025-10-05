import fs from "fs"; 
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function gestionPerfil (data){
let usuariosJSON = fs.readFileSync ("usuarios.json", "utf-8")
let usuariosArray = JSON.parse (usuariosJSON)
for (let i = 0, i<usuariosArray.length, i++){
if {

}    
}

return 
}

subscribePOSTEvent("gestionPerfil", gestionPerfil)
startServer()
