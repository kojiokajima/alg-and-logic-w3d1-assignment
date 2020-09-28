// Write a JavaScript program to compute the sum of an array of integers 
// using recursion

let testArray = [4, 7, 9, 3, 1, 0, 5];

const sumOfArrayRecursive = function (arr) {

    if (arr.length === 0) {
        return 0;
    } else {
        let item = arr.pop();
        // console.log(item);
        return item + sumOfArrayRecursive(arr);
    }
}

console.log(sumOfArrayRecursive(testArray));

// sumOfArrayRecursive(testArray);

// arr.reduce()