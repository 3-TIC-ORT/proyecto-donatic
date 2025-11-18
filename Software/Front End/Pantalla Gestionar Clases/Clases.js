connect2Server();
let BotonVolverAtras = document.getElementById("VolverAtras");

function VolveralInicio() {
  window.location.href = "../Pantalla clases/Clases.html";
}

if (BotonVolverAtras) {
  BotonVolverAtras.addEventListener("click", VolveralInicio);
}

const contenedorData = document.getElementById("Nombre");

getEvent("mostrarClase", (clasesRecibidas) => {
  const contenedor = document.getElementById("clases");

  if (!contenedor) return;

  contenedor.innerHTML = "";
  clasesRecibidas.forEach((clase) => {
    const divClase = document.createElement("div");
    divClase.classList.add("clase");

    const tituloClase = document.createElement("p");
    tituloClase.textContent = `Curso: ${clase.nombre}`;
    tituloClase.classList.add("titulo-clase");

    divClase.appendChild(tituloClase);

    const divAlumnosBtn = document.createElement("div");
    divAlumnosBtn.textContent = "Alumnos";
    divAlumnosBtn.classList.add("btn-alumnos");
    divAlumnosBtn.style.display = "none";

    divClase.appendChild(divAlumnosBtn);

    const listaAlumnos = document.createElement("div");
    listaAlumnos.classList.add("lista-alumnos");
    listaAlumnos.style.display = "none";

    (clase.alumnos || []).forEach((alum) => {
      const p = document.createElement("p");
      p.textContent = alum;
      listaAlumnos.appendChild(p);
    });

    divClase.appendChild(listaAlumnos);

    tituloClase.addEventListener("click", () => {
      divAlumnosBtn.style.display =
        divAlumnosBtn.style.display === "none" ? "block" : "none";
    });

    divAlumnosBtn.addEventListener("click", () => {
      listaAlumnos.style.display =
        listaAlumnos.style.display === "none" ? "block" : "none";
    });

    contenedor.appendChild(divClase);
  });
});
