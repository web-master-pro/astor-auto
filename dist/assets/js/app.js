$(document).ready(function() {

    $(".js-scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1700);
        return false;
    });

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $('html').addClass('safari');
    };

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("html").addClass("macos");
    } else {
        $("html").addClass("pc");
    };

    if (navigator.userAgent.search("MSIE") >= 0) {
        $('html').addClass('ie');
    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$('.browsehappy').click(function() {
    $(this).slideUp();
});

$(document).ready(function() {

    $(".slider").owlCarousel({
        navigation : true,
        slideSpeed : 200,
        paginationSpeed : 600,
        singleItem: true,
        autoPlay: 8000
    });

});

$(document).ready(function(){
    $(".menu-button").click(function(){
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(".nav__menu").slideUp(300);
        } else {
            $(this).addClass("on");
            $(".nav__menu").slideDown(300);
        }
    });
});
