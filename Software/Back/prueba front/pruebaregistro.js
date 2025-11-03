connect2Server();
let data = {nombreAlumno:"marto", codigoClase: "4g6U"}
function pruebaregistro (data){
    console.log (data)
}
postEvent ("registro", data, pruebaregistro)



