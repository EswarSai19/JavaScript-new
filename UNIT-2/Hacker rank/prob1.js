

var input = ['abcde','sdaklfj','sdaklfj','sdaklfj','asdjf','asdjf','asdjf','asdjf','na','na','na','basdn','basdn'];
var quiries = ['abcde','sdaklfj','asdjf','na','basdn'];
var output = {};
// console.log(output[input[0]]);
for(var i=0; i<input.length; i++){
  if(output[input[i]]==undefined){
      output[input[i]]=1;
  }else{
      output[input[i]]+=1;
  }
}
for(var j=0; j<quiries.length; j++){
    for(var k in output){
       if(quiries[j]==k){
           console.log(output[k]);
       }
    }
}
