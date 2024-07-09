//Write a function called same, which accepts two arrays. 
//The function should return true if every value in the array has it's corresponding value squared in the second array. 
//The frequency of values must be the same.
function same(arr1, arr2){
    // check if length is not equal
    if(arr1.length !== arr2.length){
        return false;
    }
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // counts of each value in arr1
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // counts of each value in arr2
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    // iterates over each key 
    for(let key in frequencyCounter1){
        // checks if the square of that key (key ** 2) exists in frequencyCounter2.
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
      //  If the squared value exists, then checks if the count of the squared value in frequencyCounter2 matches the count of the original value in frequencyCounter1
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
