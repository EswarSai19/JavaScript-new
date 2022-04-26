
//    recursion 

// let i=0
// function fact(n){
//     if(n == 1 || n==0){
//         return 1
//     }
//     console.log(n,i++)
   
//     return n * fact(n-1)
// }
// let ans = fact(4)
//     console.log(ans);


// print array

// let arr = [1,2,3,4,5]
// let sum = 0
// function disPrint(arr,i){
//     if(i == arr.length){
//         return
//     }
//     return sum +=(arr[i])+ disPrint(arr, i+1);
    
// }

// disPrint(arr,0)
// console.log("over");



// fibonacci

function fib(n){
    if(n ==1 || n==0){
        return n
    }
    x = fib(n-1) + fib(n-2)
    console.log("x",x);
    return x
}
let a = 3
let ans = fib(5)
console.log(ans);