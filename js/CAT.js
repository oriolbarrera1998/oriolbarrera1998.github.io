// idiomes
var CAT = {
  index: {
    titol: "LA RÀDIO",
    item1: "PRESENTACIO",
    item2: "JOCS",
    item3: "MAPA"
  },
  jocs: {
    modal: "Escriu el teu nom",
    titol1: "LA EMISSIÓ",
    titol2: "LA TRANSMISSIÓ",
    titol3: "LA RECEPCIÓ",
    titol4: "LA VALIDACIÓ",
    item1: "PUZZLE",
    item2: "MEMORY",
    item3: "ESBRINA-LA",
    item4: "QUIZ",
    tutorialPuzzle: {
      item1: {
        titol: "Intercanviar peces",
        descripcio:
          "Per moure les peces del puzzle has de seleccionar dos d'elles i les seves posicions s'intercambiaran"
      },
      item2: {
        titol: "Escull un puzzle",
        descripcio:
          'Hi ha diferents puzzles a la part inferior del joc escull un i clica a "Començar el joc"'
      },
      item3: {
        titol: "Puntuació",
        descripcio:
          "Rebràs una puntuació basada en el temps trigat i els moviments que has necessitat per completar el puzzle"
      },
      boto: "COMENÇAR"
    },
    jocPuzzle: {
      botoMig: "COMENÇAR",
      resetPuzzle: "TORNA-HO A PROVAR",
      scr_head: "Puzzle solucionat",
      scr_time:
        'Temps: <span id="min">00</span> Minuts <span id="sec">00</span> Segons',
      scr_moves: 'Moviments: <span id="moves"></span>',
      scr_points: ' Punts: <span id="points"></span>'
    },
    tutorialMemory: {
      item1: {
        titol: "Girar cartes",
        descripcio:
          "Per girar una carta només has de premer sobre la carta que vols girar. Aquesta girarà i mostrarà el valor que té."
      },
      item2: {
        titol: "Hi ha dues versions del memory",
        descripcio:
          " Facil: Memory de tota la vida. <br> Difícil: Memory per a pensar una mica més!"
      },
      item3: {
        titol: "Puntuació",
        descripcio:
          "Rebràs una puntuació basada en el temps i els moviments que has necessitat per completar el memory"
      },
      boto1: "FÀCIL",
      boto2: "DIFÍCIL"
    },
    memoryFacil: {
      moves: "Moviments",
      ancerts: "Encerts",
      time: "Temps",
      scr_head: "Memory acabat",
      scr_time:
        'Temps total: <span id="mins">00</span> : <span id="secs">00</span>',
      scr_moves: 'Moviments : <span id="moves"></span>',
      scr_points: 'Punts : <span id="puntuacio"></span>'
    },
    memoryDificil: {
      carta: "Carta a trobar",
      ancerts: "Encerts",
      time: "Temps",
      scr_head: "Memory acabat",
      scr_time:
        'Temps total: <span id="mins">00</span> : <span id="secs">00</span>',
      scr_moves: 'Encerts : <span id="aciertos"></span>',
      scr_points: 'Punts : <span id="puntuacio"></span>'
    },
    tutoEsbrina: {
      item1: {
        titol: "Tria una lletra",
        descripcio:
          "Per veure si la paraula a esbrinar conté una lletra, has de prémer en una de les 12 lletres del panell."
      },
      item2: {
        titol: "Temps",
        descripcio: "Tindràs 20 segons per cadascuna de les paraules."
      },
      item3: {
        titol: "Puntuació",
        descripcio:
          "Rebràs puntuació cada cop que esbrinis una paraula i dependrà de la quantitat d'encerts i errors i la longitud de la paraula."
      },
      boto: "COMENÇAR"
    },
    esbrina: {
      punts: "Puntuacio",
      bonaFeina: "Bona feina!",
      paraula: "La paraula era: ",
      next: "Següent",
      missatgeFinal:
        'Has guanyat un total de <span id="modalEnd-puntuacion" class="tracking-in-contract-bck-top"></span> punts.',
      senseTemps: "T'has quedat sense temps!",
      final: "Has acabat",
      sortir: "Sortir",
      botoPuntuacio: "Puntuació: ",
      paraules: [
        "antena",
        "amplificador",
        "mesclador",
        "interferencia",
        "filtre"
      ]
    },
    tutoQuiz: {
      item1: {
        titol: "Fes girar la ruleta",
        descripcio:
          "Per fer girar la ruleta, apreta a sobre del botó girar, un cop s'hagi aturat, mostrarà el tema de la següent pregunta"
      },
      item2: {
        titol: "Selecciona la resposta correcta",
        descripcio:
          " Quan la ruleta hagi acabat de girar, apareixerà una pregunta de la temàtica corresponent hi ha quatre respostes possibles, apreta sobre la que pensis que és la correcta"
      },
      item3: {
        titol: "Puntuació",
        descripcio:
          "Rebràs una puntuació basada en el nombre de respostes que hagis encertat"
      },
      boto: "COMENÇAR"
    }
  },
  mapa: {
    item1: "INTERNACIONAL",
    item2: "ESPANYA"
  }
};
