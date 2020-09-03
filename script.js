// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","@","#","$"];
var number = [1,2,3,4,5,6,7,8,9];

var length = prompt("Please enter the length you want your password to be, from 8 - 128 characters");
var uppercaseYN = prompt("Do you want uppercase letters in your password?");
var lowercaseYN = prompt("Do you want lowercase letters in your password?");
var numbericYN = prompt("Do you want numbers in your password?");
var specialYN = prompt("Do you want special characters in your password?");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = "Learning javascript";
  // passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
