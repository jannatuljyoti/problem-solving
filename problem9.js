// Problem 9: Find the Factorial of a Number
function factorial(num){
    let result = 1;
    for (let i = 1; i <= num; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(5));