let BotonVolver = document.getElementById("VolverInicio");

function VolveralInicio (){
    window.location.href='../Pantalla Inicio Educador/Educador.html'
}

BotonVolver.addEventListener("click", VolveralInicio);

let BotonCerrarLaSesion = document.getElementById("ButonCerrarSesion");

function CerrarSesion (){
    window.location.href='../pantalla de inicio no registrados/pantalla de inicio no registrados.html'
}

BotonCerrarLaSesion.addEventListener("click", CerrarSesion);

let ListadeInfo = []
const inputInfo = document.getElementById("InfoInput")
const subirInfo = document.getElementById("SubirLaInfo")
const ulInfo = document.getElementById("Info")

subirInfo.addEventListener("click", function() {
    
    const info = inputInfo.value.trim(); 
    
    if (info !== "") {
        ListadeInfo.push(info);
        inputInfo.value = ""

        ulInfo.innerHTML = ''; 

        for (let i = 0; i < ListadeInfo.length; i++) {
            const li = document.createElement("li");
            li.textContent = ListadeInfo[i]
            li.className = "tipocomentario"
            ulInfo.appendChild(li);
        }
    }
});