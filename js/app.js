let counter = 0;

$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");


    $(".prevBtn").click(function () {
        $("#counter").text(+($("#counter").text()) - 1);
        changeColor();
    });

    $(".nextBtn").click(function () {
        $("#counter").text(+($("#counter").text()) + 1);
        changeColor();
    });

    function changeColor(params) {
        if(+$("#counter").text() > 0) {
            $("#counter").css("color", "green");
        } else if(+$("#counter").text() < 0) {
            $("#counter").css("color", "green");
        } else {
            $("#counter").css("color", "gray");
        }
    }
});