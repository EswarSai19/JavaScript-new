// Units Consumed Ended
// Electricity consumption is measured via slab rates for a particular wattage capacity, 
// which is as follows test.png
// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.
// You are given total amount of bill, N , you need to find total unit consumed.
// Input
// Sample Input 1 
// 930
// Sample Output 1
// 170
// Hint
// Fixed Charge :- 80
// Charges for first 50 units :- 50 * 3 = 150
// Charges of next 100 units :- 100 * 5 = 500
// Charges of next 20 units :- 20 * 10 = 200
// Total Charges => 80 + 150 + 500 + 200 = 930.

var bill = 930;
var fixed_charges = 80;
bill = bill - fixed_charges;
var units;

if(bill<=150)
{
   units = bill / 3;
}
if(bill>150)
 {
     units = 50;
     bill = bill - 150;
 }
 if(bill<=500)
 {
     units = units + (bill/5);
 }
 if(bill>500)
 {
     units = units + 100;
     bill = bill - 500;
 }
 if(bill>0)
 {
     units = units + (bill/10);
 }

 console.log(units);
 

// 2nd way







