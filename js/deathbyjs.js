/*eslint-env browser*/

//STEP 1 - alphabetize string
function stepOne() {
    "use strict";
    var string;
    string = window.prompt("Enter a string.");
    window.console.log(string.split('').sort().join(''));
}
stepOne();
//the quick brown fox jumped.

/*
//STEP 2 - caps first letter
function stepTwo() {
    "use strict";
    var string, splitStr, i;
    string = window.prompt("Enter a string.");
    splitStr = string.toLowerCase().split(' ');
    for (i = 0; i < splitStr.length; i += 1) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    window.console.log(splitStr.join(' '));
}
stepTwo();
//the quick brown fox jumped.
*/

/*
//STEP 3 - vowel count 

function stepThree() {
    "use strict";
    var string, splitStr, counter;
    string = window.prompt("Enter a string.");
    splitStr = string.split();
    counter = splitStr[0].match(/[aeiou]/gi);
   window.console.log(counter.length);

}
stepThree();
/*
//Four vowels 
//Nine vowels tooo here
 
/*
//STEP 4  - random string with fixed length
function stepFour() {
    "use strict";
    var chars, length, randomString, i, randomNumber;
    chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    length = 10;
    randomString = '';
    
    for (i = 0; i < length; i += 1) {
        randomNumber = Math.floor(Math.random() * chars.length);
        randomString += chars.substring(randomNumber, randomNumber + 1);
    }
    window.console.log(randomString);
}
stepFour();
*/

/*
//STEP 5 - longest array element

function stepFive() {
    "use strict";
    var countries, splitStr, lengthStr, i, maxStr;
    countries = window.prompt("Enter a list of countries separated by comma.");
    splitStr = countries.split(",");
    lengthStr = 0;
    for (i =0; i < splitStr.length; i += 1) {
        if (splitStr[i].length > lengthStr) {
            lengthStr = splitStr[i].length;
            maxStr = splitStr[i];
        }
    }
    window.console.log(maxStr);
}
stepFive();
*/
//Australia,Germany,United States of America
//Mexico,El Salvador,Chile,Argentina


