// You are provided 3 integers: left, right and k. 
// Your task is to write a program that finds out the count of all such numbers between lefts and right 
// (both inclusive)  which are divided by k.

var left = 5, right = 38, k = 4;
var sum = 0;
var count = 0;
for(left; left <= right; left++)
{
   if(left % k == 0)
   {
       sum = sum + left;
       console.log(left);
       count++;
   }
}
console.log("Total of divisible numbers is ",sum);
console.log("Quantity of divisible numbers",count);
