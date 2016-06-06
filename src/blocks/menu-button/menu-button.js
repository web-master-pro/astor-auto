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
