$(function(){
    $("#maze .boundary").css("color", "");
    $("#status").text(" ");

    $("#start").mouseenter(function(){
        let flag = true;

        $("#maze .boundary").mouseover(function(){
            flag = false;
            $("#maze .boundary").css("background-color", "red");
            $("#status").text("You Lose!");
            return false;
        });

        /*if($("#maze").parent().mouseover()) {
            flag = false;
            $("#maze .boundary").css("background-color", "red");
            $("#status").text("You Lose!");
            return false;
        }*/

        $("#end").mouseenter(function(){
            if (flag) ;
            $("#status").text("You Win!");
        });


    });
});