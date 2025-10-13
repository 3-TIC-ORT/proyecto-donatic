let BotonVolver = document.getElementById("VolverInicio");
function VolverAlInicio (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonVolver.addEventListener("click", (VolverAlInicio));
let Infos = [
    {Infor: "Maxi" },
    {Infor: "Sanguche" },
    {Infor: "La sangre se puede donar"}
]
;

const contenedorInfo = document.getElementById('Informa');


Infos.forEach(Info => {
    const pInfo = document.createElement('p');
    pInfo.textContent = `*${Info.Infor}`;
    contenedorInfo.appendChild(pInfo);
});