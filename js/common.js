$(document).ready(function (){
    $('.btn-down').click (function() {
        $('html, body').animate({ scrollTop: $('.header').height()},'slow');
        return false;
    });
});