connect2Server();

document.addEventListener("DOMContentLoaded", () => {
  const BotonVolverAtras = document.getElementById("VolverInicio");
  const contenedorData = document.getElementById("Estadisticas");

  if (BotonVolverAtras) {
    function VolveralInicio() {
      window.location.href = "../Pantalla Inicio Educador/Educador.html";
    }
    BotonVolverAtras.addEventListener("click", VolveralInicio);
  }

  if (contenedorData) {
    function cargarEstadisticas() {
      getEvent("mostrarPuntaje", (juegosArray) => {
        contenedorData.innerHTML = "";

        juegosArray.forEach((jugador) => {
          if (jugador.nombreCompleto && jugador.resultados) {
            const pJugador = document.createElement("h3");
            pJugador.textContent = ` Jugador: ${jugador.nombreCompleto}`;
            contenedorData.appendChild(pJugador);

            jugador.resultados.forEach((resultado) => {
              const pStat = document.createElement("p");

              const nombreJuego = resultado.juego;

              const puntaje =
                resultado.resultado ||
                resultado.Puntaje ||
                resultado.puntaje ||
                "N/A";

              if (nombreJuego) {
                pStat.textContent = `  • ${nombreJuego} - Puntaje Total: ${puntaje}`;
                contenedorData.appendChild(pStat);
              }
            });
          } else if (
            jugador.nombreCompleto &&
            jugador.juego &&
            jugador.Puntaje
          ) {
            const pStat = document.createElement("p");
            pStat.textContent = ` ${jugador.nombreCompleto} - Juego: ${jugador.juego} - Puntaje Total: ${jugador.Puntaje} (Formato Antiguo)`;
            contenedorData.appendChild(pStat);
          }
        });

        if (juegosArray.length === 0) {
          contenedorData.textContent =
            "No hay estadísticas de juegos disponibles.";
        }
      });
    }

    cargarEstadisticas();
  }
});
