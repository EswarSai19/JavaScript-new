var N = 5; 
var k = 6;
var arr = [12,18,17,65,46];
var arr2 = [];
for(var i=0; i<N; i++){
    var obj = {};
    obj.div = (arr[i]%k);
    obj.real = arr[i];
    arr2.push(obj);
}
var bag = "";
var output = arr.map(function(el){
    return el%6;
});
output.sort((a,b)=>a-b);
console.log(arr2[1].div,arr2[1].real)
for(var i=0; i<arr.length; i++){
    for(var k in arr2[i]){
        if(arr2[i][k] == output[i]){
            bag = bag + arr2[i].real + " ";
    }
   
    }
}
console.log(bag);
// var op = arr2.map(function(el){
       
//     if(el.output==el.div.value){
//         console.log(el.output==el.div.value)
//        arr3.push(el.real)
//     }
// });
// // console.log(op.join(" "));
// console.log(arr3)