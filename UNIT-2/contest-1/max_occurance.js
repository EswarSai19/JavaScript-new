// Given an array A of N integers. Your task is to print that integer which presents maximum 
// number of times in the given array.
// If there are two elements present the maximum number of times, print the one which comes 
// first in the array.
// Input
// Input Format
// First line contains N
// The second line contains N integers separated by spaces.
// Constraints
// N < 100
// The array contains integers only
// Output
// Print one integer, the one which is present the maximum number of times.

var arr = [2,1,2,2,2,1,1,1]
function maximumOccuringElement(){

}
function keyValueOrder(){
  var obj = [];
  for(var i=0; i<arr.length; i++){
      if(obj[i]==undefined){
          obj.push([arr[i]]);
      }else{
        // obj[arr[i]]+=1;
        continue;
      }
  }
  console.log(obj);
}
keyValueOrder();