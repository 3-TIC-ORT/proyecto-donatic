let BotonCerrarLaSesion = document.getElementById("BotonCerrarSesion");
function CerrarSesion (){
    window.location.href='../pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}
BotonCerrarLaSesion.addEventListener("click", (CerrarSesion));
let BotonVolverAtras = document.getElementById("VolverAtras");
function VolveralInicio (){
    window.location.href='../Pantalla Inicio Educador/Educador.html'
}
BotonVolverAtras.addEventListener("click", (VolveralInicio));
let Stats = [
    {name: "Manolito", Puntaje: 10 },
    {name: "Luis", Puntaje: 8 },
    {name: "Marco", Puntaje: 5 }
]
;

const contenedorData = document.getElementById('Estadisticas');


Stats.forEach(Stat => {
    const pStat = document.createElement('p');
    pStat.textContent = `Nombre: ${Stat.name} - Puntaje: ${Stat.Puntaje}
    `;
    contenedorData.appendChild(pStat);
});