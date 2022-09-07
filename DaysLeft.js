/*
Write a JavaScript program to calculate days left until next Christmas.
Or difference between any 2 days can be calculated from the same program by minor changes.
Approach: Use Datetime()
*/
var today = new Date();
var xmas = new Date(today.getFullYear(),11,25)
if(today.getMonth()==11 && today.getDate()>25){
    xmas.setFullYear(xmas.getFullYear()+1)
}

var one_day = 24*60*60*1000

var days_left = Math.ceil((xmas.getTime()-today.getTime())/(one_day));

console.log(days_left+" days leftuntil Christmas...")