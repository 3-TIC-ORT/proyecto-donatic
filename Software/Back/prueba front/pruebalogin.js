connect2Server();
let data = {"nombre":"dante", "apellido":"oliver", "contraseña":"zur123"}
function pruebalogin (data){
    alert (data)
}
postEvent ("iniciodesesion", data , pruebalogin)