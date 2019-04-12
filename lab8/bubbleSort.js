// Bubble sort algorithm on the array object.
Array.prototype.bubbleSort = function(){
    let arr = this;
    let swap = false;
    for (let j = 0; j < arr.length; j++) {
        for(let i = 0; i < arr.length-1; i++){
            if (arr[i] > arr[i + 1]) {  // Swap.
                let a = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = a;
                swap = true;
            }
        }
        if(!swap){
            break;  // No more iteration is required.
        }
    }
    return arr;
}