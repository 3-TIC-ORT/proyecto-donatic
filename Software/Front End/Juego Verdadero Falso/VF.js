const Preguntas = [
  {
    pregunta:
      "LAS DONACIONES DE SANGRE PUEDEN DEBILITAR AL CUERPO PERMANENTEMENTE",
    Respuesta: false,
    Numero: 1,
  },
  {
    pregunta: "AL DONAR SANGRE, ME PUEDO CONTAGIAR DE ALGUNA ENFERMEDAD",
    Respuesta: false,
    Numero: 2,
  },
  {
    pregunta: "AL TOMAR MEDICAMENTOS, NO TENGO LA POSIBILIDAD DE DONAR SANGRE",
    Respuesta: false,
    Numero: 3,
  },
  {
    pregunta:
      "SI A LO LARGO DE MI VIDA DONO MUCHAS VECES, VOY A DESARROLLAR ANEMIA",
    Respuesta: false,
    Numero: 4,
  },
  {
    pregunta: "DESPUES DE DONAR, NO PUEDO HACER NINGUN TIPO DE EJERCICIO",
    Respuesta: true,
    Numero: 5,
  },
  {
    pregunta: "DESPUÉS DE DONAR UNA VEZ, NO PUEDO DONAR NUNCA MÁS",
    Respuesta: false,
    Numero: 6,
  },
  {
    pregunta: "UNA UNICA DONACIÓN PUEDE AYUDAR A SALVAR MULTIPLES VIDAS",
    Respuesta: true,
    Numero: 7,
  },
  {
    pregunta:
      "GRACIAS A LOS EXAMENES PREVIOS A LA DONACIÓN, SE PUEDE DETECTAR ALGUNA ENFERMEDAD",
    Respuesta: true,
    Numero: 8,
  },
  {
    pregunta: "LA SANGRE DONADA SE PUEDE DIVIDIR EN COMPONENTES",
    Respuesta: true,
    Numero: 9,
  },
  {
    pregunta:
      "CIERTOS TIPOS DE SANGRE SON MÁS NECESITADOS EN LOS HOSPITALES POR SU ESCASEZ",
    Respuesta: true,
    Numero: 10,
  },
];

let NumeroPregunta = 0;
let Puntaje = 0;
const elementoPregunta = document.getElementById("pregunta");
const BtnV = document.getElementById("btnV");
const BtnF = document.getElementById("btnF");
const elementoPuntaje = document.getElementById("puntaje");
function mostrarPregunta() {
  if (NumeroPregunta < Preguntas.length) {
    elementoPregunta.textContent = Preguntas[NumeroPregunta].pregunta;
  } else {
    elementoPregunta.textContent = `Tu puntaje final es: ${Puntaje} de ${Preguntas.length}.`;
    //Aca va a ir el post event

    BtnV.disabled = true;
    BtnF.disabled = true;
  }
  if (elementoPuntaje) {
    elementoPuntaje.textContent = `Puntaje: ${Puntaje}`;
  }
}
if (elementoPuntaje) {
  elementoPuntaje.textContent = `Puntaje: ${Puntaje}`;
}

function verificarRespuesta(respuestaUsuario) {
  if (NumeroPregunta >= Preguntas.length) return;
  const preguntaActual = Preguntas[NumeroPregunta];

  if (respuestaUsuario === preguntaActual.Respuesta) {
    alert("¡Correcto!");
    Indicador.classList.add("correcto");
    Puntaje++;
  } else {
    alert(`¡Incorrecto!`);
    Indicador.classList.add("incorrecto");
  }

  NumeroPregunta++;

  mostrarPregunta();
}
if (BtnV) {
  BtnV.addEventListener("click", () => {
    verificarRespuesta(true);
  });
}

if (BtnF) {
  BtnF.addEventListener("click", () => {
    verificarRespuesta(false);
  });
}
mostrarPregunta();
let BotonVolver = document.getElementById("BotonVolver");
function VolverAlInicio() {
  window.location.href = "../Pantalla de Juegos/Selector de Juegos.html";
}
BotonVolver.addEventListener("click", VolverAlInicio);
