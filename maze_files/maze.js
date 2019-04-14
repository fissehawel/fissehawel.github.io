$(function(){
    $("#start").mouseenter(function(){
        $("#maze .boundary").css("background-color", "");
        $("#status").text(undefined);
        let flag = true;
        var timer = null;
        $("#maze .boundary").mouseover(function(){
            if(flag){
                flag = false;
                youLose();
            }
        });

        $("#maze").mouseleave(function(){ // Or moouseleave the parent.
            if(flag){
                flag = false;
                youLose();
            }
        });

        $("#end").mouseenter(function(){
            if (flag) {
                $("#status").text("You Win!");
                flag = false;
               timer =  setTimeout(tryAgain, 2500);
            }
        });
    });
});
function youLose(){
    $("#maze .boundary").css("background-color", "red");
    $("#status").text("You Lose!");
    timer = setTimeout(tryAgain, 2500);
}
function tryAgain(){
    $("#status").text('Click the \"S\" to begin');
    $("#maze .boundary").css("background-color", "");
}