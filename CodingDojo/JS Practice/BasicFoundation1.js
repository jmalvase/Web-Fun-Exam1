// 1
function createArray () {
    var newArray = [];
    for (var i = 1; i <= 255; i ++) {
        newArray.push(i);
    }
    return newArray;
}

// 2
function sumArray () {
    var sum = 0;
    for(var x = 1; x <= 1000; x++){
        if(x%2 === 0){
            sum = sum + x;
        }
      return sum;
    }
}

// 3
function sumOdd () {
    var sum = 0;
    for(var y = 1; y <= 5000; y += 2){
        sum = sum + y;
    }
    return sum;
}

// 4
function itArray(arr) {
    var sum = 0;
    for(var x = 0; x < arr.length; x++) {
        sum += arr[x];
    }
    return sum;
}

// 5
function maxArray(arr) {
    max = arr[0];
    for(var y = 0; y<arr.length; y++){
        if(max < arr[y]) {
            max = arr[y]
        }
    }
    return max;
}
// 6
function average(arr) {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum/arr.length;
    return avg;
}

// 7
function oddArray(arr) {
    var newArray = [];
    for(var i = 1; i < 50; i += 2){
        newArray.push(i);
    }
    return newArray;
}

// 8
function greaterThanY(arr, y){
    var track = 0;
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] < y ) {
            track++;
        }
    }
    return track;
}


// 9
function squares(arr) {
    for(x = 0; x<arr.length; x++){
       arr[x] = arr[x] * arr[x]; 
    }
    return arr;
}

// 10
function negReplace(arr) {
    for(var x = 0; x<arr.length; x++) {
        if(arr[x] < 0) {
            arr[x] = 0;
        }
    }
    return arr;
}

// 11
function maxMinAvg(arr) {
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for(var x = 0; x < arr.length; x++){
        sum += arr[x];
        if(arr[x] > max) {
            max = arr[x];
        }
        else if(arr[x] < min){
            min = arr[x];  
        }
    }
    return [max, min, sum/arr.length];
}

// 12
function swapArr(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}

// 13
function numString(arr) {
    for(x=0; x<arr.length; x++) {
        if(arr[x] < 0){
            arr[x] = "Dojo";
        }
    }
    return arr;
}