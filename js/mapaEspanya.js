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
    
    // Low-detail map
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.geodata = am4geodata_spainLow;
    chart.projection = new am4maps.projections.Miller();
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    chart.zoomControl = new am4maps.ZoomControl();
    
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.size = 100;
    
    polygonTemplate.tooltipText = " [font-size: 33px] {name} {radio} [/]";
    polygonTemplate.fill = am4core.color("#C00000");
    // create capital markers
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    
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
    
    imageSeriesTemplate.tooltipText = "[font-size: 33px] {title}";
    imageSeriesTemplate.fill = am4core.color("#C00000");
    
    var dado=1;
    circle.events.on("hit", function(event) {
     var data = event.target.dataItem.dataContext;
       
        if(dado==1){
        x=new Audio(data.radio)
        playPause(x);
         dado++;
       }
      else{
        dado=1;
        playStop(x);
      }
    }),
     
    
      
      
    
    myFunction=function() {
      var asd = document.querySelector('input[name="anys"]:checked').value;
      if(asd == 1){
      imageSeries.data = [
      {
        id: 1,
        latitude: 40.417,
        longitude: -3.404,
        title: "1920s Unión Radio",
        radio: "../utils/audios/ESPANYA audios per decàdes/1920s/1920s unión radio.mp3"
      },
      {
        id: 2,
        latitude: 40.417,
        longitude: -4.204,
        title: "1920s Unión Radio noticias",
        radio: "../utils/audios/ESPANYA audios per decàdes/1920s/1920s unión radio_noticias.mp3"
      },{
        id: 3,
        latitude: 41.390205,
        longitude: 2.154007,
        title: "1924 Radio Barcelona",
        radio: "../utils/audios/ESPANYA audios per decàdes/1920s/1924 EAJ-1 Radio Barcelona.mp3"
      },{
        id: 4,
        latitude: 41.390205,
        longitude: 2.454007,
        title: "1929 Expo universal",
        radio: "../utils/audios/ESPANYA audios per decàdes/1920s/1929_expo universal.mp3"
      },{
        id: 5,
        latitude: 41.690205,
        longitude: 2.154007,
        title: "Radio Barcelona cartellera teatres",
        radio: "../utils/audios/ESPANYA audios per decàdes/1920s/radio bcn Josep Miret_cartellera teatres.mp3"
      }
      ]
    }
    
    else if(asd == 2){
      imageSeries.data = [
      {
        id: 1,
        latitude: 37.3914105,
        longitude: -5.9591776,
        title: "Primer Radioreportatge (Sevilla)",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/1931_primer radioreportatge en directe amb un zepeling a Sevilla.mp3"
      },
      {
        id: 2,
        latitude: 40.417,
        longitude: -4.204,
        title: "Prova Grabació de discos",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/1934_José del Pozo prova la gravació de discos a Radio Barcelona.mp3"
      },{
        id: 3,
        latitude: 41.1054000,
        longitude: 0.4724100,
        title: "Cançó franquista",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/1936_canción franquista.mp3"
      },{
        id: 4,
        latitude: 41.390205,
        longitude: 2.454007,
        title: "Franco anima a les seves tropes",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/1936_Franco anima sus tropas.mp3"
      },{
        id: 5,
        latitude: 41.690205,
        longitude: 2.154007,
        title: "Meeting Partit Radical",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/1936_Meeting Partido Radical_Alejandro Reloux"
      }, {
        id: 6,
        latitude: 40.9559681,
        longitude: -5.6802244,
        title: "Comunicat final de la Guerra Civil",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/1939_ Fernando Fernandez de Córdoba leyendo el parte final de Guerra en Radio Nacional, Salamanca.mp3"
      }, {
        id: 7,
        latitude: 40.9559681,
        longitude: -5.6802244,
        title: "Discurs d'Alcalá-Zamora, president de la República",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/Alcala Zamora, presidente de la Republica.mp3"
      }, {
        id: 8,
        latitude: 40.9559681,
        longitude: -5.6802244,
        title: "Cançó república espanyola",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/cançó república espanyola.mp3"
      }, {
        id: 9,
        latitude: 40.9559681,
        longitude: -5.6802244,
        title: "Ortega i Gaset",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/Ortega i Gaset.mp3"
      }, {
        id: 10,
        latitude: 40.9559681,
        longitude: -5.6802244,
        title: "Que se mueran los feos",
        radio: "../utils/audios/ESPANYA audios per decàdes/1930s/Que se mueran los feos.mp3"
      }   
      ]
    }
    
    else if(asd == 3){
      imageSeries.data = [
      {
        id: 1,
        latitude: 37.3914105,
        longitude: -5.9591776,
        title: "1er viatge del tren articular Madrid-Barcelona",
        radio: "../utils/audios/ESPANYA audios per decàdes/1940s/1er viatge del tren articular Madrid-Barcelona.mp3"
      },
      {
        id: 2,
        latitude: 40.417,
        longitude: -4.204,
        title: "Simfonia noticiari partes de guerra",
        radio: "../utils/audios/ESPANYA audios per decàdes/1940s/simfonia noticiari partes de guerra.mp3"
      },{
        id: 3,
        latitude: 41.1054000,
        longitude: 0.4724100,
        title: "Sinfonia Azul Cadena SER",
        radio: "../utils/audios/ESPANYA audios per decàdes/1940s/Sinfonia Azul Cadena SER.mp3"
      }
      ]
    }
    
    if(asd == 4){
      imageSeries.data = [
      {
        id: 1,
        latitude: 40.417,
        longitude: -3.404,
        title: "1954 programa Carrusel Deportivo",
        radio: "../utils/audios/ESPANYA audios per decàdes/1950s/1954 pograma Carrusel Deportivo.mp3"
      },
      {
        id: 2,
        latitude: 40.417,
        longitude: -4.204,
        title: "1958 programa Discomanía",
        radio: "../utils/audios/ESPANYA audios per decàdes/1950s/1958 programa discomanía.mp3"
      },{
        id: 3,
        latitude: 41.390205,
        longitude: 2.154007,
        title: "Entrevista a Montserrat Caballé",
        radio: "../utils/audios/ESPANYA audios per decàdes/1950s/Entrevista a Montserrat Caballé.mp3"
      },{
        id: 4,
        latitude: 41.390205,
        longitude: 2.454007,
        title: "Entrevista profesor Santa Inés a Domingo Ortega",
        radio: "../utils/audios/ESPANYA audios per decàdes/1950s/entrevista profesor Santa Inés (crítico taurín) a Domingo Ortega.mp3"
      },{
        id: 5,
        latitude: 41.690205,
        longitude: 2.154007,
        title: "Partit de futbol",
        radio: "../utils/audios/ESPANYA audios per decàdes/1950s/partit de futbol.mp3"
      }
      ]
    }
    
    
    if(asd == 5){
      imageSeries.data = [
      {
        id: 1,
        latitude: 40.417,
        longitude: -3.404,
        title: "14/05/1962 casament dels reis Juan Carlos y Sofia",
        radio: "../utils/audios/ESPANYA audios per decàdes/1960s/14_05_1962 casament reis Juan carlos y Sofia.mp3"
      },
      {
        id: 2,
        latitude: 40.417,
        longitude: -4.204,
        title: "1962 inundacions Barcelona",
        radio: "../utils/audios/ESPANYA audios per decàdes/1960s/1962 inundaciones Barcelona. Radio Barcelona, voz de Soler Serrano.mp3"
      },{
        id: 3,
        latitude: 41.390205,
        longitude: 2.154007,
        title: "1966 Los 40 Principales",
        radio: "../utils/audios/ESPANYA audios per decàdes/1960s/1966 los 40 principales.mp3"
      },{
        id: 4,
        latitude: 41.390205,
        longitude: 2.454007,
        title: "1968 Serrat",
        radio: "../utils/audios/ESPANYA audios per decàdes/1960s/1968 Serrat.mp3"
      },{
        id: 5,
        latitude: 41.690205,
        longitude: 2.154007,
        title: "Alberto Oliveras",
        radio: "../utils/audios/ESPANYA audios per decàdes/1960s/Alberto Oliveras.mp3"
      },{
        id: 6,
        latitude: 41.390205,
        longitude: 2.454007,
        title: "Don Pollo",
        radio: "../utils/audios/ESPANYA audios per decàdes/1960s/Don Pollo.mp3"
      },{
        id: 7,
        latitude: 41.690205,
        longitude: 2.154007,
        title: "La noche vista por mí, Encarna Sánchez",
        radio: "../utils/audios/ESPANYA audios per decàdes/1960s/La noche vista por mí, Encarna Sánchez.mp3"
      }
      ]
    }
    
    if(asd == 6){
      imageSeries.data = [
      {
        id: 1,
        latitude: 40.417,
        longitude: -3.404,
        title: "Alejo García, legalización del partido comunista",
        radio: "../utils/audios/ESPANYA audios per decàdes/1970s/Alejo García, legalización del partido comunista.mp3"
      },
      {
        id: 2,
        latitude: 40.417,
        longitude: -4.204,
        title: "Barcelona pròxima capital olímpica",
        radio: "../utils/audios/ESPANYA audios per decàdes/1970s/Barcelona proxima capital olímpica.mp3"
      },{
        id: 3,
        latitude: 41.390205,
        longitude: 2.154007,
        title: "El loco de la colina, Jesús Quintero",
        radio: "../utils/audios/ESPANYA audios per decàdes/1970s/El loco de la colina, Jesús Quintero.mp3"
      },{
        id: 4,
        latitude: 41.390205,
        longitude: 2.454007,
        title: "Felipe González, PSOE",
        radio: "../utils/audios/ESPANYA audios per decàdes/1970s/Felipe González PSOE.mp3"
      },{
        id: 5,
        latitude: 41.690205,
        longitude: 2.154007,
        title: "Mort de Franco",
        radio: "../utils/audios/ESPANYA audios per decàdes/1970s/mort de Franco.mp3"
      }
      ]
    }
    
    if(asd == 7){
      imageSeries.data = [
      {
        id: 1,
        latitude: 40.417,
        longitude: -3.404,
        title: "1981 23-F cop d'estat en directe. Rafael Luís Díaz",
        radio: "../utils/audios/ESPANYA audios per decàdes/1980s/1981 23-F cop d'estat en directe. Rafael Luís Díaz.mp3"
      },
      {
        id: 2,
        latitude: 40.717,
        longitude: -4.204,
        title: "1982 programa Super García en la hora cero",
        radio: "../utils/audios/ESPANYA audios per decàdes/1980s/1982 programa Super García en la hora cero.mp3"
      },{
        id: 3,
        latitude: 40.417,
        longitude: -4.204,
        title: "1986 Hoy por Hoy, Iñaki Gabilondo",
        radio: "../utils/audios/ESPANYA audios per decàdes/1980s/1986 Hoy por Hoy, Iñaki Gabilondo.mp3"
      },{
        id: 4,
        latitude: 41.390205,
        longitude: 2.454007,
        title: "1988 La Guerra dels Mons",
        radio: "../utils/audios/ESPANYA audios per decàdes/1980s/1988_La Guerra dels Mons.mp3"
      },{
        id: 5,
        latitude: 41.690205,
        longitude: 2.154007,
        title: "Freddy Mercury i Montserrat Caballé",
        radio: "../utils/audios/ESPANYA audios per decàdes/1980s/Freddy Mercury i Montserrat Caballé.mp3"
      },{
        id: 6,
        latitude: 40.237,
        longitude: -4.104,
        title: "Protagonistas, Luis del Olmo",
        radio: "../utils/audios/ESPANYA audios per decàdes/1980s/Protagonistas, Luis del Olmo.mp3"
      }
      ]
    }
}
      
      
    function playPause(audio) {
        audio.play();
    }
        
    function playStop(audio) {
        audio.pause();
    }

}