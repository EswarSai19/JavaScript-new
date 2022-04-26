
var arr = [2,7,8,11,15]
var B = 9;
var left = 0;
var right = arr.length-1;

    while(left<right){
        var sum = arr[left]+ arr[right];
        if(sum == B){
            console.log(left+" "+right);
            break;
        }else if(sum>B){
            right--;
        }else{
            left++;
        }
     }
