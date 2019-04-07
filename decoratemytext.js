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

function test(){
    const checkbox = document.getElementById("blingCheck");//.attr("checked");
    if(checkbox.checked){
        document.getElementById("textArea").style.fontWeight = "bold";
        document.getElementById("textArea").style.color = "green";
        document.getElementById("textArea").style. textDecoration = "underline";
    }
    else {
        document.getElementById("textArea").style.fontWeight = "normal";
        document.getElementById("textArea").style.color = "black";
        document.getElementById("textArea").style. textDecoration = "none";
    }

}