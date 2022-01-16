// Assignment code here

// 
let generateBtn = document.querySelector("#generate");

function generatePassword(){
// 
    let smallLetters = "abcdefghijklmnopqrstuvwxyz";
    let capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChar = "~!@#]$%=^[&*()_+{}:?><;.,";
    let password = "";
    let availChar = "";

let passwordLength = prompt("How many characters would you like your password to be? Please choose a password length between 8 and 128.")

if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
}



else {
    alert("Your password must be between 8 and 128 characters long")
    return "";
}
}
// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);