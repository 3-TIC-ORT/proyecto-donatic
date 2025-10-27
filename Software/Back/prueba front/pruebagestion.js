connect2Server();
let data = {"nombre":"zuri","apellido":"oliver","nuevaContraseña":"123zur"}
function gestionPerfil (data){
    alert (data)
}
postEvent ("gestionPerfil", data , gestionPerfil)