// Array containing all possible characters for password generation
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// DOM Elements
const passwordBox1 = document.getElementById("password-display-1")
const passwordBox2 = document.getElementById("password-display-2")
const copyMessage = document.getElementById("copy-message")
let buttonEL = document.getElementById("password-btn")

// Event Listener for Generate Password button
buttonEL.addEventListener("click", function(){
    let passwordOne = randomPassword();
    let passwordTwo = randomPassword();
    passwordBox1.textContent = passwordOne;
    passwordBox2.textContent = passwordTwo;
});

// Event Listeners for password boxes (copy on click)
passwordBox1.addEventListener("click", function(){
    if (passwordBox1.textContent) {
        copyText(passwordBox1.textContent);
    }
});
passwordBox2.addEventListener("click", function() {
    if (passwordBox2.textContent) {
        copyText(passwordBox2.textContent);
    }
});

/**
 * Generates a random password
 * @returns {string} Generated password
 */
function randomPassword(){
    let password = ""
    let lengthInput = document.getElementById("length-input").value
    let length = parseInt(lengthInput) || 8
    
    for(let i = 0; i < length; i++){
        let indexrandom = Math.floor(Math.random() * characters.length)
        password += characters[indexrandom]
    }
    return password
}
randomPassword()

/**
 * Copies text to clipboard and shows feedback message
 * @param {string} text - Text to be copied
 */
function copyText(text){
    // Create temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    // Select and copy text
    tempInput.select();
    document.execCommand("copy");
    
    // Remove temporary element
    document.body.removeChild(tempInput);
    
    // Show feedback message
    copyMessage.textContent = "Password copied!";
    copyMessage.style.display = "block";
    
    // Hide message after 2 seconds
    setTimeout(()=>{
        copyMessage.style.display = "none";
    }, 2000);
}

