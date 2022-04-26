// You are given a number stored in a variable with the namenum

// Check if the number is a prime number or not

// If the value stored innum, is a prime number printYes, else printNo

// Note : A prime number is a number, that is divisible by only 1 and the number itself




var count = 0;
var num = 170141183460469231731687303715884105727;
for(var i = 1; i<=num;i++)
{
    console.log(i);
    if(num % i ==0)
    {
        count++;
    }
}
    if(count<=2)
    {
        console.log(num,"Prime number");
    }
    else if(count>2)
    {
        console.log(num,"Not Prime number");
    }
    