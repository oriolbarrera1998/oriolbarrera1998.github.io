document.addEventListener("DOMContentLoaded", function() { 

var backButton = document.querySelector('.back-button');

function backAnim(){  
    window.history.back();
}
backButton.addEventListener('click', backAnim); 

});