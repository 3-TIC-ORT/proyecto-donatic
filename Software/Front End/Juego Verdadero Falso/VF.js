const Preguntas = [
    { pregunta: "LAS DONACIONES DE SANGRE PUEDEN DEBILITAR AL CUERPO PERMANENTEMENTE", Respuesta: false, Numero: 1 },
    { pregunta: "LA SANGRE DONADA SE PUEDE DIVIDIR EN COMPONENTES", Respuesta: true, Numero: 2 },
    { pregunta: "AL TOMAR MEDICAMENTOS, NO TENGO LA POSIBILIDAD DE DONAR SANGRE", Respuesta: false, Numero: 3 },
    { pregunta: "DESPUÉS DE DONAR UNA VEZ, NO PUEDO DONAR NUNCA MÁS", Respuesta: false, Numero: 3 },
    { pregunta: "GRACIAS A LOS EXAMENES PREVIOS A LA DONACIÓN, SE PUEDE DETECTAR ALGUNA ENFERMEDAD", Respuesta: true, Numero: 2 },
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
let BotonEstudiante = document.getElementById("Estudiante");
function IrEstudiante (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonEstudiante.addEventListener("click", (IrEstudiante));