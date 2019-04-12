/* CS 472, Lesson 8 labs
 */
"use strict";
// Using the filter array function
String.prototype.filter = function(words){
    let str = this.split(" ");
    return (function() {
        for(let i = 0; i < words.length; i++){
            return str.filter(value => value != words[i]);
        }
    })().join(" ");
}
/*
// Using for loops.
String.prototype.filter = function(words){
    let str = this.split(" ");
    let temp = [];
    let found = false;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < words.length; j++){
            if(str[i] === words[j]){
                found = true;
            }
        }
        if(!found){
            temp.push(str[i]);
        }
    }
    return temp.join(" ");
}
*/