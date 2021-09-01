$(document).ready(function(){
    // VOLTAR AO TOPO
    $("#topo").hide()
        window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 400){
            $("#topo").show();
        } else {
            $("#topo").hide();
        }
    });});


