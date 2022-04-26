arr = [45,32,30,28,32,45];
var arr2 = ['rancho', 'chatur', 'raju', 'farhan', 'virus', 'joy']
for(var i=0; i<arr.length; i++){
    for(j=0; j<arr.length-i-1; j++){
        if(arr[j]<arr[j+1]){
            swap(arr,j,j+1);
            swap(arr2,j,j+1)
        }
    }
}

function swap(arr,i,j){
    var te = arr[i];
    arr[i] = arr[j];
    arr[j] = te;
}
console.log(arr);
console.log(arr2);