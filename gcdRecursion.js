// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers 
//using recursion. 

const gcdRecursive = function (a, b) {

    if (!b) {
        return a;
    } else {
        return gcdRecursive(b, a % b);
    }
}

console.log(gcdRecursive(12, 15));

