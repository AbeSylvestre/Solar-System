$(document).ready(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $(".scrollBtn").fadeIn();
        }
        else {
            $(".scrollBtn").fadeOut();
        }
    });

    //Scrolling to Top animation
    $(".scrollBtn").click(function() {
        $("html, body").animate({scrollTop : 0}, 800);
        return false;
    });

});