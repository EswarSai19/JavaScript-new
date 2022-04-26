

var matrix = [
             [3,2,5,3,2],
             [5,2,5,5,3],
             [2,2,2,4,5],
             [3,3,4,7,3],
             [5,2,5,3,2]
];
var n=5,m=5, s=10,count=0;
for(var i=0; i<n; i++){
    for(var j=0; j<m; j++){
        if(j<matrix[j].length-2){
            var temp = matrix[i][j]+matrix[i][j+1]+matrix[i][j+2];
            if(temp == s){
                count++;
            }
        }
        if(i<matrix.length-2){
            var temp = matrix[i][j]+matrix[i+1][j]+matrix[i+2][j];
            if(temp == s){
                count++;
            }
        }
        if(i<matrix.length-2 && j<matrix[j].length-2){
            var temp = matrix[i+2][j]+matrix[i+1][j+1]+matrix[i][j+2];
            if(temp == s){
                count++;
            }
        }
        if(i<matrix.length-2 && j<matrix.length-2){
            var temp = matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2];
            if(temp == s){
                count++;
            }
        }         
    }   
}
console.log(count);