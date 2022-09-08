/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/



function cToF(){
    temp = document.getElementById('temp').value
    var f;
    f = (9*temp)/5 + 32 ;
    document.getElementById('inputTemp').innerHTML = temp+"°C is ";
document.getElementById('result').innerHTML = f+"°F";
}
function fToC(){
    var temp = document.getElementById('temp').value
    var c;
    c = 5/9*(temp-32);
    document.getElementById('inputTemp').innerHTML = temp+"°F is ";
document.getElementById('result').innerHTML = c+"°C";
}