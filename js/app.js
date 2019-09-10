$(function () {
    clicked = true
    $("#boton").click(function () {
        if (clicked) {
            $(this).css('background-color', 'gray');
            clicked = false
        } else {
            $(this).css('background-color', '#8fc02c');
            clicked = true
        }
    });

    $(".item").hover(
        function () {
            var iid = $(this).attr("id");
            $("#" + iid).find(".saber-mas").css('background-color', '#a6da3f')
        }, function () {
            var iid = $(this).attr("id");
            $("#" + iid).find(".saber-mas").css('background-color', '')
        });
});

$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});