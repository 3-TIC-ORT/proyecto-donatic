    connect2Server()
    let BotonVolverAtras = document.getElementById("VolverAtras");
function VolveralInicio (){
    window.location.href='../Pantalla clases/Clases.html'
}
BotonVolverAtras.addEventListener("click", (VolveralInicio));

let Clases = [
    {name: "PrimeroJ", cantidadAlumnos: 19 },
    {name: "SegundoK", cantidadAlumnos: 24 },
    {name: "TerceroD", cantidadAlumnos: 12 }
]

const contenedorData = document.getElementById('Nombre');


getEvent("mostrarClase", (clasesRecibidas) => {
    
    if (Array.isArray(clasesRecibidas)) {
        
        clasesRecibidas.forEach(clase => {
            const pClase = document.createElement('p');
            pClase.textContent = `Curso: ${clase.nombre} - Alumnos: ${clase.alumnos}`;
            contenedorData.appendChild(pClase);
        }); 
    }
}); 