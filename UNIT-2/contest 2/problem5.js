// Masai Quiz Competition Ended
// Description
// Masai School is organizing a quiz competition, but it wants only those people to participate, 
// who are willing. Therefore, it is not mandatory to participate for everyone
// Also, students can form groups of any sizes to participate in the competition.
// All the students are standing in a queue, and are holding cards with values on them either 0 or 1. 
// 1 indicates a student is participating, while 0 indicates that a student is not participating. All
//  the students that are standing together, and are participating, that means holding a card with 
//  a value 1, are in the same team.
// You have to find the number of groups participating in the quiz

// Note: It is possible that all the students fall in one single group

// Input
// The first line of the input containsT, the number of test cases
// The first line of each test case, containsN, the total number of students
// Next line containsNspace separated integers having values either 0 or 1
// Constraints
// 1 <=T<= 10
// 1 <=N<= 10^6
// 0 <=A[i]<= 1

// Output
// For each test case, print a single integer denoting a single value, the number of groups 
// participating, on a new line

// Sample Input 1 

// 2
// 5
// 1 1 0 1 1
// 4
// 1 1 1 1
// Sample Output 1

// 2
// 1

// Hint
// In the first sample test case, the student standing at index 0 and the student standing at index 1, 
// form a group, while the student standing at index 3 and index 4, form a group. Therefore, the total 
// number of groups participating is 2 Similarly, in the second test case, all the students are
//  participating, therefore, they form a single group. Therefore, the output is 1.


var N = 5;
var arr = [1,1,0,1,1,0,1,0,1];
var A = [];
var count = 0;
for(var i=0; i<arr.length; i++){
    if(A[A.length-1]!==arr[i]){
        A.push(arr[i]);
    }
}
for(var j=0; j<arr.length; j++){
    if(A[j]==1){
        count++;
    }
}
console.log(count);