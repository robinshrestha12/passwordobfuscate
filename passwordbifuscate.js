// Define the obfuscate function
function passwordbifuscate(str) {
  let obfuscatedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      obfuscatedStr += "4";
    } else if (str[i] === "e") {
      obfuscatedStr += "3";
    } else if (str[i] === "o") {
      obfuscatedStr += "0";
    } else if (str[i] === "l") {
      obfuscatedStr += "1";
    } else {
      obfuscatedStr += str[i];
    }
  }
  return obfuscatedStr;
}

// Get the password from the command line arguments
const password = process.argv[2];

// Obfuscate the password and print it out
console.log(passwordbifuscate(password));
