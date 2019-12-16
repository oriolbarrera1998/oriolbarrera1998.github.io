function init(){
    loadInitialEvents();
    video       = document.querySelector('#videoElement');
    canvas      = document.querySelector('#canvas');
    webCamState = webCamStates.off; 
}

function cameraOn(){
    
    // Activar la font de vídeo
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
          .then(function (stream) {
            video.srcObject = stream;

            document.querySelector("#capture").style.display="inline";  
            document.querySelector(".start").style.pointerEvents = "none";
            mediaStream = stream.getTracks()[0]; 
            webCamState = webCamStates.on; 
          })
          .catch(function (error) {
            document.querySelector("#cameraOn").style.display="inline-block"; 
            webCamState = webCamStates.off;
          });
      }
      
}

function cameraOff(){
    //Apagar la camara
    video.srcObject = null;
    document.querySelector("#cameraOn").style.display="inline-block";  
    document.querySelector("#capture").style.display="none";  
    document.querySelector(".start").style.pointerEvents = "auto";
    playStream();
    webCamState = webCamStates.off;
    mediaStream.stop();
    
}

function playStream(e){
    document.querySelector("#videoElement").style.display="inline-block";
    document.querySelector("#canvas").style.display="none";
    webCamState = webCamStates.on;
    
}

function takepicture(shiftPressed) {
    
    if(webCamState == webCamStates.canvas){
        canvas2dowloandCanvas();                
        if (canvas.dataset.rotate=="180"){
            switchCanvas();            
        }
        downloadCanvas(shiftPressed,"downloadCanvas");                           
        
    }
    else{
        snapshotToCanvas(true); 
        canvas2dowloandCanvas();
        downloadCanvas(shiftPressed,"downloadCanvas");
    }
}

function snapshotToCanvas(rotate){
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var canvasContext= canvas.getContext("2d");
    canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    var auxCanvas = document.createElement('canvas');
    auxContext = auxCanvas.getContext("2d");
    auxCanvas.width = canvas.width;
    auxCanvas.height = canvas.height;
    auxContext.drawImage(canvas,0,0,canvas.width,canvas.height);
    
     document.body.appendChild(auxCanvas);
 
    if(rotate){
        if(video.dataset.rotate == "180"){            
            auxContext.save();
                auxContext.translate(canvas.width/2, canvas.height/2);          
                auxContext.rotate(180*Math.PI/180);
                auxContext.translate(-canvas.width/2, -canvas.height/2);
                auxContext.drawImage(canvas,0,0,canvas.width,canvas.height);
            auxContext.restore();
        }     
    }
       
    canvasContext.drawImage(auxCanvas,0,0,canvas.width,canvas.height);

    auxCanvas.remove();       

}

function canvas2dowloandCanvas(){
    canvasContext = document.querySelector("#canvas").getContext("2d");   
    var auxCanvas = document.querySelector("#downloadCanvas"); 
    auxContext = auxCanvas.getContext("2d");
    auxCanvas.width = canvas.width;
    auxCanvas.height = canvas.height;
    var cssFilter = getComputedStyle(document.querySelector("#canvas")).filter;
    auxContext.filter = cssFilter;
    auxContext.drawImage(canvas,0,0,canvas.width,canvas.height);
}

function downloadCanvas(askName, elementId){
    var link = document.createElement('a');
    var d = new Date();
    var fileName = String(d.getFullYear())+String(d.getMonth()+1)+String(d.getDate())+String(d.getHours())+String(d.getMinutes())+String(d.getSeconds()); 
    link.download = fileName;
    
    if(askName){
        var userFileName=prompt(messages.pedirNombreArchivo, fileName);
        if(userFileName!=null){
            link.download = userFileName;     
        } 
    
    }
    link.type = "png"; 
    link.href = document.getElementById(elementId).toDataURL();        
    link.click();            
    link.remove();   
   }