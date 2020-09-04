// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult = document.querySelector("#password");

// Variables for arrays
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const specialChar = ["~","!","@","#","$","%","^","&","*","(",")","-",",","+","{","}"];
const number = [1,2,3,4,5,6,7,8,9];

// Variables retreived through prompts
var pwLength = prompt("Please enter the length you want your password to be, from 8 - 128 characters");
  // if length is not between 8 & 128, alert the user.
  if (isNaN(pwLength) == true || pwLength < 8 || pwLength > 128) {
    alert("ERROR: Please resubmit with a valid password character length (a number 8 - 128)");
    console.log("length");
  }

var uppercaseConfirm = confirm("Do you want uppercase letters in your password?  Select OK for yes, Cancel for no.");
var lowercaseConfirm = confirm("Do you want lowercase letters in your password?  Select OK for yes, Cancel for no.");
var numericConfirm = confirm("Do you want numbers in your password?  Select OK for yes, Cancel for no.");
var specialConfirm = confirm("Do you want special characters in your password?  Select OK for yes, Cancel for no.");
var charArray = [];

// If the user confirmed, add to one large array that holds all possible characters
if (uppercaseConfirm) {
  console.log("uppercase");
  charArray = charArray.concat(uppercase);
  console.log(charArray);
}

if (lowercaseConfirm) {
  console.log("lowercase");
  charArray = charArray.concat(lowercase);
  console.log(charArray);
}

if (numericConfirm) {
  console.log("numeric");
  charArray = charArray.concat(number);
  console.log(charArray);
}

if (specialConfirm) {
  console.log("special");
  charArray = charArray.concat(specialChar);
  console.log(charArray);
}

// Ensure at least one character type was chosen by the user.
if (uppercaseConfirm == false && lowercaseConfirm == false && numericConfirm == false && specialConfirm == false) {
  alert("You must select at least one character type.");
}

// When the generate button is clicked, run the generatePassword and writePassword functions.
generateBtn.addEventListener("click", writePassword());


// Write password to the #password input
function writePassword() {
  // Run for loop to randomly generate characters
  for (var i = 0; i < pwLength; i++) {
    var randomChar = 0;
    // Randomly pull a char from the huge array of all char options
    randomChar = charArray[Math.floor(Math.random()*charArray.length)];
    console.log(randomChar);

    var randomPassword;
    randomPassword += randomChar;
    console.log(randomPassword);
    passwordResult.value = randomPassword;
  }
}
