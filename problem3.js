// Problem 3: Check for Palindrome
function isPalindrome(string){
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    return string === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));