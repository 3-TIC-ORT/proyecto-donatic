const Preguntas = [
    { pregunta: "¿2 + 2 es 4?", Respuesta: true, Numero: 1 },
    { pregunta: "¿2 + 8 es 11?", Respuesta: false, Numero: 2 },
    { pregunta: "¿2 + 3 es 5?", Respuesta: true, Numero: 3 },
    { pregunta: "¿2 + 4 es 6?", Respuesta: true, Numero: 3 },
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
    BtnV.addEventListener('click', () => {
        verificarRespuesta(true);
    });
}


if (BtnF) {
    BtnF.addEventListener('click', () => {
        verificarRespuesta(false);
    });
}
mostrarPregunta();