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

//Find longest word in the array
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


// Code from lecture slide, modified;
const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem *10;
})
console.log(b);
const c = a.filter(function(elem, i, array){
    return elem == 3;});
console.log(c);
const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});
console.log(d);

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
console.log(d2);
console.log(d3);
