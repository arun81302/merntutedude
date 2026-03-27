
const arr = [12, 5, 8, 21, 7, 10, 3];

// 1. Find maximum number (Arrow Function)
const findMax = (array) => {
    let max = array[0];
    for (let num of array) {
        if (num > max) {
            max = num;
        }
    }
    return max;
};

// 2. Calculate sum (Anonymous Function)
const findSum = function(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
};

// 3. Count odd numbers (Regular Function)
function countOdd(array) {
    let count = 0;
    for (let num of array) {
        if (num % 2 !== 0) {
            count++;
        }
    }
    return count;
}

console.log("Array:", arr);
console.log("Maximum Number:", findMax(arr));
console.log("Sum of Elements:", findSum(arr));
console.log("Count of Odd Numbers:", countOdd(arr));