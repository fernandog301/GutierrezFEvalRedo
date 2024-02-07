//These comments below are all apis that do not need auth
//7Timer! Weather forecastsapi url http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json
//Agify.io Predict age based on a name url 'https://api.agify.io?name=Jt' <= you can change the end of the url to somes name for differnt results
//Bored Activity suggestions url https://www.boredapi.com/api/activity

// Declare variables for HTML ids
let result = document.getElementById("result");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let val3 = document.getElementById("val3");


// Fetch functions
const timerAPICall = async () => {
    const promise = await fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json");
    const data = await promise.json();
    return data;
}

const agifyAPICall = async () => {
    const promise = await fetch(`https://api.agify.io?name=Jerrod`);
    const data = await promise.json();
    return data;
}

const boredAPICall = async () => {
    const promise = await fetch("https://www.boredapi.com/api/activity");
    const data = await promise.json();
    return data;
}


// Event Listeners to call fetch functions and output results to the DOM
val1.addEventListener("click", async () => {
    const response = await timerAPICall();
    result.textContent = `The wind is currently moving ${response.dataseries[0].wind10m.direction} at a speed of ${response.dataseries[0].wind10m.speed} mph. The cloud cover is ${response.dataseries[0].cloudcover}.`;
    result.className = "text-center pt-5 fs-1 textColorBlue";
})

val2.addEventListener("click", async () => {
    const response = await agifyAPICall();
    result.textContent = `Your predicted age is: ${response.age}.`;
    result.className = "text-center pt-5 fs-1 textColorTomato";
});

val3.addEventListener("click", async () => {
    const response = await boredAPICall();
    result.textContent = `Bored? You could try to: ${response.activity}.`;
    result.className = "text-center pt-5 fs-1 textColorPurple";
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