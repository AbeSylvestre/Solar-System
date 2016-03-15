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

    //Section elements animation
        //Thanks to Simon Codrington for animation guide
    var $animation_elements = $("animation_element");
    var $window = $("window");
    $window.trigger("scroll");
    $window.on("scroll resize", check_if_in_view);
    $(".onScreen").fadeIn();

    function check_if_in_view() {
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + element_height);

            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('onScreen');
            } else {
                $element.removeClass('onScreen');
            }
        });
    }

});