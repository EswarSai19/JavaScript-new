
var matrix = [
               ['s','a','f','e','r']
                ['a','m','j','a','d']
                ['b','a','b','o','l']
                ['a','a','r','o','n']
                ['s','o','n','g','s']
                
];
var n=5,m=5,count=0;
for(var i=0; i<n; i++){
    for(var j=0; j<m; j++){
        if(j<matrix[j].length-1){
            var temp =""+ matrix[i][j]+matrix[i][j+1]+matrix[i][j+2];
            if(temp == "saba"){
                count++;
            }
        }
        if(i<matrix.length-1){
            var temp = ""+matrix[i][j]+matrix[i+1][j]+matrix[i+2][j];
            if(temp == "saba"){
                count++;
            }
        }
        if(i<matrix.length-1 && j<matrix[j].length-1){
            var temp =""+ matrix[i+2][j]+matrix[i+1][j+1]+matrix[i][j+2];
            if(temp == "saba"){
                count++;
            }
        }
        if(i<matrix.length-1 && j<matrix.length-1){
            var temp = ""+matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2];
            if(temp == "saba"){
                count++;
            }
        }         
    }   
}
console.log(count)