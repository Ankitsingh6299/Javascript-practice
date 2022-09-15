function firstCapital(){
    var str = document.getElementById('inputStr').value;
    var s = str.split(" ")
    for(let i=0;i<s.length;i++){
        s[i] = s[i][0].toUpperCase() + s[i].substr(1);
    }
    document.getElementById('result').innerHTML = s.join(" ");
}
