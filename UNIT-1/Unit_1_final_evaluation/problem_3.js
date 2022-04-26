// You are given an array whose size is stored in a variable with the nameN
// The array is stored in a variable with the namearr
// The value stored inNis always divisible by 3
// You have to solve the equation -4*c1 + 5*c2 + 6*c3, such that after dividing the array into 
// 3 equal parts
// c1 -> sum of the first half
// c2 -> sum of the second half
// c3 -> sum of the third half
// For example, consider the value stored inN = 6, andarr = [1 2 3 4 5 6]
// Therefore, the first half of the array is -1 2, the second half of the array is3 4, and the 
// third half of the array is5 6
// Therefore,
// c1 = 1 + 2 = 3
// c2 = 3 + 4 = 7
// c3 = 5 + 6 = 11
// Now, the equation4*(3) + 5*(7) + 6*(11) = 113, which is the required output.

var arr = [1,2,3,4,5,6], N =6;
var c1=0, c2=0, c3=0;
var first_end = N/3, second_end = 2*(N/3),  third_end = N;
for(var i=0; i<first_end; i++){
   c1 = c1 + arr[i];
}
for(var j=first_end; j<second_end; j++){
    c2 = c2 + arr[j];
 }
 for(var k=second_end; k<third_end; k++){
    c3 = c3 + arr[k];
 }
 var eq = (c1*4) + (c2*5) + (c3*6);
 console.log(eq);
