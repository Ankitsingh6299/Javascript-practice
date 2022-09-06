/*
Write a JavaScript program to rotate the string 'ReactRocks' in 
right direction by periodically removing one letter from the end of the string and 
attaching it to the front.
*/
function animateString(id){
    var element = document.getElementById(id).value;
    var textNode = element.childNodes[0];
    var text=textNode.data;

    setInterval(function(){
        text=text[text.length-1]+text.substring(0,text.length-1);
        textNode.data=text
    },100)
}

function ReverseString(id){
    var element=document.getElementById(id).value;
    //var textNode = element.childNodes[0];
    //var text=textNode.data;
    var revString = "";
    for(let i=element.length-1;i>=0;i--)
    {
        revString = revString+element[i];
    }
   console.log(revString);
}