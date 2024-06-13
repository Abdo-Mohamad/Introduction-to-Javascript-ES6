let askName = prompt("What is your name?");

let allName = [2, 3];
allName.push(askName);
for (let index = 0; index < allName.length; index++) {
    const element = allName[index];
    console.log(element);
}

/* Keword name     value  */
var myName = "name";

alert(myName);

var yourName = prompt("What is your name?");
alert("My name is " + myName + ", welcome to my couse " + yourName + ": ");

var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert("Your level is currently: " + gameLevel);