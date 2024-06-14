function getMilk(monye) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buyMilk you can by " + Math.floor(monye / 1.5) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return monye % 1.5;
}

var change = getMilk(prompt("enter the monye"));
console.log(change);



function getMilk(monye, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buyMilk you can by " + calcNottles(monye, costPerBottle) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(monye, costPerBottle)
}

function calcNottles(staringMoney, costBottle) {
    var numberOfBottles = Math.floor(staringMoney / costBottle);
    return numberOfBottles;
}


function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}
console.log("Hello master, here is your " +getMilk(4,1.5)+" change.");
