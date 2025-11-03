connect2Server();
let data = {nombreAlumno: "pepe", juego:2, resultado:"1/10"}
function sumarPuntaje (data){
    console.log (data)
}
postEvent ("sumarPuntaje", data, sumarPuntaje)

