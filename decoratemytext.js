window.onload = function(){
    document.getElementById("bigdecor").onclick = decorate;

   document.getElementById("bling-chk").onchange = changeStyle;

    document.getElementById("igpay-btn").onclick = igpayAtinlay;

    document.getElementById("malkov-btn").onclick = malkovich;
}


function decorate(){
    setInterval(timeDecoration, 500);
}


function timeDecoration() {
    let textArea = document.getElementById("textArea");

    let style = window.getComputedStyle(textArea).getPropertyValue('font-size');
    let fontSize = parseInt(style);
    console.log("Font size: " + style)
    textArea.style.fontSize = (fontSize + 2 + "px");
}

function changeStyle(){
    let textArea = document.getElementById("textArea");
    const checkbox = document.getElementById("bling-chk");//.attr("checked");
    if(checkbox.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style. textDecoration = "underline";
        textArea.style.backgroundImage = " url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";

    }
    else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style. textDecoration = "none";
        textArea.style.backgroundImage = "none";
    }
}
function isVowel(c){
    if(c.length == 1){
        if(c === "a" || c==="A" || c === "e" || c==="E" ||
            c === "I" || c==="i" || c === "O" || c==="o" ||
            c === "u" || c==="U"){
            return true;
        }
        else
            return false;

    }

}

function  igpayAtinlay(){
    let textArea = document.getElementById("textArea");
    let text = textArea.value.split(" ");
    for(let i = 0; i < text.length; i++){
        if(isVowel(text[i].charAt(0))){
            text[i] = text[i] +"ay";
        }
        else{
            for(let j = 1; j < text[i].length; j++){
                if(isVowel(text[i].charAt(j))){
                    text[i] = text[i].substring(j) + text[i].substring(0, j)+"ay";
                    break;
                }
            }
        }

    }

    textArea.innerHTML = text.join(" ");
}

function  malkovich(){
    let textArea = document.getElementById("textArea");
    let text = textArea.value.split(" ");
    for(let i = 0; i < text.length; i++){
        if(text[i].length >= 5 ){
            text[i] = "Malkovich";
        }

    }

    textArea.innerHTML = text.join(" ");
}