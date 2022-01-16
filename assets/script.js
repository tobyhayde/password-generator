// declare generate button variable
var generateBtn = document.querySelector("#generate");

// declare variables for generatePassword function
function generatePassword(){ 
    var smallLetters = "abcdefghijklmnopqrstuvwxyz";
    var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChar = "~!@#]$%=^[&*()_+{}:?><;.,";
    var password = "";
    var availChar = "";

// prompt for password length
var passwordLength = prompt("How many characters would you like your password to be? Please choose a password length between 8 and 128.")

// conditional statement to verify password length is valid
if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
}

// if password length is not valid, question resets until it is valid
else {
    alert("Your password must be between 8 and 128 characters long")
    return "";
}

// confirm password specifications with variable declaration.
var qrySmallLetters = confirm("Do you want to have lower case characters in your password?  'Ok' for Yes / 'Cancel' for No")
var qryCapLetters = confirm("Do you want to have upper case characters in your password?    'Ok' for Yes / 'Cancel' for No")
var qryNumbers = confirm("Do you want to have numbers in your password?     'Ok' for Yes / 'Cancel' for No")
var qrySpecialChar = confirm("Do you want to have special characters in your password?      'Ok' for Yes / 'Cancel' for No")

// conditional statements for selected password specifications 
if (qrySmallLetters) {
    availChar += smallLetters
}
if (qryCapLetters) {
    availChar += capLetters
}
if (qryNumbers) {
    availChar += specialChar
}

// conditional statement for if no specifications are confirmed, will return an alert to reset
if (
    !qrySmallLetters && !qryCapLetters && !qryNumbers && !qrySpecialChar
) {
    return alert("Click the 'Generate' button again. Please select at least one specification");
}

// randomly selects characters for availChar and then loops until the length equals passwordLength
for (var i=0; i<passwordLength; i++) {
    password +=availChar[Math.floor(Math.random () * availChar.length)];
}
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);