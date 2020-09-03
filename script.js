// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for arrays
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$"];
var number = [1,2,3,4,5,6,7,8,9];

// Variables retreived through prompts
var pwLength = prompt("Please enter the length you want your password to be, from 8 - 128 characters");
  // if length between 8 & 128, then log it, else prompt user again
  if (pwLength < 8 || length > 128 || pwLength.isNan) {
    alert("ERROR: Please resubmit with a valid password character length (a number 8 - 128)");
    console.log("length");
    // length = prompt("Please enter a valid number for the password character length, from 8 - 128");
  } // while (length < 8 || length > 128 || length.isNaN)
var uppercaseConfirm = confirm("Do you want uppercase letters in your password? yes/no");
var lowercaseConfirm = confirm("Do you want lowercase letters in your password? yes/no");
var numericConfirm = confirm("Do you want numbers in your password? yes/no");
var specialConfirm = confirm("Do you want special characters in your password? yes/no");
var charArray = [];

// If the user confirmed, add to one large array that holds all possible characters
if (uppercaseConfirm) {
  console.log("uppercase");
  charArray = charArray + uppercase;
  console.log(charArray);
}

if (lowercaseConfirm) {
  console.log("lowercase");
  charArray = charArray + lowercase;
  console.log(charArray);
}

if (numericConfirm) {
  console.log("numeric");
  charArray = charArray + number;
  console.log(charArray);
}

if (specialConfirm) {
  console.log("special");
  charArray = charArray + specialChar;
  console.log(charArray);
}



// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = [passwordText];
  // passwordText.value = password;
}

var randomChar = charArray[Math.floor(Math.random()*charArray.length)];
console.log(randomChar);
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Randomizer:  Math.floor(Math.random());
  //pull char from the huge array of all char options
