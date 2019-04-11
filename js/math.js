/*eslint-env browser*/

//STEP 1 - absolute value
function stepOne() {
    "use strict";
    var x;
    x = window.prompt("Enter a number");
    window.alert(Math.abs(x));
}
stepOne();

/*
//STEP 2 - round-up
function stepTwo() {
    "use strict";
    var x;
    x = window.prompt("Enter a number with decimal places");
    window.alert(Math.ceil(x));
}
stepTwo();
*/
/*
//STEP 3  - round-down
function stepThree() {
    "use strict";
    var x;
    x = window.prompt("Enter a number with decimal places");
    window.alert(Math.floor(x));    
}
stepThree();
*/

//STEP 4 - Max/Min
/*
function stepFour() {
    "use strict";
    var x, y, numberMax, numberMin;
    x = window.prompt("Enter five numbers separated by a comma. Do not include spaces.");
    y = x.split(",");
    numberMin = Math.min.apply(Math, y);
    numberMax = Math.max.apply(Math, y);
    window.alert("The minimum value is " + numberMin);
    window.alert("The maximum value is  " + numberMax);
}
stepFour();
*/
/*
//STEP 5 - SQRT
function stepFive() {
    "use strict";
    var x;
    x = window.prompt("Enter a number");
    window.alert("The square root of " + x + " is  " + Math.sqrt(x));
}
stepFive();
*/