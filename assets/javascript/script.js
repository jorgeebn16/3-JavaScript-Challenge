// Assignment code here
// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var character = "";
var characterSpecialCharacter;
var characterNumericCharacter;
var characterUpperCase;
var characterLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var character = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while(character  <= 7 || character >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var character = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${character} characters`);

    // Determine parameters of password 
    var characterSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var characterNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var characterLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var characterUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
    // Loop if answer is outside the parameters 
      while(characterUpperCase === false && characterLowerCase === false && characterSpecialCharacter === false && characterNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var characterSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var characterNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var characterLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var characterUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (characterSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (characterNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (characterLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (characterUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)


  // Empty string to be filled based on for loop selecting random characters from the array
    var password = ""

  // for loop to generate password characters and push each character to the password var
  for(var i = 0; i < character; i++) {
    password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(password)
  }

  // return the generated password as the function result
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


