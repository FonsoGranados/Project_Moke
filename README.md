# Project_Moke

// First game I made
// Primer juego que hice
// Primo giocco che ho fatto.

var victoriasConsecutivasJugador = 0;
      var victoriasConsecutivasMaquina = 0;

      function jugar(eleccionUsuario) {
        var opciones = ['piedra', 'papel', 'tijera'];
        var eleccionMaquina = opciones[Math.floor(Math.random() * 3)];

        var resultado = '';

        if (eleccionUsuario === eleccionMaquina) {
          resultado = '¡OTRA VEZ OMBE, SALIÓ LA MISMA MONDÁ!';
        } else if ( 
          (eleccionUsuario === 'piedra' && eleccionMaquina === 'tijera') ||
          (eleccionUsuario === 'papel' && eleccionMaquina === 'piedra') ||
          (eleccionUsuario === 'tijera' && eleccionMaquina === 'papel')
        ) {
          resultado = '¡Erda bien, ganaste!';
          victoriasConsecutivasJugador++;
          victoriasConsecutivasMaquina = 0; // Reinicia las victorias consecutivas de la máquina
        } else {
          resultado = '¡Ay qué pesar, perdiste!';
          victoriasConsecutivasJugador = 0; // Resetea las victorias consecutivas del jugador
          victoriasConsecutivasMaquina++;
        }

        document.getElementById('resultado').innerText = `A ver lindura, tú elegiste ${eleccionUsuario}  y yo elegí ${eleccionMaquina}. ${resultado}`;
        document.getElementById('victorias-consecutivas').innerText = `Jugador: ${victoriasConsecutivasJugador} | Máquina: ${victoriasConsecutivasMaquina}`;

        if (victoriasConsecutivasJugador === 3) {
          alert('¡Felicidades! ¡Un logro en tu vida! ¡Hágale pues, otra vez!');
          reiniciarJuego();
        } else if (victoriasConsecutivasMaquina === 3) {
          alert('Mor, me da un pesar, pero yo gané, mejor suerte pa la próxima, pico y se me cuida ese bizcocho.');
          reiniciarJuego();
        }
      }

      function reiniciarJuego() {
        victoriasConsecutivasJugador = 0;
        victoriasConsecutivasMaquina = 0;
        document.getElementById('victorias-consecutivas').innerText = 'Jugador: 0 | Máquina: 0';
      }
