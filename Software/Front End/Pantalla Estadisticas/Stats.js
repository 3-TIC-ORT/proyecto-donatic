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
            if (jugador.nombreCompleto && jugador.resultados) {

              const bloque = document.createElement("div");
              bloque.classList.add("jugador-bloque");
          
              const pJugador = document.createElement("h3");
              pJugador.textContent = `Jugador: ${jugador.nombreCompleto}`;
          
              const columnaStats = document.createElement("div");
              columnaStats.classList.add("columna-stats");
          
              jugador.resultados.forEach((resultado) => {
                  const nombreJuego = resultado.juego;
                  const puntaje =
                      resultado.resultado ||
                      resultado.Puntaje ||
                      resultado.puntaje ||
                      "N/A";
          
                  if (nombreJuego) {
                      const fila = document.createElement("div");
                      fila.classList.add("fila-stat");
          
                      const pJuego = document.createElement("p");
                      pJuego.textContent = `• ${nombreJuego}`;
          
                      const pPuntaje = document.createElement("p");
                      pPuntaje.textContent = `Puntaje Total: ${puntaje}`;
          
                      fila.appendChild(pJuego);
                      fila.appendChild(pPuntaje);
                      columnaStats.appendChild(fila);
                  }
              });
          
              bloque.appendChild(pJugador);
              bloque.appendChild(columnaStats);
              contenedorData.appendChild(bloque);
          }
          
          

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
