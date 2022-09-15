function countVowel(){
    var str = document.getElementById('inputStr').value;
    var count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count = count+1;
        }
    }
    document.getElementById('result').innerHTML = count;
}