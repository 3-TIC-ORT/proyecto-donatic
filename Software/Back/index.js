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
  unirseAClase({
    codigoClase: data.codigoClase,
    nombreCompleto: data.nombreCompleto,
  });
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
  return clasesArray;
}
subscribeGETEvent("mostrarClase", mostrarClase);

function unirseAClase({ codigoClase, nombreCompleto }) {
  let clasesJSON = fs.readFileSync("clases.json", "utf-8");
  let clasesArray = JSON.parse(clasesJSON);
  for (let i = 0; i < clasesArray.length; i++) {
    if (clasesArray[i].codigoClase == codigoClase) {
      if (!clasesArray[i].alumnos) {
        clasesArray[i].alumnos = [];
      }
      clasesArray[i].alumnos.push(nombreCompleto);
      break;
    }
  }
  clasesJSON = JSON.stringify(clasesArray, null, 2);
  fs.writeFileSync("clases.json", clasesJSON);
  return clasesArray;
}
subscribePOSTEvent("unirseAClase", unirseAClase);

function juegos(data) {
  let juegosJSON = fs.readFileSync("juegos.json", "utf-8");
  let juegosArray = JSON.parse(juegosJSON);
  let juegosResultado = data;
  juegosArray.push(juegosResultado);
  let juegosjson = JSON.stringify(juegosArray, null, 2);
  fs.writeFileSync("juegos.json", juegosjson);
  return juegosResultado;
}

subscribePOSTEvent("juegosResultados", juegos);

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
        usuariosArray[i].clase = nuevaClase;
      }
      if (nuevaFoto) {
        usuariosArray[i].foto = nuevaFoto;
      }
      let usuariosjson = JSON.stringify(usuariosArray, null, 2);
      fs.writeFileSync("usuarios.json", usuariosjson);
    }
  }
  return usuariosArray;
}
subscribePOSTEvent("gestionPerfil", gestionPerfil);
startServer();
