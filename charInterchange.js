
function charChange(){
    var str = document.getElementById('inputStr').value;

    var first = str.charAt(0); 
   var last = str.charAt(str.length-1);
    var newStr=str.split(first).join("")
    newStr=newStr.split(last).join("")
    newStr = last+newStr+first;
    alert(newStr);
}