// Noddy has an exam in which each question has a difficulty level in the form of an Integer. Now, Noddy can only solve the problems 
// that have difficulty level less than or equal to X. Now the rules are-
// The score of the student is equal to the maximum number of answers he/she has attempted without skipping a question.
// The student is allowed to skip just "one" question that will not be counted in the continuity of the questions.
// Note- Assume the student knows the solution to the problem he/she attempts and always starts the paper from the first question.
// Given the number of Questions, N, the maximum difficulty level of the problem Noddy can solve, X, and the difficulty level of each
//  question in the form of an array
// Determine the maximum score that Noddy can score?

// Output
// Print the maximum score that Noddy can score
// Sample Input 
// 7 6
// 4 3 7 6 7 2 2
// Sample Output 
// 3
// Hint
// Sample 1 Explanation
// In this example, maximum difficulty = 6, Noddy solves question 0 and 1, but skips the question 2 as A[2]>6. Monk then solves the question 3 ,
//  but stops at 4 because A[4]>6 and question 2 was already skipped. As 3 questions (0,1 and 3) were solved and 2 questions (2 and 4) 
//  have been skipped, therefore we print "3".

// methode-1
var N =7, X=6;
var arr = [4,3,7,6,7,2,2];
var count = 0, skip_count=0;
// for(var i=0; i<arr.length; i++){
//    if(arr[i]<=X && skip_count<2){
//        count++;
//    }else if(skip_count<1){
//        skip_count++;
//        continue;
//    }else{
//        break;
//    }
// }
// console.log(count);

// methode-2

for(var i=0; i<arr.length; i++){
    if(arr[i]<=X){
        count++;
    }else if(skip_count==1){
       break;
    }else{
        skip_count++;
    }
}
console.log(count);
