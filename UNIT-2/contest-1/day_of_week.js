// Given the current day, and a number N, find what day will it be after N days.
// Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday",
// "Saturday","Sunday"}
// Input
// The first line of the input contains the name of the current day.
// The second line of the input contains N.
// Constraints
// 1 <= N <= 1000
// Output
// Print the name of the day, which will occur after N days.

var day = 'Wednesday';
var N = 8;
var D = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for(var i=0; i<7;i++){
    if(D[i]==day){
       console.log(D[(i+N)%7])
    }
}