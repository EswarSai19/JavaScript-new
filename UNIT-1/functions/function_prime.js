// Create a function to check if a number is Prime or Not
//  Use the above function to print the Primes from 2 to a given limit
// Use the same function to print Non-Primes from 2 to a given limit

function checkPrime(num)
{
    var count = 0;
    for(var i=0; i<=num; i++)
    {
      if(num%i == 0)
      {
        count++;
      }
    }
    if(count <=2)
    {
        console.log(num,"Prime Number");
    }
    else{
        console.log(num,"Not Prime Number");
    }

}


for(var i=1; i<=100; i++)
{
    checkPrime(i)
}