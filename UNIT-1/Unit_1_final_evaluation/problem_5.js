// You are given an array of strings, whose size is stored in a variable with the nameN

// The string array, is stored in a variable with the namearr
// You have to find how many of the strings stored in the array arr, areweak, 
// and how many of them arestrong
// A string is considered as strong if it contains at least one of the following 
// characters in it@,$,#,*
// Consider the example, in which the value stored inN = 4, and the array,
// arr = ["test123", "new@t", "mon*y", "nrupul"]
// The first string "test123", does not contain any of the required characters,
//  hence the string is weak
// The second string "new@t", contains the character `@`, hence the string is strong
// The third string "mon*y", contains the character `*`, hence the string is strong
// The fourth string "nrupul", does not contain any of the required characters, 
// hence the string is weak
// Therefore, the required output becomesweak strong strong weak

var arr = ["test123", "new@t", "mon*y", "nrupul",'e$war','s#i'];
var presence = false;
var bag = "";
for(var i=0; i<arr.length; i++){
    var char = arr[i];
    for(var j=0; j<char.length; j++){
        if(char[j]=='@'||char[j] == '#'||char[j]=='$'||char[j]=='*'){
           presence = true;
        }
    }
    if(presence == true){
        bag = bag + "strong" + " ";
        presence = false;
    }else{
        bag = bag + "weak" + " ";
        presence = false;
    }
}
console.log(bag);