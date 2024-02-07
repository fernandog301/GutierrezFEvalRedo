// Declare variables for HTML ids

let randomCSSBtn = document.getElementById("randomCSSBtn");
let result = document.getElementById("result");

let floater = document.getElementById("floater");
let barrelRoll = document.getElementById("barrelRoll");
let rollerRight = document.getElementById("rollerRight");
let rollerLeft = document.getElementById("rollerLeft");
let heartBeat = document.getElementById("heartBeat");
let pulse = document.getElementById("pulse");
let rotation = document.getElementById("rotation");
let sideToSide = document.getElementById("sideToSide");
let zoomer = document.getElementById("zoomer");
let zoomerOut = document.getElementById("zoomerOut");
let spinner = document.getElementById("spinner");
let wiggle = document.getElementById("wiggle");
let shake = document.getElementById("shake");
let pound = document.getElementById("pound");
let slideUp = document.getElementById("slideUp");
let slideDown = document.getElementById("slideDown");
let slideRight = document.getElementById("slideRight");
let slideLeft = document.getElementById("slideLeft");
let fadeIn = document.getElementById("fadeIn");
let fadeOut = document.getElementById("fadeOut");
let rotateInRight = document.getElementById("rotateInRight");
let rotateInLeft = document.getElementById("rotateInLeft");
let rotateIn = document.getElementById("rotateIn");
let bounceIn = document.getElementById("bounceIn");

// Event listeners for each wicked css class button. Sets the class name for the results box to change the wicked css class
floater.addEventListener("click", () => {
    result.className = "floater simple-box pt-5";
});
barrelRoll.addEventListener("click", () => {
    result.className = "barrelRoll simple-box pt-5";
});
rollerRight.addEventListener("click", () => {
    result.className = "rollerRight simple-box pt-5";
});
rollerLeft.addEventListener("click", () => {
    result.className = "rollerLeft simple-box pt-5";
});
heartBeat.addEventListener("click", () => {
    result.className = "heartbeat simple-box pt-5";
});
pulse.addEventListener("click", () => {
    result.className = "pulse simple-box pt-5";
});
rotation.addEventListener("click", () => {
    result.className = "rotation simple-box pt-5";
});
sideToSide.addEventListener("click", () => {
    result.className = "sideToSide simple-box pt-5";
});
zoomer.addEventListener("click", () => {
    result.className = "zoomer simple-box pt-5";
});
zoomerOut.addEventListener("click", () => {
    result.className = "zoomerOut simple-box pt-5";
});
spinner.addEventListener("click", () => {
    result.className = "spinner simple-box pt-5";
});
wiggle.addEventListener("click", () => {
    result.className = "wiggle simple-box pt-5";
});
shake.addEventListener("click", () => {
    result.className = "shake simple-box pt-5";
});
pound.addEventListener("click", () => {
    result.className = "pound simple-box pt-5";
});
slideUp.addEventListener("click", () => {
    result.className = "slideUp simple-box pt-5";
});
slideDown.addEventListener("click", () => {
    result.className = "slideDown simple-box pt-5";
});
slideRight.addEventListener("click", () => {
    result.className = "slideRight simple-box pt-5";
});
slideLeft.addEventListener("click", () => {
    result.className = "slideLeft simple-box pt-5";
});
fadeIn.addEventListener("click", () => {
    result.className = "fadeIn simple-box pt-5";
});
fadeOut.addEventListener("click", () => {
    result.className = "fadeOut simple-box pt-5";
});
rotateInRight.addEventListener("click", () => {
    result.className = "rotateInRight simple-box pt-5";
});
rotateInLeft.addEventListener("click", () => {
    result.className = "rotateInLeft simple-box pt-5";
});
rotateIn.addEventListener("click", () => {
    result.className = "rotateIn simple-box pt-5";
});
bounceIn.addEventListener("click", () => {
    result.className = "bounceIn simple-box pt-5";
});

// classesArray holds all wicked css class names. This is used in random number generation to select a random css class to be applied to the results box
let classesArray = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "heartbeat", "pulse", "rotation", "sideToSide", "zoomer", "zoomerOut", "spinner", "wiggle", "shake", "pound", "slideUp", "slideDown", "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateInLeft", "rotateIn", "bounceIn"];

// event listener for randomCSSBtn. 
randomCSSBtn.addEventListener("click", () => {
    // Generates a random number and logs it to the console (to check that it is working appropriately)
    const randomNumber = Math.floor(Math.random() * 24);
    console.log(randomNumber);

    // large if statement to set the class to the result box according to the random number
    if (randomNumber == 0) {
        result.className = "floater simple-box pt-5";
    } else if (randomNumber == 1) {
        result.className = "barrelRoll simple-box pt-5";
    } else if (randomNumber == 2) {
        result.className = "rollerRight simple-box pt-5";
    } else if (randomNumber == 3) {
        result.className = "rollerLeft simple-box pt-5";
    } else if (randomNumber == 4) {
        result.className = "heartbeat simple-box pt-5";
    } else if (randomNumber == 5) {
        result.className = "pulse simple-box pt-5";
    } else if (randomNumber == 6) {
        result.className = "rotation simple-box pt-5";
    } else if (randomNumber == 7) {
        result.className = "sideToSide simple-box pt-5";
    } else if (randomNumber == 8) {
        result.className = "zoomer simple-box pt-5";
    } else if (randomNumber == 9) {
        result.className = "zoomerOut simple-box pt-5";
    } else if (randomNumber == 10) {
        result.className = "spinner simple-box pt-5";
    } else if (randomNumber == 11) {
        result.className = "wiggle simple-box pt-5";
    } else if (randomNumber == 12) {
        result.className = "shake simple-box pt-5";
    } else if (randomNumber == 13) {
        result.className = "pound simple-box pt-5";
    } else if (randomNumber == 14) {
        result.className = "slideUp simple-box pt-5";
    } else if (randomNumber == 15) {
        result.className = "slideDown simple-box pt-5";
    } else if (randomNumber == 16) {
        result.className = "slideRight simple-box pt-5";
    } else if (randomNumber == 17) {
        result.className = "slideLeft simple-box pt-5";
    } else if (randomNumber == 18) {
        result.className = "fadeIn simple-box pt-5";
    } else if (randomNumber == 19) {
        result.className = "fadeOut simple-box pt-5";
    } else if (randomNumber == 20) {
        result.className = "rotateInRight simple-box pt-5";
    } else if (randomNumber == 21) {
        result.className = "rotateInLeft simple-box pt-5";
    } else if (randomNumber == 22) {
        result.className = "rotateIn simple-box pt-5";
    } else {
        result.className = "bounceIn simple-box pt-5";
    }
});

// Declare variables from IDs in HTML
let mainContainer = document.getElementById("mainContainer");
let navbar = document.getElementById("navbar");
let directionsContainer = document.getElementById("directionsContainer");
let solutionContainer = document.getElementById("solutionContainer");
let btnDark = document.getElementById("btnDark");
let btnLight = document.getElementById("btnLight");

// Event listeners for dark and light mode buttons. Changes classes on containers to change background colors
btnDark.addEventListener("click", () => {
    mainContainer.className = "col-sm-12 col-md-9 col-xl-10 menuBG boxHeight";
    navbar.className = "navbar lightGreyBg";
    directionsContainer.className = "col-12 dashSection lightGreyBg roundedCorner alpha-4";
    solutionContainer.className =  "col-12 dashSection lightGreyBg roundedCorner alpha-4";
});

btnLight.addEventListener("click", () => {
    mainContainer.className = "col-sm-12 col-md-9 col-xl-10 lightGreyBg boxHeight";
    navbar.className = "navbar navbar-light bg-light";
    directionsContainer.className = "col-12 dashSection whiteBg roundedCorner alpha-4";
    solutionContainer.className = "col-12 dashSection whiteBg roundedCorner alpha-4";
});