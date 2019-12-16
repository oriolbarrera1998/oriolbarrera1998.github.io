var cameraStatus = false 
var video        = undefined;
var mediaStream;
var canvas;                     


var webCamStates = {
    off:    1, 
    on:     2,
    canvas: 3
 };
 // Estat actiu (per defecte desactivat)  
var webCamState = webCamStates.disabled;
// Seleccionar i carregar l'idioma actiu




