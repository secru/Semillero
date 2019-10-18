$(function () {

    $("#boton").click(function () {
        $(this).toggleClass("switch-btn");
    });

    $(".item").hover(
        function () {
            var iid = $(this).attr("id");
            $("#" + iid).find(".saber-mas").css('background-color', '#a6da3f')
        }, function () {
            var iid = $(this).attr("id");
            $("#" + iid).find(".saber-mas").css('background-color', '')
        });

    $('.js-example-basic-multiple').select2({
        language: "es"  
    });
});