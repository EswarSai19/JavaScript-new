// Write code to find the absolute difference of two numbers
// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14

function difference(a,b)
{
   return a-b;
}
function absoluteValue(a)
{
    if(a<0)
    {
        return -1*a;
    }
}

var y = difference(4,18);
var x = absoluteValue(y);
console.log(x);