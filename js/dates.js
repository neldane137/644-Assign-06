/*eslint-env browser*/

//STEP 1 
function stepOne() {
    "use strict";
    var month, year, numberDays;
    month = window.prompt("Enter a number from 1 to 12, each number represents a month");
    year = window.prompt("Enter a year");
    numberDays = new Date(year, month, 0).getDate();
    window.console.log("There are " + numberDays + " days in the month of " + month + " " + year);

}
stepOne();


/*
//STEP 2 - get month
function stepTwo() {
    "use strict";
    var month, userDate, d, x;
    userDate = window.prompt("Enter a date in the MM/DD/YYYY format");
    d = new Date(userDate);
    month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    x = month[d.getMonth()];
    window.console.log(x);
}
stepTwo();
*/


/*
//STEP 3  -- get day
function stepThree() {
    "use strict";
    var userDate, day, d, x;
    userDate = window.prompt("Enter a date in the MM/DD/YYYY format");
    d = new Date(userDate);
    day = new Array();
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";
    x = day[d.getDay()];
   // window.console.log(x);
    
    if (d.getDay() === 0 || d.getDay() === 6) {
        window.console.log(userDate + "is a " + x + " which is a weekend");
    } else {
        window.console.log("Sorry, that date is not a weekend.");
    }
}
stepThree();
*/

/*
//STEP 4 -- get yesterday's day
function stepFour() {
    "use strict";
    var d, x, day;
    d = new Date();
    day = new Array();
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";
    x = day[d.getDay() - 1];
    window.console.log("Yesterday is " + x);
}

stepFour();
*/

/*
//STEP 5
function stepFive() {
    "use strict";
    var d, x, day;
    d = new Date();
    day = new Array();
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";
    x = day[d.getDay()];
    window.console.log("Today is " + x.charAt(0));
}
stepFive();
*/