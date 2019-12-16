
$(window).on('load',function(){
    $('#myModal').modal({backdrop: 'static',
    keyboard: false})
    $('#myModal').modal('show');
});

function tornarEnrere(){
    window.location.href = "http://localhost:80/dashboard";
}