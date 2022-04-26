// Starting with a 1-indexed array of zeros and a list of operations, 
// for each operation add a value to each the array element between two
//  given indices, inclusive. Once all operations have been performed, 
//  return the maximum value in the array.
// Example
// Queries are interpreted as follows:
//     a b k
//     1 5 3
//     4 8 7
//     6 9 1
// Add the values of  between the indices  and  inclusive:
// index->	 1 2 3  4  5 6 7 8 9 10
// 	[0,0,0, 0, 0,0,0,0,0, 0]
// 	[3,3,3, 3, 3,0,0,0,0, 0]
// 	[3,3,3,10,10,7,7,7,0, 0]
// 	[3,3,3,10,10,8,8,8,1, 0]
// The largest value is  after all operations are performed.
// Function Description
// Complete the function arrayManipulation in the editor below.
// arrayManipulation has the following parameters:
// int n - the number of elements in the array
// int queries[q][3] - a two dimensional array of queries where each queries[i] 
// contains three integers, a, b, and k.

var n = 10;
var a = [1,4,6];
var b = [5,8,9];
var c = [3,7,1];
var obj = {};
for(var i=0; i<n; i++){
    if(obj[i]==undefined){
        obj[0]=0;
        console.log(obj);
    }
}
// console.log(obj);
