// taula
var taula = {
    element: document.getElementById('llista'),
    width: 1000,
    height: 675,
    inicialitzacio: function () {
        document.body.appendChild(this.element);
    }
}

// valor de les cartes
var valor_cartes = [];

// donat un array i un valor, es crea un nou array sense que contingui aquest valor
function eliminarValor(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

//carta a trobar
function novaCartaTrobar(cartaTrobada) {
    // creem una variable auxiliar
    let carta = document.getElementById("carta_a_trobar");
    // si no hem passart cap carta com a paràmetre
    if (cartaTrobada == null) {
        // agafem un valor aleatori de l'array de valors
        var num = (Math.floor(Math.random() * valor_cartes.length));
        carta.setAttribute("type", valor_cartes[num]);
    } else {
        // eliminem el valor actual que te la carta de l'array de valors
        valor_cartes = eliminarValor(valor_cartes, cartaTrobada.innerHTML)

        // agafem un nou valor del nou array
        var num = (Math.floor(Math.random() * valor_cartes.length));
        carta.setAttribute("type", valor_cartes[num]);
    }
    return carta;
}

var carta_a_trobar;


// creem l'objecte carta
var carta = {
    crear: function (id, valor, velocitatX, velocitatY, x, y) {
        var novaCarta = Object.create(this);
        // creem l'element div
        novaCarta.vX = velocitatX;
        novaCarta.vY = velocitatY;
        novaCarta.x = x;
        novaCarta.y = y;
        novaCarta.width = 125;
        novaCarta.height = 125;
        novaCarta.element = document.createElement('li');
        var img = document.createElement("img");
        img.src = "../media/" + valor + ".png";

        novaCarta.element.style.width = novaCarta.width + 'px';
        novaCarta.element.style.height = novaCarta.height + 'px';

        novaCarta.element.className += 'carta';
        // li assignem el valor a carta
        novaCarta.element.setAttribute("id", "carta_" + id);
        novaCarta.element.setAttribute("type", valor);
        //novaCarta.element.innerHTML = valor;       
        //novaCarta.element.setAttribute("onclick", "mostrarCarta(this, '" + valor + "')");
        taula.element.appendChild(novaCarta.element);
        novaCarta.element.appendChild(img);
        return novaCarta;
    },
    moure: function (x, y) {
        // afegim els valors que passem com a parametres
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    },
    canviarDireccio: function (x, y) {
        // si x es mes petitat que zero o x es mes gran que la resta entre
        // l'amplada de la taula - l'amplada de la carta
        if (x < 0 || x > taula.width - this.width) {
            // canviem el sentit de la velocitat
            this.vX = -this.vX;
        }
        // si y es mes petitat que zero o y es mes gran que la resta entre
        // l'alçada de la taula - l'alçada de la carta
        if (y < 0 || y > taula.height - this.height) {
            // canviem el sentit de la velocitat
            this.vY = -this.vY;
        }
    },
    // per a poder aturar al funcio dibuixar
    variable: 0,
    // funcio recursiva
    dibuixar: function (x, y) {
        this.moure(x, y);
        var carta = this;
        // igualem a la variable
        this.variable = setTimeout(function () {
            carta.canviarDireccio(x, y);
            carta.dibuixar(x + carta.vX, y + carta.vY);
        }, 15);
    },
    stop: function () {
        clearTimeout(this.variable);
    }
}

// cartes
var cartes = [];


// encerts
var encerts = 0;
var contador = document.getElementById("encerts");

// cartes girades
cartesGirades = [];

// cartes encertades
var matchedCard = document.getElementsByClassName("match");

// temps
var temporitzador = {};
function iniciarTemporitzador() {
    // en segons
    temporitzador.acaba = 300;

    // agafem els elements
    temporitzador.min = document.getElementById("min");
    temporitzador.sec = document.getElementById("sec");

    // afegim els elements del modal
    var modal = {};
    modal.mins = document.getElementById("mins");
    modal.secs = document.getElementById("secs");

    if (temporitzador.acaba > 0) {

        temporitzador.compteEnrere = setInterval(function () {
            // Stop if passed end time
            temporitzador.acaba--;
            if (temporitzador.acaba <= 0) {
                // esborrrar
                //aturarTemporitzador(counter.ticker); 
                endGame(false);
                temporitzador.acaba = 0;
            }

            // Calculate remaining time
            var secs = temporitzador.acaba;
            var mins = Math.floor(secs / 60); // 1 min = 60 secs
            secs -= mins * 60;

            // Update HTML
            temporitzador.min.innerHTML = mins;
            modal.mins.innerHTML = mins;

            if (secs < 10) {
                temporitzador.sec.innerHTML = "0" + secs;
                modal.secs.innerHTML = "0" + secs;
            } else {
                temporitzador.sec.innerHTML = secs;
                modal.secs.innerHTML = secs;
            }
        }, 1000);
    }


}

function aturarTemporitzador() {
    clearTimeout(temporitzador.compteEnrere);
}

// quan es carregui el body
document.body.onload = startGame();
// començar joc
function startGame() {
    // inicialitzem valors els valors

    iniciarTemporitzador();

    // donem valor a l'array de valors
    valor_cartes = ['antena', 'antena', 'microfon', 'microfon', 'amplificador', 'amplificador', 'ona', 'ona', 'Radio FM', 'Radio FM', 'dial', 'dial'];

    // iniciem la carta a trobar
    carta_a_trobar = novaCartaTrobar();

    // li adjuntem el tipus (un valor aleatory)
    carta_a_trobar.innerHTML = carta_a_trobar.type;

    // fem un bucle com tants valors hi hagi 
    for (var i = 0; i < valor_cartes.length; i++) {

        // velocitats x i y aleatories
        var vX = (Math.random() * 1.25) + 0.5;
        var vY = (Math.random() * 1.25) + 0.5;

        // coordenades inicals aleatories
        var x = Math.floor(Math.random() * 800);
        var y = Math.floor(Math.random() * 500);

        // creem un pbjecte de tipus carta i el posem en un array de cartes
        cartes[i] = carta.crear(i, valor_cartes[i], vX, -vY, x, y);

        // dibuixem la carta
        cartes[i].dibuixar(x, y);

        // 
        cartes[i].element.classList.remove("show", "open", "match", "disabled");
    }
}

// creem un metode per a barrejar l'array
function barrejarCartes(array) {
    // declarem variables
    var indexActual = array.length, valorTemporal, indexRandom;
    // fem un bucle que durarà mentre i sigui mes gran que 0
    while (indexActual !== 0) {
        indexRandom = Math.floor(Math.random() * indexActual);

        indexActual--;

        valorTemporal = array[indexActual];
        array[indexActual] = array[indexRandom];
        array[indexRandom] = valorTemporal;
    }

    // tornem l'array
    return array;
}

// esperem un determinat temps
function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while (d2 - d < ms);
}

// mostrar carta (display Card)
var mostrarCarta = function () {
    /* toggle( String [, force] )
        Cuando sólo hay un argumento presente: Alterna el valor de la clase; ej., si la clase existe la elimina
        y devuelve false, si no, la añade y devuelve true. Cuando el segundo argumento está presente: Si el 
        segundo argumento se evalúa como true, se añade la clase indicada, y si se evalúa como false, la elimina. 
    */
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}

// carta girada (cardOpen)
function cartaGirada() {
    cartesGirades.push(this);
    var len = cartesGirades.length;
    if (len === 2) {
        // si el tipus de la 1a carta i de la 2a carta girades son igual al tipus de la carta a trobar 
        if (cartesGirades[0].type === carta_a_trobar.type && cartesGirades[1].type === carta_a_trobar.type) {

            matched();
            // mirar com vanviar el style animacio
            if (valor_cartes.length == 0) {
                endGame(true);
            }

        } else if (cartesGirades[0].type === carta_a_trobar.type) {
            /*var cartaAUX = cartesGirades[0].classList.add("match", "disabled");
            cartesGirades[0].classList.remove("show", "open", "no-event");
            cartesGirades = [];
            cartesGirades[1] = cartaAUX;*/
            semiMatched()
        }
        else {
            unmatched();
        }
    }
};

// @description when cards match
function matched() {
    cartesGirades[0].classList.remove("semiMatch");
    // afegim la classe a css fer a fer les animacions
    cartesGirades[0].classList.add("match", "disabled");
    cartesGirades[1].classList.add("match", "disabled");
    cartesGirades[0].classList.remove("show", "open", "no-event");
    cartesGirades[1].classList.remove("show", "open", "no-event");

    // canviem el css de la carta a trobar
    carta_a_trobar.classList.add("match");
    carta_a_trobar = novaCartaTrobar(carta_a_trobar);
    carta_a_trobar.innerHTML = carta_a_trobar.type;

    // com que es asinconca
    (function (taula, cartesGirades, carta_a_trobar) {
        setTimeout(function () {
            // esborrem de la llista (taula) els elements trobats
            taula.element.removeChild(cartesGirades[0]);
            taula.element.removeChild(cartesGirades[1]);
            // treiem la classe de css a la carta a trobar
            carta_a_trobar.classList.remove("match");
        }, 750)
    })(taula, cartesGirades, carta_a_trobar);

    // esborrem cartes girades
    cartesGirades = [];
    // augemntem el nombre d'encerts
    encerts++;
    contador.innerHTML = encerts;
}

function semiMatched() {
    cartesGirades[0].classList.add("unmatched");
    cartesGirades[1].classList.add("unmatched");
    disable();

    setTimeout(function () {
        cartesGirades[1].classList.remove("show", "open", "no-event", "unmatched");
        enable();
        cartesGirades[0].classList.remove("unmatched");
        cartesGirades[0].classList.add("semiMatch", "disabled");
        // eliminem la segona carta
        cartesGirades.splice(1, 1);
    }, 750);
}

// description when cards don't match
function unmatched() {
    cartesGirades[0].classList.add("unmatched");
    cartesGirades[1].classList.add("unmatched");
    disable();
    setTimeout(function () {
        cartesGirades[0].classList.remove("show", "open", "no-event", "unmatched");
        cartesGirades[1].classList.remove("show", "open", "no-event", "unmatched");
        enable();
        cartesGirades = [];
    }, 750);
}

// @description disable cards temporarily
function disable() {
    Array.prototype.filter.call(cartes, function (card) {
        card.element.classList.add('disabled');
    });
}


// @description enable cards and disable matched cards
function enable() {
    Array.prototype.filter.call(cartes, function (card) {
        card.element.classList.remove('disabled');
        for (var i = 1; i < matchedCard.length; i++) {
            matchedCard[i].element.classList.add("disabled");
            debugger;
        }
    });
}


// afegim events
for (var i = 0; i < cartes.length; i++) {
    cartaX = cartes[i];
    cartaX.element.addEventListener("click", mostrarCarta);
    cartaX.element.addEventListener("click", cartaGirada);

};



// quan s'acaba el joc
function endGame(acabat) {
    // busquem el modal
    aturarTemporitzador();
    pare_carta = document.getElementById("pare_carta");
    pare_carta.removeChild(carta_a_trobar);

    if (!acabat) {


        for (var i = 0; i < cartes.length; i++) {
            cartes[i].stop();

        }

    } else {
        document.querySelector('#scr_head').innerHTML = "Has acabat el memory";
    }
    var puntuacio = encerts * 16 + 4;

    document.querySelector('#puntuacio').innerHTML = puntuacio;
    document.querySelector('#aciertos').innerHTML = encerts;

    /**
     *  Cookies 
     **/
    var currentUser = getCookie("currentUser");
    currentUser = JSON.parse(currentUser);
    currentUser.puntuacio =
        parseInt(currentUser.puntuacio) + parseInt(puntuacio.toFixed(0));
    currentUser.memory = true;
    currentUser = JSON.stringify(currentUser);
    setCookie("currentUser", currentUser, 365);

    setTimeout(function () {
        $('.cover').slideDown(350);
    }, 500);
    return 0;
}

//
function tornarEnrere() {
    window.location.href = "index.html";
}

document.querySelector('.OK').addEventListener('click', function () {
    onclick = "location.href='jocsMenu.html'";
});
