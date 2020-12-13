$(document).ready(function () {

    var windowWidth = $(window).width()
    var mouseX = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        if (mouseX < windowWidth / 2) {
            $(".box").css("background-color", "red");
        }
        if (mouseX > windowWidth / 2) {
            $(".box").css("background-color", "blue");
        }
    })

})