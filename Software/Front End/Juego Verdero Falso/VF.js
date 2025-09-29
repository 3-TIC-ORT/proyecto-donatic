const Preguntas = {
    pregunta: "2 + 2 es 4?",
    Respuesta: true 
};

let rtaString = prompt(Preguntas.pregunta);


let rtaBoolean = rtaString.toLowerCase() === 'true';


if (rtaBoolean === Preguntas.Respuesta) {
    alert("bien");
} else {
    alert("mal"); 
}