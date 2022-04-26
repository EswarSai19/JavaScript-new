var N = 10;
var arr = [1,2,4,3,5,7,6,8,9,10];

var ans = [];
var current = -Infinity;
for(var i=0; i<N; i++){
    if(current<arr[i]){
        
        current = arr[i];
        ans.push(current);
    }
}
console.log(ans);