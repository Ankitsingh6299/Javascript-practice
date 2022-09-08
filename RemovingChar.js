/*
Write a JavaScript program to remove a character at the specified position 
of a given string and return the new string.
*/

function charRemove(){
    str = document.getElementById('enteredStr').value;
    pos = document.getElementById("charPos").value;
    ans = str.charAt(pos-1);
    console.log(ans);
    console.log(str.split(ans).join(""))
    
    document.getElementById('result').innerHTML = str.split(ans).join("")
}