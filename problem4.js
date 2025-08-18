// Problem 4: Find the Maximum Number
function findMax(arr){
    let maximum = arr[0];
    for (let i =1; i < arr.length; i++){
        if (arr[i] > maximum){
            maximum = arr[i];
        }
    }
    return maximum;
}
console.log(findMax([5,1,9,3]))