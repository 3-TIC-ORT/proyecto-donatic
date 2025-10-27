connect2Server();
let data = {"nombreDelAlumno":"juan","resultado1":"1/10", "resultado2": "1/10", "resultado3":"1/10", "promedioGeneral": "1"}
function juegos (data){
    alert (data)
}
postEvent ("juegosResultados", data , juegos)