
var year = 2020;
var mon = "feb";
var date = 28;


var m_code,y_code,x,y,z,a,b;

if(((date>29) && (mon=="feb")) || (date>31) || (year<1600))
{
  console.log("Enter valid input");
  
}
else
{



var month = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
var month_code = [0,3,3,6,1,4,6,2,5,0,3,5];

for(var i=0; i<month.length; i++)
{
  if(mon == month[i])
  {
    m_code = month_code[i];
  }
}


if((year>=1600)&&(year<=1699))
{
  y_code = 6;
}
if((year>=1700)&&(year<=1799))
{
  y_code = 4;
}
if((year>=1800)&&(year<=1899))
{
  y_code = 2;
}
if((year>=1900)&&(year<=1999))
{
  y_code = 0;
}
if((year>=2000)&&(year<=2099))
{
  y_code = 6;
}
if((year>=3000)&&(year<=3099))
{
  y_code = 4;
}
if((year>=4000)&&(year<=4099))
{
  y_code = 2;
}

x = year % 100;
y = (Math.floor(x/4)) % 7;
z = x % 7;
b = date % 7;

a = ((y + z + b + y_code + m_code) % 7);



if(year%4==0 && year > 400)
{
  if((mon == "jan")||(mon == "feb"))
  {
    a = a -1; 
  }
}



switch(a)
{
  case 0 : console.log(date,"-",mon,"-",year,"is a","=>","Sunday");
           break;
  case 1 : console.log(date,"-",mon,"-",year,"is a","=>","Monday");
           break;
  case 2 : console.log(date,"-",mon,"-",year,"is a","=>","Tuesday");
           break; 
  case 3 : console.log(date,"-",mon,"-",year,"is a","=>","Wednesday");
           break;
  case 4 : console.log(date,"-",mon,"-",year,"is a","=>","Thursday");
           break;
  case 5 : console.log(date,"-",mon,"-",year,"is a","=>","Friday");
           break;
  case 6 : console.log(date,"-",mon,"-",year,"is a","=>","Saturday");
           break;
  default : console.log(date,"-",mon,"-",year,"is a","=>","Saturday");
            break;                                   
} 

// console.log(date,"-",mon,"-",year,"is a\n")
}
