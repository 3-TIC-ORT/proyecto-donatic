import fs from "fs";
import {
  subscribeGETEvent,
  subscribePOSTEvent,
  realTimeEvent,
  startServer,
} from "soquetic";

function registro(data) {
  let usuariosJSON = fs.readFileSync("usuarios.json", "utf-8");
  let usuariosArray = JSON.parse(usuariosJSON);
  let usuario = data;
  usuariosArray.push(usuario);
  let usuariosjson = JSON.stringify(usuariosArray, null, 2);
  fs.writeFileSync("usuarios.json", usuariosjson);

  return usuario;
}
subscribePOSTEvent("registro", registro);

function login(data) {
  let usuario = fs.readFileSync("usuarios.json", "utf-8");
  let usuarioArray = JSON.parse(usuario);
  let respuesta = false;
  for (let i = 0; i < usuarioArray.length; i++) {
    if (
      data.nombreCompleto === usuarioArray[i].nombreCompleto &&
      data.clave === usuarioArray[i].clave
    ) {
      respuesta = true;
    }
  }
  return respuesta;
}
subscribePOSTEvent("iniciodesesion", login);

function crearClase(data) {
  let clasesJSON = fs.readFileSync("clases.json", "utf-8");
  let clasesArray = JSON.parse(clasesJSON);
  let clase = data;
  clasesArray.push(clase);
  let clasesjson = JSON.stringify(clasesArray, null, 2);
  fs.writeFileSync("clases.json", clasesjson);
  return clase;
}
subscribePOSTEvent("creaciondeclases", crearClase);

function mostrarClase() {
  let clasesJSON = fs.readFileSync("clases.json", "utf-8");
  let clasesArray = JSON.parse(clasesJSON);
  let usuariosJSON = fs.readFileSync("usuarios.json", "utf-8");
  let usuariosArray = JSON.parse(usuariosJSON);
  for (let i = 0; i < clasesArray.length; i++) {
    let alumnosArray = [];
    for (let j = 0; j < usuariosArray.length; j++) {
      if (usuariosArray[j].codigoClase)
        if (usuariosArray[j].codigoClase === clasesArray[i].codigoClase) {
          alumnosArray.push(usuariosArray[j].nombreCompleto);
        }
    }
    clasesArray[i].alumnos = alumnosArray;
  }
  return clasesArray;
}
subscribeGETEvent("mostrarClase", mostrarClase);

function sumarPuntajeJuego({ nombreCompleto, juego, Puntaje }) {
  let juegosJSON = fs.readFileSync("juegos.json", "utf-8");
  let juegosArray = JSON.parse(juegosJSON);
  let jugador = null;
  for (let i = 0; i < juegosArray.length; i++) {
    if (juegosArray[i].nombreCompleto === nombreCompleto) {
      jugador = juegosArray[i];
      break;
    }
  }
  if (!jugador) {
    jugador = { nombreCompleto, resultados: [] };
    juegosArray.push(jugador);
  }

  jugador.resultados.push({
    juego,
    resultado: Puntaje,
  });

  let juegosjson = JSON.stringify(juegosArray, null, 2);
  fs.writeFileSync("juegos.json", juegosjson);
  return juegosArray;
}
subscribePOSTEvent("sumarPuntaje", sumarPuntajeJuego);

function subirinfo(data) {
  let pizarronJSON = fs.readFileSync("pizarron.json", "utf-8");
  let pizarronArray = JSON.parse(pizarronJSON);
  let info = data;
  pizarronArray.push(info);
  let pizarronjson = JSON.stringify(pizarronArray, null, 2);
  fs.writeFileSync("pizarron.json", pizarronjson);
  return info;
}
subscribePOSTEvent("subirInfo", subirinfo);

function mostrarInfo() {
  let pizarronJSON = fs.readFileSync("pizarron.json", "utf-8");
  let pizarronArray = JSON.parse(pizarronJSON);
  return pizarronArray;
}
subscribeGETEvent("mostrarinfo", mostrarInfo);

function mostrarPuntaje() {
  let juegosJSON = fs.readFileSync("juegos.json", "utf-8");
  let juegosArray = JSON.parse(juegosJSON);
  return juegosArray;
}
subscribeGETEvent("mostrarPuntaje", mostrarPuntaje);

function gestionPerfil({
  nombreCompleto,
  nuevoNombreCompleto,
  nuevaClave,
  nuevaClase,
  nuevaFoto,
}) {
  let usuariosJSON = fs.readFileSync("usuarios.json", "utf-8");
  let usuariosArray = JSON.parse(usuariosJSON);
  for (let i = 0; i < usuariosArray.length; i++) {
    if (usuariosArray[i].nombreCompleto == nombreCompleto) {
      if (nuevoNombreCompleto) {
        usuariosArray[i].nombreCompleto = nuevoNombreCompleto;
      }

      if (nuevaClave) {
        usuariosArray[i].clave = nuevaClave;
      }
      if (nuevaClase) {
        usuariosArray[i].codigoClase = nuevaClase;
      }
      if (nuevaFoto) {
        usuariosArray[i].foto = nuevaFoto;
      }
      let usuariosjson = JSON.stringify(usuariosArray, null, 2);
      fs.writeFileSync("usuarios.json", usuariosjson);
    }
  }
  let juegosJSON = fs.readFileSync("juegos.json", "utf-8");
  let juegosArray = JSON.parse(juegosJSON);
  for (let i = 0; i < juegosArray.length; i++) {
    if (juegosArray[i].nombreCompleto == nombreCompleto) {
      juegosArray[i].nombreCompleto = nuevoNombreCompleto;
    }
  }
  let juegosjson = JSON.stringify(juegosArray, null, 2);
  fs.writeFileSync("juegos.json", juegosjson);
}
subscribePOSTEvent("gestionPerfil", gestionPerfil);
startServer();

//local storage, que se fije QUE usuario esta y en base a eso que mostar
