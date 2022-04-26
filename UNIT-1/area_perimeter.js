// You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.

// You need print if area of rectangle 1 is greater than rectangle 2.

// You need print if perimeter of rectangle 1 is greater than rectangle 2.

var L1 = 8, L2 = 9, B1 = 10, B2 = 7;
var area1 = L1*B1;
var area2 = L2*B2;
var perimeter1 = 2*(L1+B1);
var perimeter2 = 2*(L2+B2);
if(area1>area2)
{
    console.log(area1," -Area of rectangle-1 is greater");
}
else
{
    console.log(area2,"-Area of rectangle-2 is greater");
}

if(perimeter1>perimeter2)
{
    console.log(perimeter1," -Perimeter of rectangle-1 is greater");
}
else
{
    console.log(perimeter2,"-Perimeter of rectangle-2 is greater");
}
