// You are given three integers: X, K, Y.
// You have to print the sum of first K multiples of X, on a condition that it should be divisible by Y. 

// Output Explanation :

// For the sample input, X = 3, K = 10 and Y = 5

// First K multiples of X are (First 10 multiples of 3):- 3 6 9 12 15 18 21 24 27 30

// Numbers from above which are visible by Y (i.e 5) are:-  15, 30.

// Sum of numbers divisible by 15 and 30 is 15+30 = 45.

var x = 4, k = 15, y = 6;
var sum = 0;
var mul = 0;
for(var i = 1; i <= k; i++)
{
    mul = i * x;
    if(mul % y == 0)
    {
        sum = sum + mul;
       
    }
}
console.log("Total value",sum);



