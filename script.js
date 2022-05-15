// Assignment Code
var generateBtn = document.querySelector("#generate");

//WHEN I click the button to generate a password, THEN I am presented with a series of prompts
//generateBtn.addEventListener("click", selectCriteria)

function selectCriteria () {
  window.confirm("Click OK to select criteria");
  //WHEN prompted for the length, THEN I choose a length of at least 8 characters and no more than 128
  var passLength = window.prompt("Enter desired length (value between 8 and 128)");
  if (passLength < 8 || passLength > 128) {window.alert("Please choose a valid length");
  return selectCriteria();
  }
  //Confirm for lowercase
  var okLowercase = window.confirm("Would your like to include lowercase letters?");
  //Confirm for uppercase
  var okUppercase = window.confirm("Would you like to include uppercase letters?");
  //Confirm for numbers
  var okNumbers = window.confirm("Would you like to include numbers?");
  //Confirm for special characters
  var okSpecialCharacter = window.confirm("Would you like to include special characters?");
  var options = {
    passLength, okLowercase, okUppercase, okNumbers, okSpecialCharacter
  }
  return options;
};


//WHEN I answer each prompt, input should be validaded and at least one character type should be slected


//WHEN all prompts are answered, then password that matches the criteria is generated
function generatePassword() {
  var options = selectCriteria ();
  var length = options.passLength;
  var charset = "";
  var retVal = "";
  if (options.okLowercase){
    charset = charset.concat("abcdefghijklmnopqrstuvwxyz")
  };
  if (options.okUppercase){
    charset = charset.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  };
  if (options.okNumbers){
    charset = charset.concat("1234567890")
  };
  if (options.okSpecialCharacter){
    charset = charset.concat("!@#$%^&*")
  }
  if (charset === ""){
     retVal = "Please try again";
  }
    for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
