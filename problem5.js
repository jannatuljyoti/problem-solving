// Problem 5: Remove Duplicates from an Array
function removeDup(arr){
    let unique =[];
    for (let i = 0; i < arr.length; i++){
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++){
            if(arr[i] === unique[j]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDup([1,2,2,3,4,4]));