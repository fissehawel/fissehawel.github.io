// A function to find the maximum of two numbers
function max(a, b){
    if(typeof a == "number" && typeof b == "number") {
        if (a >= b)
            return a;
        else
            return b;
    }
    else
        alert("All inputs must be numbers!")
}
// A function to find the maximu of three numbers
function maxOfThree(a, b, c){
    if(a > b){
        return max(a, c);
    }
    else
        return max(b,c);
}
// A function to determine if an input character is a vowel.
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
// sum elements in array
function sum(arr){
    // this can also be implemented using reduce.
    if(typeof arr == "object"){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            if(typeof Number(arr[i]) =="number"){
                sum += Number(arr[i]);
            }
            else
                alert("Input must be an array of numbers");
        }
        return sum;
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
        let prod = 1;
        for(let i = 0; i < arr.length; i++){
            if(typeof Number(arr[i]) =="number"){
                prod *= Number(arr[i]);
            }
            else
                alert("Input must be an array of numbers");
        }
        return prod;
    }
    else if(typeof arr == "number"){
        return arr;
    }
    else
        alert("Input must be an array of numbers");
}

// Reverse a string input
function reverse(str){
    if(typeof str == "string"){
        let reversed = "";
        for(let i = 0; i < str.length; i++){
            reversed += str[str.length-i-1];
        }
        return reversed;
    }
    else
        alert("Input is not a string.");
}

//Find length of longest word in the array
function findLongestWord(strArr){
    if(typeof strArr == "object"){
        let maxLen = strArr[0].length;
        for(let i = 0; i < strArr.length; i++){
            if(strArr[i] .length > maxLen){
                maxLen = strArr[i].length;
            }

        }
        return maxLen;
    }
    else
        return null;
}

// Returns ana array words with length greater than a given value
function filterLongWords(arr, len){
    if(typeof arr == "object"){
        return arr.filter(function(word){
            return word.length > len;
        })
    }
}

function myFunctionTest(a,f){
    let b = f(); // f is a function passed from the calling object.
    if(typeof a === typeof b && typeof a === "object" ){
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
    else if( typeof a !== "object" && a !== b) {
        return "TEST FAILED";
    }
    else
        return "TEST SUCCEEDED";
}

// Demo

function demo(){
    console.log("1) Expected output of max(20,10) is 20 and  " +
        myFunctionTest(20, function(){
            return max(10, 20);
        }));

    console.log("2) Expected output of max(20,10, 21) is 221 and  " +
        myFunctionTest(21, function(){
            return maxOfThree(20, 10, 21);
        }));

    console.log("3) Expected output of isVowel(\"T\") is false and  " +
        myFunctionTest(false, function(){
            return isVowel("T");
        }));

    console.log("3) Expected output of isVowel(\"U\") is true and  " +
        myFunctionTest(true, function(){
            return isVowel("U");
        }));

    console.log("4) Expected output of sum([2,7, 8, 3]) is 20 and  " +
        myFunctionTest(20, function(){
            return sum([2,7, 8, 3]);
        }));

    console.log("5) Expected output of multiply([2,7, 8, 3]) is 336 and  " +
        myFunctionTest(336, function(){
            return multiply([2,7, 8, 3]);
        }));

    console.log("6) Expected output of reverse(\"!ereht iH\") is \"Hi there!\" and  " +
        myFunctionTest("Hi there!", function(){
            return reverse("!ereht iH");
        }));

    let words = ["Hello", "Hi", "Good afternoon", "Holiday", "Weekends", "Good Bye!"];
    console.log("Given string array: words = [\"Hello\", \"Hi\", \"Good afternoon\", \"Holiday\", \"Weekends\", \"Good Bye!\"]")
    console.log("7) Expected output of " +
        "findLongestWord(words) is 14" +
        " and " + myFunctionTest(14,  function(){
            return findLongestWord(words);
        }));

    let expectedResult = ["Good afternoon", "Weekends", "Good Bye!"];
    console.log("8) Expected output of " +
        "filterLongWords(words, 7) is [\"Good afternoon\", \"Weekends\", \"Good Bye!\"] and " +
        myFunctionTest(expectedResult,  function(){
            return filterLongWords(words, 7);}));

    console.log("8) The output of filterLongWords(words, 7) " + filterLongWords(words, 7));

    // Code from lecture slide, modified;
    const a = [1,3,5,3,3];
    console.log("Given the array a = [1,3,5,3,3]")
    const b = a.map(function(elem, i, array) {
        return elem *10;
    })
    console.log("Multiply each element of a by 10: " + b);
    const c = a.filter(function(elem, i, array){
        return elem == 3;});
    console.log("Elements of a that are equal to 3:" + c);
    const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });
    console.log("product of all elements of a: " + d);
}


