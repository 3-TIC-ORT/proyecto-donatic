connect2Server();

let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio (){
    window.location.href='../Pantalla Inicio Educador/Educador.html'
}
BotonVolver.addEventListener("click", (VolverAlInicio));

let Stats = [
  { name: "Manolito", Puntaje: 10 },
  { name: "Luis", Puntaje: 8 },
  { name: "Marco", Puntaje: 5 },
];
const contenedorData = document.getElementById("Estadisticas");

Stats.forEach((Stat) => {
  const pStat = document.createElement("p");
  pStat.textContent = `Nombre: ${Stat.name} - Puntaje: ${Stat.Puntaje}
    `;
  contenedorData.appendChild(pStat);
});
