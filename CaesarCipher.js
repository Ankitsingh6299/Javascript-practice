function Caesar(){
    var str = document.getElementById('inputStr').value;
    var s=  str.split('')
    for(let i=0;i<s.length;i++){
        switch(s[i]){
            case ' ':
                break;
            case 'z':
                s[i]='a';
                break;
            case 'Z':
                s[i]='A';
            default:
                s[i] = String.fromCharCode(1+s[i].charCodeAt(0));
        }

        switch(s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
            s[i] = s[i].toUpperCase();
        }
     }
        document.getElementById('result').innerHTML =  s.join('');
    
    }
    
