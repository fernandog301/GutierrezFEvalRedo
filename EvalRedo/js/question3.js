// menuBG is dark
// lightGreyBg is gray background for webpage
// whiteBG is white background for containers
// white is white text
// gainsBro is gray text for menu on left side

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