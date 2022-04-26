// You are given a matrix of size N x M
// Print the spiral traversal of the matrix.
// Refer the image given below, for better understanding.
// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N and M, the number of rows and columns in the 
// given matrix.
// The next N lines contain M values each denoting the elements of the matrix.

var N = 4, M = 4;
var arr = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
];
var count = 0;
var top = 0;
var bag = "";
var bottom = N-1;
var left = 0;
var right = M-1;

for(;count< (N*M);){
    for(var i=top; i<=bottom; i++){
        bag = bag + arr[i][top]+" ";
        count++;
    }
    left++;
    for(var j=left; j<=right; j++){
        bag = bag + arr[bottom][j]+" ";
        count++;
    }
    bottom--;
    for(var k=bottom; k>=top; k--){
        bag = bag + arr[k][right]+" ";
        count++;
    }
    right--;
    for(var l=right; l>=left; l--){
        bag = bag + arr[top][l]+ " ";
        count++;
    }
    top++;
}
console.log(bag);

