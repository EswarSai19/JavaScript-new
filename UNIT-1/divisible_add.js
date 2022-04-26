
// You are given two numbers stored in the variable with the following names,
// num, K

// You have to print the sum of all the numbers in the range[1,num], such that for each number, the operation
// i % K == 0, whereirefers to the numbers present in that range

var num = 29, k= 3;
var sum = 0;
for(var i = 1; i<=num; i++)
{
    if(i % k == 0)
    {
        sum = sum + i;
        console.log(i);
    }
}
console.log("Total =",sum);
