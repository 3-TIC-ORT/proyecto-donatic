import fs from "fs";
let usuario = {mail: "zzz@gmail.com", contraseña : 2468}
let usuariojson = JSON.stringify (usuario)
fs.writeFileSync ("Software/Back/usuarios.json", usuariojson)