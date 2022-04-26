// You are given a string, stored in a variablestr, and the length of the string is stored 
// in the variableN
// You have to replace all the vowels that are present in the string with "*" and print the new 
// string.
// For example, consider the value stored inN = 6, andstr = nature
// out of the 5 vowels(a,e,i,o,u)
// the word "nature" contains a,u,e
// hence the output is "n*t*r*"
// Note : The string contains only lower case English Alphabets

var str = "ramraj";
var bag = "";
for(var i=0; i<str.length; i++){
    var char = str[i];
    if(char == 'a'||char == 'e'||char == 'i'||char == 'o'||char == 'u'){
        bag = bag + "*";
    }else{
        bag = bag + str[i];
    }
}
console.log(bag);