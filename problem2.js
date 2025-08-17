// Problem 2: Count Vowels in a String
function count(string){
    let vowels = "aeiouAEIOU";
    let count =0;
    for(let i =0; i < string.length; i++){
        for(let j =0; j < vowels.length; j++){
            if(string[i] === vowels[j]){
                count++;
            }
        }
    }
    return count;
}
console.log(count("programming"))