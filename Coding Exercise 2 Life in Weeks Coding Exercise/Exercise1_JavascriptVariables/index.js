/* My Solution */
function lifeInWeeks(age) {

    /************Don't change the code above************/

    //Write your code here.

    var year = 90 * 365;
    var mouth = 12 * 90;
    var weeks = 52 * 90;
    console.log("You have " + (year - age * 365) + " days, " + (weeks - age * 52) + " weeks, and " + (mouth - age * 12) + " months left.");
    /*************Don't change the code below**********/
}

lifeInWeeks(56);

/* Angela Solution */

function lifeInWeeks(age) {

    var yearsRemaining = 90 - age; // 78
    var days = yearsRemaining * 365; //
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    
    console. log ("You have " + days + " days, " + weeks + " weeks, and " +
    months + " months left.");
    
    }
    
lifeInWeeks(56);