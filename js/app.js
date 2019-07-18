clicked = true
$("#boton").click(function(){
    if (clicked){
        $(this).css('background-color', 'gray');
        clicked=false
    }else{
        $(this).css('background-color', '#8fc02c');
        clicked=true
    }
})

