/*
Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
*/
function multiply(){
    num1= document.getElementById('number1').value
    num2=document.getElementById('number2').value
    document.getElementById('result').innerHTML=num1*num2;
}
function divide(){
    num1= document.getElementById('number1').value
    num2=document.getElementById('number2').value
    document.getElementById('result').innerHTML=num1/num2;
}