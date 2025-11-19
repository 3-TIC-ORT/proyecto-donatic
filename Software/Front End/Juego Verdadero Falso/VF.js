connect2Server();
const nombreCompleto = localStorage.getItem("nombreUsuario");
const juego = "Verdadero/Falso";
const Preguntas = [
  {
    pregunta:
      "LAS DONACIONES DE SANGRE PUEDEN DEBILITAR AL CUERPO PERMANENTEMENTE",
    Respuesta: false,
    Numero: 1,
    Moraleja:
      "Al donar sangre, los examenes previos permiten averiguar si una persona es apta para donar. Por lo tanto, una persona que puede donar no se debería debilitar por donar.",
  },
  {
    pregunta: "AL DONAR SANGRE, ME PUEDO CONTAGIAR DE ALGUNA ENFERMEDAD",
    Respuesta: false,
    Numero: 2,
    Moraleja:
      "Este mito es incorrecto ya que los hospitales y bancos de sangre se aseguran de que todos los materiales utilizados para la extracción estén esterilizados y no contengan ninguna infección.",
  },
  {
    pregunta: "AL TOMAR MEDICAMENTOS, NO TENGO LA POSIBILIDAD DE DONAR SANGRE",
    Respuesta: false,
    Numero: 3,
    Moraleja:
      "Esta afirmación es parcialmente incorrecta ya que solamente hay un par de medicamentos que prohiben la donación de sangre, pero es posible donar aún tomando otras medicaciones.",
  },
  {
    pregunta:
      "SI A LO LARGO DE MI VIDA DONO MUCHAS VECES, VOY A DESARROLLAR ANEMIA",
    Respuesta: false,
    Numero: 4,
    Moraleja:
      "Si esta persona, como donante, cumple con los requisitos de esperar las 8 semanas requeridas entre donaciones, no se debería desarrollar una falta de hierro (anemia).",
  },
  {
    pregunta: "DESPUES DE DONAR, NO PUEDO HACER NINGUN TIPO DE EJERCICIO",
    Respuesta: true,
    Numero: 5,
    Moraleja:
      "Cuando una persona dona sangre, luego es normal que el donante se encuentre cansado y necesite reposo, por lo que se recomienda no  hacer ejercico fisico intenso el mismo día, pero luego si se puede.",
  },
  {
    pregunta: "DESPUÉS DE DONAR UNA VEZ, NO PUEDO DONAR NUNCA MÁS",
    Respuesta: false,
    Numero: 6,
    Moraleja:
      "Las donaciones de sangre se pueden repetir a lo largo de nuestra vida con tal de cumplir con los requisitos que se piden para estas.",
  },
  {
    pregunta: "UNA UNICA DONACIÓN PUEDE AYUDAR A SALVAR MULTIPLES VIDAS",
    Respuesta: true,
    Numero: 7,
    Moraleja:
      "Una sola donación de sangre puede ayudar a salvar por lo menos 3 vidas, dependiendo del componente que precise el donante (globulos rojos, plaquetas,etc).",
  },
  {
    pregunta:
      "GRACIAS A LOS EXAMENES PREVIOS A LA DONACIÓN, SE PUEDE DETECTAR ALGUNA ENFERMEDAD",
    Respuesta: true,
    Numero: 8,
    Moraleja:
      "Multiples de los examenes que se llevan a cabo previos a la donación, como un examen de los signos vitales y un hematocrito, ayudan a saber si el donante tiene alguna enfermedad.",
  },
  {
    pregunta: "LA SANGRE DONADA SE PUEDE DIVIDIR EN COMPONENTES",
    Respuesta: true,
    Numero: 9,
    Moraleja:
      "Una persona que recibe una donación puede no necesitar de un componente pero si de otro. Por ejemplo, una persona puede precisar de una donación de plaquetas pero no de globulos rojos. ",
  },
  {
    pregunta:
      "CIERTOS TIPOS DE SANGRE SON MÁS NECESITADOS EN LOS HOSPITALES POR SU ESCASEZ",
    Respuesta: true,
    Numero: 10,
    Moraleja:
      "En Argentina, como no se llevan a cabo tantas donaciones, es normal que hayan hospitales o bancos de sangre que necesiten mayor cantidad de donaciones de un tipo de sangre especifico.",
  },
];

let NumeroPregunta = 0;
let Puntaje = 0;
const elementoPregunta = document.getElementById("pregunta");
const BtnV = document.getElementById("btnV");
const BtnF = document.getElementById("btnF");
const elementoPuntaje = document.getElementById("puntaje");
const popup = document.getElementById("popup1");
const popupincorrecto = document.getElementById("popupinco");

function ocultarPopUp() {
  popup.style.display = "none";
  popupincorrecto.style.display = "none";
}
ocultarPopUp();

function mostrarPopUp(mensaje) {
  popup.style.display = "block";
  popup.querySelector("#CuadradoCorrecto").textContent = mensaje;
}

function mostrarPopUpIncorrecto(texto) {
  popupincorrecto.style.display = "block";
  popupincorrecto.querySelector(".moraleja").textContent = texto.Moraleja;
}

const Indicador = document.getElementById("Indicador");

const botonSiguiente = document.getElementById("PasarSiguiente");

botonSiguiente.addEventListener("click", () => {
  ocultarPopUp();
  Puntaje++;
  NumeroPregunta++;
  mostrarPregunta();
});

const botonSiguienteInco = document.getElementById("PasarSiguienteInco");

botonSiguienteInco.addEventListener("click", () => {
  ocultarPopUp();
  NumeroPregunta++;
  mostrarPregunta();
});

function mostrarPregunta() {
  if (NumeroPregunta < Preguntas.length) {
    elementoPregunta.textContent = Preguntas[NumeroPregunta].pregunta;
  } else {
    elementoPregunta.textContent = `Tu puntaje final es: ${Puntaje} de ${Preguntas.length}.`;

    BtnV.disabled = true;
    BtnF.disabled = true;
    const datosPuntaje = {
      nombreCompleto: nombreCompleto,
      juego: juego,
      Puntaje: Puntaje,
    };

    postEvent("sumarPuntaje", datosPuntaje, (juegosArray) => {
      console.log(
        "✅ Puntaje enviado y guardado. Respuesta del servidor:",
        juegosArray
      );
    });
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
    mostrarPopUp("Correcto!");
    Indicador.classList.add("correcto");
    Puntaje++;
  } else {
    mostrarPopUpIncorrecto(preguntaActual);
    Indicador.classList.add("incorrecto");
  }
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
