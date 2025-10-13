
let BotonEstudiante = document.getElementById("Estudiante");
function IrEstudiante (){
    window.location.href='../Pantalla de inicio estudiantes/Inicio estudiantes.html'
}
BotonEstudiante.addEventListener("click", (IrEstudiante));
const Donantes = {
    
    "O-":  ["O-", "A-", "B-", "AB-", "O+", "A+", "B+", "AB+"], 
    "O+":  ["O+", "A+", "B+", "AB+"],
    "A-":  ["A-", "AB-", "A+", "AB+"],
    "A+":  ["A+", "AB+"],
    "B-":  ["B-", "AB-", "B+", "AB+"],
    "B+":  ["B+", "AB+"],
    "AB-": ["AB-", "AB+"],
    "AB+": ["AB+"]
}