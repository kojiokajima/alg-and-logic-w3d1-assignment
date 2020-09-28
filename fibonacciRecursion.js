// Write a JavaScript program to get the first n Fibonacci numbers using recursion
// the fibonacci sequence involes adding the past two numbers in a list to
//create the next one. 

// https://www.mathsisfun.com/numbers/fibonacci-sequence.html#:~:text=The%20Fibonacci%20Sequence%20is%20the,21%2C%2034%2C%20...

const fibonacciRecursive = function(n) {
    let first = 0;
    let second = 1;

    if (n === 1) {
        // console.log(first);
        return first;
    } else if (n === 2){
        // console.log(second);
        return second;
    } else {
        console.log(fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2));
        // retrun fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }

    let fibArray = [];
    if (n === 1) {
        fibArray.push(0);
        return fibArray;
    } else if (n === 2) {
        fibArray.push(1);
        return fibArray;
    } else {
        return fibArray.push(fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2));
    }

}

fibonacciRecursive(4);



// 0 1 1 2 3 5 8 13 21 34 55 89 144 233...

// n = 3 => 0 1 1
// n = 6 => 0 1 1 2 3 5 