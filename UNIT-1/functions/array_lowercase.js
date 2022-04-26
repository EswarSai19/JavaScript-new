// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input
// ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output
// ["ma","sa","i","sch","ool"]

function lowerCase(str)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lower.toUpperCase();
    var bag = "";
     for(var i=0; i<str.length; i++)
     {
         for(var j=0; j<upper.length; j++)
         {
             if(str[i]==upper[j])
             {
                 bag = bag + lower[j]; 
             }
         }
     }
     return bag;
}
var arr2 = [];
arr2.push.bag;
console.log(arr2);


 function strToWord(arr)
 {
     
   for(var i=0; i<arr.length; i++)
   {
    lowerCase(arr[i]);
   }
   
 }
 strToWord(['MA','SA','I','SCH','OOL']);




// var lower = "abcdefghijklmnopqrstuvwxyz";
    
//     console.log(lower.toUpperCase());