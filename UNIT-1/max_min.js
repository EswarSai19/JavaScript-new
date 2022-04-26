// Given an array,arrwhich hasNintegers.
// You need to print the smallest and largest element present in the array each on new lines.

var arr = [-2,0,9,-9,3,19];
var min = Infinity;
var max = -Infinity;
for(var i=0; i<arr.length; i++)
{
    if(min>arr[i])
    {
        min = arr[i];
    }
    if(max<arr[i])
    {
        max = arr[i];
    }
}

console.log(min);
console.log(max);