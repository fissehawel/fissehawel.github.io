window.onload = function(){
    document.getElementById("run-demo").onclick = demo;
}
// sum elements in array reduce
function sum(arr){
    // this can also be implemented using reduce.
    if(typeof arr == "object"){
        return arr.reduce((sum, value) => sum + value, 0);
    }
    else if(typeof arr == "number"){
        return arr;
    }
    else
        alert("Input must be an array of numbers");
}

// Multiply elements of an array
function multiply(arr){
    if(typeof arr == "object"){
        return arr.reduce((prod, value) => prod * value, 1);
    }
    else if(typeof arr == "number"){
        return arr;
    }
    else
        alert("Input must be an array of numbers");
}

// Reverse a string using map.
function reverse(str){
    if(typeof str == "string"){
        return str.split("").map((value, i, str) => str[str.length-1-i]).join("");
    }
    else
        alert("Input is not a string.");
}

// Returns ana array words with length greater than a given value
/*function filterLongWords(arr, len){
    if(typeof arr == "object"){
        return arr.filter(function(word){
            return word.length > len;
        })
    }
}
*/

function filterLongWords(arr, len){
    let result = [];
    if(typeof arr == "object"){

        for(let i = 0; i < arr.length; i++){
            if(arr[i].length > len)
                result.push(arr[i]);
        }

    }
    return result;
}


function myFunctionTest(a,f){
    let b = f(); // f is a function passed from the calling object.
    if((typeof a === "object") && (typeof b === "object")){
        if(a.length !== b.length){
            return "TEST FAILED";
        }
        else {
            for (let i = 0; i < a.length; i++) {
                if(a[i] !== b[i]){
                    return "TEST FAILED";
                }
            }
            return "TEST SUCCEEDED";
        }
    }
    else if(a !== b) {
        return "TEST FAILED";
    }
    else
        return "TEST SUCCEEDED";
}

// Demo
function demo(){

    console.log("1) Expected output of sum([2,7, 8, 3]) is 20 and  " +
        myFunctionTest(20, function(){
            return sum([2,7, 8, 3]);
        }));

    console.log("2) Expected output of multiply([2,7, 8, 3]) is 336 and  " +
        myFunctionTest(336, function(){
            return multiply([2,7, 8, 3]);
        }));

    console.log("3) Expected output of reverse(\"!ereht iH\") is \"Hi there!\" and  " +
        myFunctionTest("Hi there!", function(){
            return reverse("!ereht iH");
        }));

    let words = ["Hello", "Hi", "Good afternoon", "Holiday", "Weekends", "Good Bye!"];

    let expectedResult = ["Good afternoon", "Weekends", "Good Bye!"];
    console.log("4) Expected output of " +
        "filterLongWords(words, 7) is [\"Good afternoon\", \"Weekends\", \"Good Bye!\"] and " +
        myFunctionTest(expectedResult,  function(){
            return filterLongWords(words, 7);}));

}


