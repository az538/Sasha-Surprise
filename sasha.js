let myVar = 0;
var audio = new Audio('partyblower.mp3');
function myFunction(){
    if(myVar === 0){
        document.getElementById("cheeseBurger").innerHTML = "Happy birthday!";
        myVar++
        audio.play();
    }
    else{
        document.getElementById("cheeseBurger").innerHTML = "С днем ​​рождения!";
        myVar = myVar - 1
        audio.play();
    }
    
}
