// You are given two numbers, stored in a variable with the nameA and B. Find out the 
// sum of all prime numbers in the range of [A to B],
//  including the value stored inA and B

var A = 5, B = 18;
var sum = 0;
for(var i=A; i<=B; i++)
{ var count = 0;
    for(var j=1; j<=i; j++){
        if(i % j == 0){
            count++;
        }
    }    
        if(count ==2){
            sum = sum + i;
        }
    
}
console.log(sum);