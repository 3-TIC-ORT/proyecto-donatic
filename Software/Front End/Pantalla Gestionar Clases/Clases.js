    let BotonVolverAtras = document.getElementById("VolverAtras");
function VolveralInicio (){
    window.location.href='../Pantalla Inicio Educador/Educador.html'
}
BotonVolverAtras.addEventListener("click", (VolveralInicio));
    let BotonIrCrearClases = document.getElementById("IrCREAR");
function IrCrear (){
    window.location.href='../Pantalla Crear Clases/CrearClases.html'
}
BotonIrCrearClases.addEventListener("click", (IrCrear));
let Clases = [
    {name: "PrimeroJ", cantidadAlumnos: 19 },
    {name: "SegundoK", cantidadAlumnos: 24 },
    {name: "TerceroD", cantidadAlumnos: 12 }
]
;//Valen despues hay que hacer que estos datos sean los que vienen de crear clase

const contenedorData = document.getElementById('Nombre');


Clases.forEach(clase => {
    const pClase = document.createElement('p');
    pClase.textContent = `Curso: ${clase.name} - Alumnos: ${clase.cantidadAlumnos}`;
    contenedorData.appendChild(pClase);
});