window.onload = function(){
    document.getElementById("animation").onclick = updateText;
    document.getElementById("fontsize").onclick = changeFontSize;;
    document.getElementById("start").onclick = beginAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("turbo").onchange = changeSpeed;


}
// Global variables for holding timer, frames  and frame index to display.
let key = "Blank";
let timer = null;
let frames = [];
let i = 0;
let delay = 250;
let fontSizes = {"Tiny": "7pt", "Small": "10pt", "Medium": "12pt",
    "Large": "16pt", "Extra Large": "24pt","XXL": "32px"};

function beginAnimation() {
    //frames = ANIMATIONS["Exercise"].split("=====\n");
    if (key === "Blank" || key === "blank")
        alert("Selected animation is Black. Please select other options to see the animation.")
    else {
        frames = ANIMATIONS[key].split("=====\n");
        timer = setInterval(animate, delay);
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
        document.getElementById("stop").disabled = false;
    }
}
function updateText(){
    key = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[key];
}

function changeFontSize(){
    key = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = fontSizes[key];
}
function animate(){
    // Check frame index.
    if(i == frames.length)
        i = 0;
    // Update text area.
    document.getElementById("text-area").value = frames[i];
    i++;        // Increment index;
}

function stopAnimation(){
    clearInterval(timer);
    timer = null;
    document.getElementById("stop").disabled = true;
    document.getElementById("text-area").value = ANIMATIONS[key];
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
}

function changeSpeed(){
    if(document.getElementById("turbo").checked){
        delay = 50;
    } else{
        delay = 250;
    }

    if(timer !== null) {
        clearInterval(timer);
        timer = setInterval(animate, delay);
    }

}