window.onload = function() {

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

/**
 * Define SVG path for target icon
 */

var nomPais = document.querySelector("#paisNom");
var nomRadio = document.querySelector("#radioNom");
var infoExtra = document.querySelector("#extraInfo");


 var targetSVG =
  "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.size = 100;

polygonTemplate.tooltipText = " [font-size: 100px] {name} {radio} [/]";
polygonTemplate.fill = am4core.color("#11999e");
// create capital markers
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.id = "markers";

// define template
var imageSeriesTemplate = imageSeries.mapImages.template;

var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 10;
circle.fill = am4core.color("#000000");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;

imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

imageSeriesTemplate.tooltipText = "[font-size: 100px] {title}";
imageSeriesTemplate.fill = am4core.color("#C00000");

// set zoom events
imageSeries.events.on("datavalidated", updateImageVisibility);
chart.events.on("zoomlevelchanged", updateImageVisibility);


//circle.path = targetSVG;
var dado = 1;
circle.events.on("hit", function(event) {
  var data = event.target.dataItem.dataContext;
  if(navigator.onLine = true){
    x = new Audio(data.radio2);
    if (dado == 1) {   
      playPause(x);
      dado++;
    } else {
      dado = 1;
      playStop(x);
    }
  }

  else {
    x2 = new Audio(data.radio);
    if (dado == 1) {   
      playPause(x2);
      dado++;
    } else {
      dado = 1;
      playStop(x2);
    }
  }
  document.querySelector(".cover").style.display= "inline";

  nomPais.innerHTML =  data.informacio.pais;
  nomRadio.innerHTML =  data.informacio.nomRadio;
  infoExtra.innerHTML =  data.informacio.informacioRadio;
});

document.querySelector("#divOk").addEventListener("click", function() {
  document.querySelector(".cover").style.display= "none";
});
function updateImageVisibility(ev) {
  var chart = ev.target.baseSprite;
  var series = chart.map.getKey("markers");

  series.mapImages.each(function(image) {
    if (image.dataItem.dataContext.minZoomLevel) {
      if (image.dataItem.dataContext.minZoomLevel >= chart.zoomLevel) {
        image.hide();
      } else {
        image.show();
      }
    }
  });
}

imageSeries.data = [
  {
    minZoomLevel: 2,
    id: 1,
    latitude: 41.390205,
    longitude: 2.154007,
    title: "Barcelona",
    radio: "../utils/audios/ràdios del món/Catalunya ràdio.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Espanya",
      "nomRadio": "Catalunya Ràdio",
      "informacioRadio": "Catalunya Ràdio és l'emissora de ràdio convencional pública catalana, propietat de la Corporació Catalana de Mitjans Audiovisuals (CCMA)"
      + " de la Generalitat de Catalunya. És la que dóna el nom al grup d'emissores de la Generalitat anomenat Catalunya Ràdio SRG SA. Va ser fundada l'amny 1983 per la Generalitat."
  }
  },
  {
    minZoomLevel: 4,
    id: 2,
    latitude: 52.5243683,
    longitude: 13.4105301,
    title: "Berlín",
    radio: "../utils/audios/ràdios del món/ràdio ALEMANYA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Alemanya",
      "nomRadio": "Deutschlandradio",
      "informacioRadio": "Deutschlandradio és una emissora de radiodifussió pública d'Alemanya. Opera quatre reds nacionals: Deutschlandfunk, Deutschlandfunk Kultur, Dokumente und Debatten i Deutschlandfunk Nova. "
      + "Creada a 1994 té les seves seus a Colonia i Berlín i s'anomena a ella mateixa la ràdio nacional anemanya.​ És membre de la Unió Europea de Radiodifussió."
       
  }
  },
  {
    minZoomLevel: 4,
    id: 3,
    latitude: -8.837,
    longitude: 13.234,
    title: "Luanda",
    radio: "../utils/audios/ràdios del món/ràdio ANGOLA (ÀFRICA).mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Angola",
      "nomRadio": "Ràdio Nacional d'Angola",
      "informacioRadio": "Rádio Nacional d'Angola (RNA) és una empresa de radiodifusió pública de la República d'Angola, fundada l'octubre de 1977, i que té la seu a Luanda."
      + "Com a estació de servei públic, la RNA té com a objectiu garantir la llibertat d'expressió i el dret a la informació i difondre els diversos aspectes del poble angolès, la seva cultura i hàbits.[2] Les emissions es fan majoritàriament en portuguès, però també té programes en les llengües nacionals del país."
  }
  },
  {
    minZoomLevel: 1,
    id: 4,
    latitude: 24.688,
    longitude: 46.722,
    title: "Riad",
    radio: "../utils/audios/ràdios del món/ràdio ARÀBIA SAUDI.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Aràbia Saudita",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    minZoomLevel: 2,
    id: 5,
    latitude: -34.604,
    longitude: -58.382,
    title: "Buenos Aires",
    radio: "../utils/audios/ràdios del món/ràdio ARGENTINA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Argentina",
      "nomRadio": "Radio Continental",
      "informacioRadio": "Radio Continental és una estació de rádio argentina que retransmet desde la Ciutat Autònoma de Buenos Aires. La seva primera emissió es va fer el 28 de septembre de 1969, ara fa més de 50 anys. "
  }
  },
  {
    minZoomLevel: 4,
    id: 6,
    latitude: -35.281,
    longitude: 149.13,
    title: "Canberra",
    radio: "../utils/audios/ràdios del món/ràdio AUSTRALIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Canadà",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    minZoomLevel: 2,
    id: 7,
    latitude: 39.904,
    longitude: 116.407,
    title: "Pequín",
    radio: "../utils/audios/ràdios del món/ràdio BEIJING (XINA).mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Xina",
      "nomRadio": "Ràdio Internacional de Xina",
      "informacioRadio": "Ràdio Internacional de Xina, antigament Radio Beijing, és una de les dues emissores de ràdio que pertanyen a Xina. Va ser fundada el 3 de diciembre de 1941. "
      + "Hi ha una versió d'aquesta emissora per a cada un dels següents idiomes: xinès mandarí, coreá, anglés, rus, francés, castellà, àrab, japonés, alemany i esperanto, les 24 h. "
  }
  },
  {
    minZoomLevel: 1,
    id: 8,
    latitude: -15.827,
    longitude: -47.922,
    title: "Brasilia",
    radio: "../utils/audios/ràdios del món/ràdio BRAZIL.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Brazil",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One és la ràdio de notícies i informacions que transmet en anglés, pertany a la Corporació Canadenca "
      + "de Radiodifusió (CBC, de l'acrònim en anglés Canadian Broadcasting Corporation). Ofereix programació tant a nivell local com nacional, i està disponible a les freqüències AM i FM per al 98 per cent dels canadencs. "
  }
  },
  {
    minZoomLevel: 0,
    id: 9,
    latitude: 45.411,
    longitude: -75.698,
    title: "Ottawa",
    radio: "../utils/audios/ràdios del món/ràdio CANADÀ.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Canadà",
      "nomRadio": "CBC Radio One",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    id: 10,
    latitude: 30.044,
    longitude: 31.236,
    title: "El Cairo",
    radio: "../utils/audios/ràdios del món/ràdio EGIPTE.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Egipte",
      "nomRadio": "ERTU",
      "informacioRadio": "La Unió de Ràdio i Televisió Egipcia (en anglès, Egyptian Radio and Television Union), més coneguda per les sigles ERTU, és la radiodifusora pública d'Egipte. "
      + "És membre actiu de la Unió Europea de Radiodifusió desde 1985. " 
  }
  },
  {
    id: 11,
    latitude: 40.417,
    longitude: -3.704,
    title: "Madrid",
    radio: "../utils/audios/ràdios del món/ràdio ESPANYA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Espanya",
      "nomRadio": "Ràdio Nacional d'Espanya",
      "informacioRadio": "Radio Nacional de España (RNE) és la cadena pública de radiodifusió espanyola. Va ser fundada per José Millán-Astray y Terreros a Salamanca el 19 de gener de 1937, en plena Guerra Civil espanyola, des de 1973 està integrada en l'organisme públic Radiotelevisió Espanyola (RTVE) que inclou també a Televisió Espanyola (TVE). "
  }
  },
  {
    id: 12,
    latitude: 28.614,
    longitude: 77.209,
    title: "Nueva Delhi",
    radio: "../utils/audios/ràdios del món/ràdio INDIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "India",
      "nomRadio": "All India Radio",
      "informacioRadio": "All India Radio (abreviada com AIR), oficialment coneguda com Akashvani, és una emissora de ràdio nacional de la India, establida el 1936. A l'actualidad, és el servei germà de Doordarshan de Prasar Bharati, la tele emissora nacional."
      + "All India Radio és una de les reds de àdio més grans del món. "
  }
  },
  {
    id: 13,
    latitude: -6.215,
    longitude: 106.845,
    title: "Yakarta",
    radio: "../utils/audios/ràdios del món/ràdio INDONESIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Indonèsia",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "Radio Republik Indonesia és la red de ràdio pública propietat de l'estat d'Indonèsia. Té diversos canals que emeten per tota Indonèsia i també a l'extranger per donar servei a tots els ciutadans indonesis de tot el món.  "
      + "Va ser fundada l'11 de septembre de 1945 i a partir de l'any 2006 no està controlada pel gobern."
    }
  },
  {
    id: 14,
    latitude: 41.892,
    longitude: 12.511,
    title: "Roma",
    radio: "../utils/audios/ràdios del món/ràdio ITÀLIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Itàlia",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    id: 15,
    latitude: 35.68,
    longitude: 139.769,
    title: "Tokio",
    radio: "../utils/audios/ràdios del món/ràdio JAPÓ.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Japó",
      "nomRadio": "Shibuya Cross-FM",
      "informacioRadio": "http://shibuyacrossfm.jp/company/ "
  }
  },
  {
    id: 16,
    latitude: 51.18,
    longitude: 71.446,
    title: "Astaná",
    radio: "../utils/audios/ràdios del món/ràdio KAZAKHSTAN.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Canadà",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    id: 17,
    latitude: 51.513,
    longitude: -0.092,
    title: "Londres",
    radio: "../utils/audios/ràdios del món/ràdio LONDRES.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Anglaterra",
      "nomRadio": "BBC Radio London",
      "informacioRadio": "BBC Radio London és la cadena de ràdio local de la BBC a Londres i forma part de la xarxa més àmplia de BBC London. L’emissora emet a Londres capital i més enllà, a la freqüència 94,9 FM."
      + "El contingut de l'emissora és generalment similar al de les altres emissores de ràdio local de la BBC i té com a objectiu un públic ampli i principal. "
  }
  },
  {
    id: 18,
    latitude: 19.433,
    longitude: -99.133,
    title: "Ciudad de México",
    radio: "../utils/audios/ràdios del món/ràdio MÈXIC.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Mèxic",
      "nomRadio": "XHMVS-FM",
      "informacioRadio": "XHMVS-FM és una estació de ràdio de Ciutat de Mèxic. Transmet a 102.5 FM des d'una torre situada al Cerro del Chiquihuite, XHMVS-FM és propietat de MVS Comunicaciones i és una estació noticiosa coneguda amb el nom MVS Noticias. "
      + "La seva primera emissió es va realitzar el 15 d'abril de l'any 1967."
  }
  },
  {
    id: 19,
    latitude: 59.914,
    longitude: 10.752,
    title: "Oslo",
    radio: "../utils/audios/ràdios del món/ràdio NORUEGA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Noruega",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    id: 20,
    latitude: -41.287,
    longitude: 174.776,
    title: "Wellington",
    radio: "../utils/audios/ràdios del món/ràdio NOVA ZELANDA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Nova Zelanda",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    id: 21,
    latitude: 38.722,
    longitude: -9.139,
    title: "Lisboa",
    radio: "../utils/audios/ràdios del món/ràdio PORTUGAL.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Portugal",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    id: 22,
    latitude: 55.756,
    longitude: 37.617,
    title: "Moscú",
    radio: "../utils/audios/ràdios del món/ràdio RUSSIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Russia",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  },
  {
    id: 23,
    latitude: 39.92,
    longitude: 32.854,
    title: "Ankara",
    radio: "../utils/audios/ràdios del món/ràdio TURQUIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3",
    informacio: {
      "pais": "Turquia",
      "nomRadio": "Radio Vancouver",
      "informacioRadio": "La CBC Radio One es la radio de noticias e informaciones, que transmite en inglés, perteneciente a la Corporación Canadiense "
      + "de Radioifusión (CBC, del acrónimo en inglés CBC Logo 1992-Present.svg Canadian Broadcasting Corporation). Ofrece programación tanto a nivel local y nacional, y está disponible en las frecuencias AM y FM para el 98 por ciento de los canadienses. "
  }
  }
];
// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();

// Add and configure small map
chart.smallMap = new am4maps.SmallMap();
chart.smallMap.series.push(polygonSeries);
function playPause(audio) {
  audio.play();
}

function playStop(audio) {
  audio.pause();
}

}
