connect2Server();
let data = {"creador":"pepe","nombre":"3TD","ID":"4g6U", "alumnos":["zuri", "lu"]}
function crearClase (data){
    alert (data)
}
postEvent ("creaciondeclases", data , crearClase)