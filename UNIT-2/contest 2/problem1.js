// Alan Turing, the mathematician, is trying to break the encrypted messages of the German Troops,
//  generated by their encryption device "Enigma". To find the distribution of characters, he needs 
//  to find out how many times a particular character appears in a string. But, to feed the data into 
//  his computer, "Christopher", he needs the data in lexicographic order, that is, in alphabetical 
//  order. Since, he is busy making "Christopher" better, he asks you for help. Help Alan find the 
//  frequency of characters in the encrypted strings in alphabetical order. The string contains only 
//  lower case alphabets.

// For each unique character in the string, print the character along with its frequency in the encrypted string, 
// separated by '-' , on a new line.

// methode-1

// var letters = "abcdefghijklmnopqrstuvwxyz";
// var str = "eswarsai"
// var obj = {};
// for(var i=0; i<letters.length; i++){
//     obj[letters[i]]=0;
// }
// for(var j=0; j<str.length; j++){
//   obj[str[j]]++;
// }
// for(var k in obj){
//     if(obj[k]>0){
//         console.log(k+"-"+obj[k]);
//     }
    
// }

// methode-2

var str = "eswarsai"
str = str.split("").sort().join("");
var obj = {};
for(var i=0; i<str.length; i++){
   if(obj[str[i]]==undefined){
    obj[str[i]]=1
   }else{
    obj[str[i]]++;
   }
}
console.log(obj);