// Masai School had hosted a Football tournament. You got hold of a profound description of the final
//  match's process. On the whole, there are n lines in that description each of which described one 
//  goal. Every goal was marked with the name of the team that had scored it. Write a program to find
//   the name of the team that won the finals. It is guaranteed that the match did not end in a tie.

// Print the name of the winning team. We remind you that in football the team that scores more goals is 
// considered the winner.

// sample input:
// 5
// A
// ABA
// ABA
// A
// A
// sample output:
// A


var N = 5;
var arr = ['ABA'];
var obj = {};
for(var i=0; i<arr.length; i++){
   if(obj[arr[i]]==undefined){
       obj[arr[i]]=1
   }else{
       obj[arr[i]]++;
   }
}
var max = -Infinity;
for(var k in obj){
   if(max<obj[k]){
       max = obj[k];
       var x = k
   }
}
console.log(x);