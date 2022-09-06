/*
Write a JavaScript program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched".
*/
function generateNumber(){
    var randomNumber = Math.floor(Math.random()*11)
    return randomNumber;
}


function matchNumber(id){
    var userNumber = document.getElementById(id).value;
    console.log(userNumber);
    console.log(generateNumber());
    if(userNumber==generateNumber()){
        alert("Matched, Good Work")
    }
    else{
        alert("Not Matched, Better luck next time!!!")
    }
}
