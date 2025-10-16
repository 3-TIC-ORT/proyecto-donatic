
let BotonEstudiante = document.getElementById("Estudiante");
function IrEstudiante (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonEstudiante.addEventListener("click", (IrEstudiante));
const Preguntas = [
    { pregunta: "Luis tiene 25 años, pesa 67 kilos y se realizo un tatuaje hace 8 meses", Respuesta: true, Numero: 1 },
    { pregunta: "Juana tiene 29 años y esta embarazada de 2 meses", Respuesta: false, Numero: 2 },
    { pregunta: "Justo tiene 18 recien cumplidos y pesa 75 kilos", Respuesta: true, Numero: 3 },
    { pregunta: "Ana tiene 35 años pesa 64 kilos y padece anemia", Respuesta: false, Numero: 4 },
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