connect2Server();
let BotonVolverAtras = document.getElementById("VolverAtras");

function VolveralInicio (){
 window.location.href='../Pantalla clases/Clases.html'
}

// 💡 Buenas prácticas: Asegurar que el botón exista antes de añadir el listener
if (BotonVolverAtras) {
    BotonVolverAtras.addEventListener("click", (VolveralInicio));
}

const contenedorData = document.getElementById('Nombre');


getEvent("mostrarClase", (clasesRecibidas) => {
 const contenedor = document.getElementById('clases');
    
    // Asegurar que el contenedor exista antes de modificarlo
    if (!contenedor) return; 

 contenedor.innerHTML = ""; // limpiar antes de agregar

 clasesRecibidas.forEach(clase => {

 // ---- DIV PRINCIPAL DE LA CLASE ----
 const divClase = document.createElement("div");
divClase.classList.add("clase");

 const tituloClase = document.createElement("p");
 tituloClase.textContent = `Curso: ${clase.nombre}`;
 tituloClase.classList.add("titulo-clase");

divClase.appendChild(tituloClase);

 // ---- DIV "ALUMNOS" (SE OCULTA AL PRINCIPIO) ----
 const divAlumnosBtn = document.createElement("div");
 divAlumnosBtn.textContent = "Alumnos";
 divAlumnosBtn.classList.add("btn-alumnos");
 divAlumnosBtn.style.display = "none"; 

 divClase.appendChild(divAlumnosBtn);

 // ---- LISTA DE ALUMNOS (SE OCULTA AL PRINCIPIO) ----
 const listaAlumnos = document.createElement("div");
 listaAlumnos.classList.add("lista-alumnos");
 listaAlumnos.style.display = "none";

(clase.alumnos || []).forEach(alum => { 
 const p = document.createElement("p");
 p.textContent = alum;
 listaAlumnos.appendChild(p);
 });

 divClase.appendChild(listaAlumnos);

    // ---- EVENTOS ----

 // Al hacer clic en el nombre de la clase → mostrar "Alumnos"
 tituloClase.addEventListener("click", () => {
 divAlumnosBtn.style.display =
 divAlumnosBtn.style.display === "none" ? "block" : "none";
 });

 // Al hacer clic en “Alumnos” → mostrar lista de alumnos
 divAlumnosBtn.addEventListener("click", () => {
 listaAlumnos.style.display =
 listaAlumnos.style.display === "none" ? "block" : "none";
 });

 // Agregar todo al contenedor
 contenedor.appendChild(divClase);
});
});