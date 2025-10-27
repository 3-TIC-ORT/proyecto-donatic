connect2Server();
let data = {"post":"yo done sangre"}
function pizarron (data){
    alert (data)
}
postEvent ("subirInfo", data , pizarron)