connect2Server();
let BotonVolver = document.getElementById("BotonVolver");
const nombreCompleto = localStorage.getItem("nombreUsuario");
const juego = "Puede Donar?";
function VolverAlInicio() {
  window.location.href = "../Pantalla de Juegos/Selector de Juegos.html";
}
BotonVolver.addEventListener("click", VolverAlInicio);

const Preguntas = [
  {
    pregunta:
      "Una señora de 45 años, llamada Marta, quiere donar sangre a su sobrino que tiene tipo de sangre AB-. Ella sabe que su tipo de sangre es A+, pero no está segura si es compatible con el de su sobrino. Además, ella está saliendo de una infección causada por una bacteria, por lo que estuvo consumiendo antibióticos.  ",
    Respuesta: false,
    Numero: 1,
    Moraleja: "Marta no puede donar porque acaba de salir de una infección y estuvo tomando antibióticos, lo que temporalmente la excluye.",
  },
  {
    pregunta:
      "Juan desea dar una ayuda a la comunidad y quiere ir a donar sangre. Este chico se hizo un tatuaje hace 1 año y está en duda si tiene la posibilidad de donar o no.",
    Respuesta: true,
    Numero: 2,
    Moraleja: "Juan sí puede donar. Si ha pasado más de 6-12 meses (generalmente 12 meses en Argentina) desde que se hizo el tatuaje, puede donar.",
  },
  {
    pregunta:
      "María es una mujer de 35 años que tiene 9 semanas de embarazo y quiere donarle sangre a su padre. Cree que está en condiciones de donar porque la última vez que lo hizo fue hace 4 meses pero como no tienen el mismo tipo de sangre no sabe si son compatibles. María es B- mientras que su padre es AB-.",
    Respuesta: true,
    Numero: 3,
    Moraleja: "Aunque María está embarazada, la compatibilidad sanguínea B- -> AB- es posible. Sin embargo, el embarazo es un motivo de exclusión temporal y es un tema delicado para considerar la donación.",
  },
  {
    pregunta:
      "Camila se ve muy influenciada a la hora de donar sangre ya que toda su familia brinda sangre al hospital Garrahan cada año. Esta chica que tiene 12 años quiere ayudar al igual que su familia, por lo que consulta si puede donar o no.",
    Respuesta: false,
    Numero: 4,
    Moraleja: "Camila no puede donar. La edad mínima requerida para donar sangre es generalmente 16 o 18 años.",
  },
  {
    pregunta:
      "Lucas tiene 21 años y su amiga sufre una enfermedad grave en la que precisa de una persona que le done sangre de forma urgente. Él le quiere donar sangre, y cumple con todos los requisitos que conoce. Al hacerse los exámenes vitales previos a donar, se registra que pesa menos de 50 kg y que mide 1,78 m.",
    Respuesta: false,
    Numero: 5,
    Moraleja: "Lucas no puede donar. Uno de los requisitos obligatorios es pesar al menos 50 kg.",
  },
  {
    pregunta:
      "Miguel quiere donar sangre a su hija Laura. Él cree que son compatibles ya que su tipo de sangre es 0- y tiene entendido que cualquier otro tipo de sangre puede recibir su donación. Miguel irá mañana a sacarse sangre porque hasta ayer estaba con fiebre, pero ya no tiene síntomas entonces va a esperar un día.",
    Respuesta: false,
    Numero: 6,
    Moraleja: "Miguel no debe donar. Debe esperar al menos 7 días después de haber tenido fiebre o síntomas de infección.",
  },
  {
    pregunta:
      "Martina tiene 20 años y desde que se enteró de los aspectos positivos que tenía donar sangre a los 18 años va a donar una o dos veces por año. La última vez que donó fue hace 8 semanas y un mes después, se hizo un piercing en un estudio profesional. No recuerda si tiene la posibilidad de donar o debe esperar el mismo tiempo que si te harías un tatuaje.",
    Respuesta: true,
    Numero: 7,
    Moraleja: "Martina puede donar si ya ha pasado el periodo de exclusión (generalmente 6 a 12 meses) desde el piercing.",
  },
  {
    pregunta:
      "Valeria tiene un hijo, Matias, que tras una cirugía, perdió demasiada cantidad de sangre, por lo que quiere ayudarlo donando su sangre que sabe que es compatible con la de su hijo. Ella no está segura si le permitirán donar al tener un problema con el consumo constante del alcohol. ",
    Respuesta: false,
    Numero: 8,
    Moraleja: "Valeria no puede donar. La donación de sangre está contraindicada en personas con antecedentes de consumo problemático de alcohol.",
  },
  {
    pregunta:
      "Carlos es un hombre de 58 años que tiene ganas de donar sangre. El hombre presenta diabetes de tipo 2 controlado por medicamentos orales y no con insulina inyectable y además su presión arterial y glucosa están normales pero aún así no está seguro si se encuentra en condiciones de donar.",
    Respuesta: true,
    Numero: 9,
    Moraleja: "Carlos sí puede donar. La diabetes tipo 2 controlada con medicamentos orales y con valores estables no es una exclusión.",
  },
  {
    pregunta:
      "Laura es una mujer de 40 años que tuvo una transfusión de sangre hace 15 años tras una cirugía de rodilla y no sabe eso le impide donar sangre.",
    Respuesta: false,
    Numero: 10,
    Moraleja: "Laura no puede donar. Haber recibido una transfusión de sangre es un criterio de exclusión permanente.",
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
const botonSiguiente = document.getElementById("PasarSiguiente"); // Botón 'Siguiente' (Correcto/Omitir)
const botonSiguienteInco = document.getElementById("PasarSiguienteInco"); // Botón 'Siguiente' (Incorrecto)
const Indicador = document.getElementById("Indicador"); 


function ocultarPopUp() {
  popup.style.display = "none";
  popupincorrecto.style.display = "none";
}
ocultarPopUp();

function mostrarPopUp(mensaje) {
  popup.style.display = "block";
}

function mostrarPopUpIncorrecto(texto) {
  popupincorrecto.style.display = "block";
  popupincorrecto.querySelector(".moraleja").textContent = texto.Moraleja || "La razón de la respuesta se mostrará aquí.";
} 


function mostrarPregunta() {
  if (NumeroPregunta < Preguntas.length) {
    elementoPregunta.textContent = Preguntas[NumeroPregunta].pregunta;
    
    if (elementoPuntaje) {
      elementoPuntaje.textContent = `Puntaje: ${Puntaje}`; 
    }
    
    BtnV.disabled = false;
    BtnF.disabled = false;
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
        " Puntaje enviado y guardado. Respuesta del servidor:",
        juegosArray
      );
    });
  }
}

if (elementoPuntaje) {
  elementoPuntaje.textContent = `Puntaje: ${Puntaje}`;
}


function verificarRespuesta(respuestaUsuario) {
  if (NumeroPregunta >= Preguntas.length) return;
  const preguntaActual = Preguntas[NumeroPregunta];

  BtnV.disabled = true;
  BtnF.disabled = true;

  if (Indicador) {
    Indicador.classList.remove("correcto", "incorrecto");
  }

  if (respuestaUsuario === preguntaActual.Respuesta) {
    mostrarPopUp("¡Correcto!");
    if (Indicador) {
        Indicador.classList.add("correcto");
    }
        Puntaje++; 
    
    if (elementoPuntaje) {
        elementoPuntaje.textContent = `Puntaje: ${Puntaje}`; 
    }
    
  } else {
    mostrarPopUpIncorrecto(preguntaActual);
    if (Indicador) {
        Indicador.classList.add("incorrecto");
    }
  }
}

function pasarSiguientePregunta() {
    ocultarPopUp();
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

if (botonSiguiente) {
  botonSiguiente.addEventListener("click", pasarSiguientePregunta);
}

if (botonSiguienteInco) {
  botonSiguienteInco.addEventListener("click", pasarSiguientePregunta);
}

mostrarPregunta();