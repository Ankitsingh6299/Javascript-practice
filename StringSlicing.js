/*
Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then return the original string. 
*/

function StringCheck(){

    var str1 = document.getElementById('inputText').value;

    if(str1 === undefined || str1 === null || str1.substring(0,2)==="Py" || str1==""){
        document.getElementById('result').innerHTML = str1;
    }
    else{
        str1 = "Py" + str1;
        document.getElementById('result').innerHTML = str1;
    }
}