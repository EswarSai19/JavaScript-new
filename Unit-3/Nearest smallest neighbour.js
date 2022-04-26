
let arr = [39, 27, 11, 4, 24, 32, 32, 1]
let stkIndex = []
let N = arr.length;
let stk = [], ans = []
for(let i=0; i<N; i++){
    while(stk.length>0 && stk[stk.length-1] >=arr[i]){
        stk.pop()
        stkIndex.pop()
    }

    if(stk.length === 0){
        ans[i] = -1
        stkIndex.push(-1)
    }
    else if(stk.length[stk.length-1] <arr[i]){
        ans[i] = stk[stk.length-1]
        stkIndex.push(i)
    }
    stk.push(arr[i])
    stkIndex.push(i)
}
console.log(stkIndex);
console.log(stk);
console.log(ans);