// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
//  Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr){
    let left=0;
    let right=arr.length-1;
    while(left < right)
    {
        let sum =arr[left]+arr[right];
if(sum ===0)
{
    let result = [arr[left], arr[right]];

  return result;
}
else if(sum > 0)
{   
    right--;
}
else{
    left++;
}
    }
   
}


let result = sumZero([-4, -3, -2, -1, 0, 1, 3, 5]);
console.log(result);