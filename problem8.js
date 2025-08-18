// Problem 8: Capitalize First Letter of Each Word
function capitalize(string){
    let words = [];
    let word = "";

    for (let i = 0; i <= string.length; i++){
        if(string[i] === " " || i=== string.length){
            if(word.length > 0){
                let capitalized = word[0].toUpperCase() + word.slice(1);
                words.push(capitalized);
                word = "";
            }
        }else{
            word += string[i];
        }
    }

    let result = "";
    for (let i =0; i < words.length; i++){
        result += words[i];
        if(i < words.length - 1){
            result += " ";
        }
    }
    return result;
}
console.log(capitalize("hello world"))