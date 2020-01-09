// idiomes
var ESP = {
  index: {
    titol: "LA RADIO",
    item1: "PRESENTACIÓN",
    item2: "JUEGOS",
    item3: "MAPA"
  },
  jocs: {
    modal: "Escribe tu nombre",
    titol1: "LA EMISIÓN",
    titol2: "LA TRANSMISIÓN",
    titol3: "LA RECEPCIÓN",
    titol4: "LA VALIDACIÓN",
    item1: "PUZZLE",
    item2: "MEMORY",
    item3: "AVERÍGUALA",
    item4: "QUIZ",
    tutorialPuzzle: {
      item1: {
        titol: "Intercambiar piezas",
        descripcio:
          "Para mover las piezas del puzzle tienes que seleccionar dos de ellas y sus posiciones se intercambiarán."
      },
      item2: {
        titol: "Escoge un puzzle",
        descripcio:
          'Hay diferentes puzzles en la parte inferior del juego, escoge uno y clica en "Comenzar el juego"'
      },
      item3: {
        titol: "Puntuación",
        descripcio:
          "Recibirás una puntuación basada en el tiempo tardado y los movimientos que has necesitado para completar el puzzle."
      },
      boto: "COMENZAR"
    },
    jocPuzzle: {
      botoMig: "COMENZAR",
      resetPuzzle: "VUELVE A INTENTARLO",
      scr_head: "Puzzle solucionado",
      scr_time:
        'Tiempo: <span id="min">00</span> Minutos <span id="sec">00</span> Segundos',
      scr_moves: 'Movimientos: <span id="moves"></span>',
      scr_points: ' Puntos: <span id="points"></span>'
    },
    tutorialMemory: {
      item1: {
        titol: "Girar cartas",
        descripcio:
          "Para girar una carta solo tienes que pulsar sobre la carta que quieras girar. Esta girará y mostrará el valor que tiene."
      },
      item2: {
        titol: "Hay dos versiones del memory",
        descripcio:
          " Fácil: Memory de toda la vida. <br> Difícil: Memory para pensar un poco más!"
      },
      item3: {
        titol: "Puntuación",
        descripcio:
          "Recibirás una puntuación basada en el tiempo y los movimientos que has necesitado para completar el memory."
      },
      boto1: "FÁCIL",
      boto2: "DIFÍCIL"
    },
    memoryFacil: {
      moves: "Movimentos",
      ancerts: "Aciertos",
      time: "Tiempo",
      scr_head: "Memory acabado",
      scr_time:
        'Tiempo total: <span id="mins">00</span> : <span id="secs">00</span>',
      scr_moves: 'Movimientos : <span id="moves"></span>',
      scr_points: 'Puntos : <span id="puntuacio"></span>'
    },
    memoryDificil: {
      carta: "Carta a encontrar",
      ancerts: "Aciertos",
      time: "Tiempo",
      scr_head: "Memory acabado",
      scr_time:
        'Tiempo total: <span id="mins">00</span> : <span id="secs">00</span>',
      scr_moves: 'Aciertos : <span id="aciertos"></span>',
      scr_points: 'Puntos : <span id="puntuacio"></span>'
    },
    tutoEsbrina: {
      item1: {
        titol: "Escoge una letra",
        descripcio:
          "Para ver si la palabra a averiguar contiene una letra, debes pulsar en una de las 12 letras del panel."
      },
      item2: {
        titol: "Tiempo",
        descripcio: "Tendrás 20 segundos para cada una de las palabras."
      },
      item3: {
        titol: "Puntuación",
        descripcio:
          "Recibirás puntuación cada vez que averigües una palabra y dependerá de la cantidad de aciertos y errores y la longitud de la palabra."
      },
      boto: "COMENZAR"
    },
    esbrina: {
      punts: "Puntuación",
      bonaFeina: "¡Buen trabajo!",
      paraula: "La palabra era: ",
      next: "Siguiente",
      missatgeFinal:
        'Has ganado un total de <span id="modalEnd-puntuacion" class="tracking-in-contract-bck-top"></span> puntos.',
      senseTemps: "Te has quedado sin tiempo!",
      final: "Has acabado",
      sortir: "Salir",
      botoPuntuacio: "Puntuación: ",
      paraules: [
        "antena",
        "amplificador",
        "mezclador",
        "interferencia",
        "filtro"
      ]
    },
    tutoQuiz: {
      item1: {
        titol: "Haz girar la ruleta",
        descripcio:
          "Para hacer girar la ruleta, aprieta sobre el botón girar. Una vez se haya parado, mostrará el tema de la siguiente pregunta."
      },
      item2: {
        titol: "Selecciona la respuesta correcta",
        descripcio:
          " Cuando la ruleta haya terminado de girar, aparecerá una pregunta de la temática correspondiente. Hay cuatro respuestas posibles, pulsa sobre la que pienses que es la correcta."
      },
      item3: {
        titol: "Puntuación",
        descripcio:
          "Recibirás una puntuación basada en el número de respuestas que hayas acertado."
      },
      boto: "COMENZAR"
    },
    about_us:{
      descripcio: "<h2>¿Quién somos?</h2><p>Nosotros somos un grupo de estudiantes de Centre Estudis Politècnics, ubicado en Plaça Urquinaona número 4, en Barcelona</p>"
    }
  },
  mapa: {
    item1: "INTERNACIONAL",
    item2: "ESPAÑA"
  }
};