function loadInitialEvents()
{
    document.querySelector("#cameraOn").addEventListener("click", cameraOn);
    document.querySelector("#resetPuzzle").addEventListener("click", cameraOff);
    document.querySelector("#capture").addEventListener('click', function(ev){
        if(ev.shiftKey==true){ 
            takepicture(true);
        }else{
            takepicture(false);
        }

        ev.preventDefault();
    }); 
}   
