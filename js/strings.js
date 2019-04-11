/*eslint-env browser*/

//STEP 1
function stepOne() {
    "use strict";
    var username;
    username = window.prompt("What is your name?");
    window.alert("Your name has  " + username.length + "  characters");
    
}
stepOne();


//STEP 2 
/*
function stepTwo() {
    "use strict";
    var userName, userNumber;
    userName = window.prompt("What is your name?");
    userNumber = window.prompt("Enter a number between `1` and " + userName.length);
    window.alert(userName.charAt(userNumber - 1) + " is the " + userNumber + "th character of your name.");

}
stepTwo();
*/

/*
//STEP 3  -- concat first and last names
function stepThree() {
    "use strict";
    var firstName, lastName;
    firstName = window.prompt("What is your first name?");
    lastName = window.prompt("What is your last name?");
    window.alert("Your name is: " + firstName.concat(lastName));
}
stepThree();
*/
/*
//STEP 4
function stepFour() {
    "use strict";
    var text;
    text = "The quick brown fox jumps over the lazy dog.";
    window.alert(text.indexOf("fox"));
}
stepFour();
*/
/*
//STEP 5
function stepFive() {
    "use strict";
    var text;
    text = "The quick brown fox jumps over the lazy fox.";
    window.alert(text.lastIndexOf("fox"));
}
stepFive();
*/
/*
//STEP 6 -- replace
function stepSix() {
    "use strict";
    var text, userName;
    text = "The quick brown fox jumps over the lazy dog."; 
    userName = window.prompt("What is your name?");
    window.alert(text.replace("the lazy dog", userName));
}
stepSix();
*/

//STEP 7  -- match word
/*
function stepSeven() {
    "use strict";
    var text, word, splitWord, includeWord;
    text = "The quick brown fox jumps over the lazy dog.";
    word = window.prompt("Enter any word");
    splitWord = word.split();
    includeWord = text.includes(splitWord);
    if (includeWord === true) {
        window.alert("Your word " + "'" + splitWord + "'"+" was a match");
    } else {
        window.alert("Sorry, your word did not have a match");
    }
}
stepSeven();
*/

/*
//STEP 8 - slice 
function stepEight() {
    "use strict";
    var old_string, new_string;
    old_string = "The quick brown fox jumps over the lazy dog.";
    new_string = old_string.slice(31, 43);
    window.alert(new_string.toUpperCase());
}
stepEight();
*/
/*
//STEP 9 - trim
function stepNine() {
    "use strict";
    var old_string, new_string;
    old_string = "          THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG             ";
    new_string = old_string.trim();
    window.alert(new_string.toLowerCase());
}
stepNine();
*/

//STEP 10 -- upperCase first letter of sentence
/*
function stepTen() {
    "use strict";
    var old_string, new_string;
    old_string = "the quick brown fox jumps over the lazy dog.";
    new_string = old_string.charAt(0).toUpperCase() + old_string.slice(1);
    window.alert(new_string);
}stepTen();
*/