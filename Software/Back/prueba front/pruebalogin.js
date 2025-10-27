connect2Server();
let data = {"nombre":"zuri", "apellido":"oliver", "contraseña":"zur123"}
function pruebalogin (data){
    alert (data)
}
postEvent ("iniciodesesion", data , pruebalogin)