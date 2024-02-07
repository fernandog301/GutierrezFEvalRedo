// Declare variables for HTML ids

let aBtn = document.getElementById("aBtn");
let bBtn = document.getElementById("bBtn");
let cBtn = document.getElementById("cBtn");
let dBtn = document.getElementById("dBtn");
let eBtn = document.getElementById("eBtn");
let fBtn = document.getElementById("fBtn");
let gBtn = document.getElementById("gBtn");
let hBtn = document.getElementById("hBtn");
let iBtn = document.getElementById("iBtn");
let jBtn = document.getElementById("jBtn");
let kBtn = document.getElementById("kBtn");
let lBtn = document.getElementById("lBtn");
let mBtn = document.getElementById("mBtn");
let nBtn = document.getElementById("nBtn");
let oBtn = document.getElementById("oBtn");
let pBtn = document.getElementById("pBtn");
let qBtn = document.getElementById("qBtn");
let rBtn = document.getElementById("rBtn");
let sBtn = document.getElementById("sBtn");
let tBtn = document.getElementById("tBtn");
let uBtn = document.getElementById("uBtn");
let vBtn = document.getElementById("vBtn");
let wBtn = document.getElementById("wBtn");
let xBtn = document.getElementById("xBtn");
let yBtn = document.getElementById("yBtn");
let zBtn = document.getElementById("zBtn");


let aBtn2 = document.getElementById("aBtn2");
let bBtn2 = document.getElementById("bBtn2");
let cBtn2 = document.getElementById("cBtn2");
let dBtn2 = document.getElementById("dBtn2");
let eBtn2 = document.getElementById("eBtn2");
let fBtn2 = document.getElementById("fBtn2");
let gBtn2 = document.getElementById("gBtn2");
let hBtn2 = document.getElementById("hBtn2");
let iBtn2 = document.getElementById("iBtn2");
let jBtn2 = document.getElementById("jBtn2");
let kBtn2 = document.getElementById("kBtn2");
let lBtn2 = document.getElementById("lBtn2");
let mBtn2 = document.getElementById("mBtn2");
let nBtn2 = document.getElementById("nBtn2");
let oBtn2 = document.getElementById("oBtn2");
let pBtn2 = document.getElementById("pBtn2");
let qBtn2 = document.getElementById("qBtn2");
let rBtn2 = document.getElementById("rBtn2");
let sBtn2 = document.getElementById("sBtn2");
let tBtn2 = document.getElementById("tBtn2");
let uBtn2 = document.getElementById("uBtn2");
let vBtn2 = document.getElementById("vBtn2");
let wBtn2 = document.getElementById("wBtn2");
let xBtn2 = document.getElementById("xBtn2");
let yBtn2 = document.getElementById("yBtn2");
let zBtn2 = document.getElementById("zBtn2");

let studentInfoDiv = document.getElementById("studentInfoDiv");
let studentInfoDiv2 = document.getElementById("studentInfoDiv2");

// Get students function fetches data from local json file
const getStudents = async () => {
    const promise = await fetch("../data/studentList.json");
    const data = await promise.json();
    return data.studentList;
}

getStudents();


// Event listeners for First Name search buttons. Calls filterStudentsByFirstName function and passes in the corresponding letter
aBtn.addEventListener("click", () => {
    filterStudentsByFirstName("A");
});
bBtn.addEventListener("click", () => {
    filterStudentsByFirstName("B");
});
cBtn.addEventListener("click", () => {
    filterStudentsByFirstName("C");
});
dBtn.addEventListener("click", () => {
    filterStudentsByFirstName("D");
});
eBtn.addEventListener("click", () => {
    filterStudentsByFirstName("E");
});
fBtn.addEventListener("click", () => {
    filterStudentsByFirstName("F");
});
gBtn.addEventListener("click", () => {
    filterStudentsByFirstName("G");
});
hBtn.addEventListener("click", () => {
    filterStudentsByFirstName("H");
});
iBtn.addEventListener("click", () => {
    filterStudentsByFirstName("I");
});
jBtn.addEventListener("click", () => {
    filterStudentsByFirstName("J");
});
kBtn.addEventListener("click", () => {
    filterStudentsByFirstName("K");
});
lBtn.addEventListener("click", () => {
    filterStudentsByFirstName("L");
});
mBtn.addEventListener("click", () => {
    filterStudentsByFirstName("M");
});
nBtn.addEventListener("click", () => {
    filterStudentsByFirstName("N");
});
oBtn.addEventListener("click", () => {
    filterStudentsByFirstName("O");
});
pBtn.addEventListener("click", () => {
    filterStudentsByFirstName("P");
});
qBtn.addEventListener("click", () => {
    filterStudentsByFirstName("Q");
});
rBtn.addEventListener("click", () => {
    filterStudentsByFirstName("R");
});
sBtn.addEventListener("click", () => {
    filterStudentsByFirstName("S");
});
tBtn.addEventListener("click", () => {
    filterStudentsByFirstName("T");
});
uBtn.addEventListener("click", () => {
    filterStudentsByFirstName("U");
});
vBtn.addEventListener("click", () => {
    filterStudentsByFirstName("V");
});
wBtn.addEventListener("click", () => {
    filterStudentsByFirstName("W");
});
xBtn.addEventListener("click", () => {
    filterStudentsByFirstName("X");
});
yBtn.addEventListener("click", () => {
    filterStudentsByFirstName("Y");
});
zBtn.addEventListener("click", () => {
    filterStudentsByFirstName("Z");
});


// Event listeners for Last Name search buttons. Calls filterStudentsByLastName function and passes in the corresponding letter
aBtn2.addEventListener("click", () => {
    filterStudentsByLastName("A");
});
bBtn2.addEventListener("click", () => {
    filterStudentsByLastName("B");
});
cBtn2.addEventListener("click", () => {
    filterStudentsByLastName("C");
});
dBtn2.addEventListener("click", () => {
    filterStudentsByLastName("D");
});
eBtn2.addEventListener("click", () => {
    filterStudentsByLastName("E");
});
fBtn2.addEventListener("click", () => {
    filterStudentsByLastName("F");
});
gBtn2.addEventListener("click", () => {
    filterStudentsByLastName("G");
});
hBtn2.addEventListener("click", () => {
    filterStudentsByLastName("H");
});
iBtn2.addEventListener("click", () => {
    filterStudentsByLastName("I");
});
jBtn2.addEventListener("click", () => {
    filterStudentsByLastName("J");
});
kBtn2.addEventListener("click", () => {
    filterStudentsByLastName("K");
});
lBtn2.addEventListener("click", () => {
    filterStudentsByLastName("L");
});
mBtn2.addEventListener("click", () => {
    filterStudentsByLastName("M");
});
nBtn2.addEventListener("click", () => {
    filterStudentsByLastName("N");
});
oBtn2.addEventListener("click", () => {
    filterStudentsByLastName("O");
});
pBtn2.addEventListener("click", () => {
    filterStudentsByLastName("P");
});
qBtn2.addEventListener("click", () => {
    filterStudentsByLastName("Q");
});
rBtn2.addEventListener("click", () => {
    filterStudentsByLastName("R");
});
sBtn2.addEventListener("click", () => {
    filterStudentsByLastName("S");
});
tBtn2.addEventListener("click", () => {
    filterStudentsByLastName("T");
});
uBtn2.addEventListener("click", () => {
    filterStudentsByLastName("U");
});
vBtn2.addEventListener("click", () => {
    filterStudentsByLastName("V");
});
wBtn2.addEventListener("click", () => {
    filterStudentsByLastName("W");
});
xBtn2.addEventListener("click", () => {
    filterStudentsByLastName("X");
});
yBtn2.addEventListener("click", () => {
    filterStudentsByLastName("Y");
});
zBtn2.addEventListener("click", () => {
    filterStudentsByLastName("Z");
});


// Filter students functions. Pass in a letter, call getStudents. 

const filterStudentsByFirstName = async (firstNameLetter) => {
    const students = await getStudents();
    // Filter students by first name starting with letter (whichever button is clicked will pass in the letter).
    const filteredStudents = students.filter(student => student.firstName.startsWith(`${firstNameLetter}`));

    // clearing the contents of studentInfoDiv
    studentInfoDiv.textContent = "";

    // If filteredStudents array is empty, output "No Student". Otherwise, output correct student info to DOM
    if (filteredStudents.length === 0) {
        let noStudentMessage = document.createElement("p");
        noStudentMessage.textContent = "No Student";
        studentInfoDiv.append(noStudentMessage);
    } else {
        filteredStudents.map(student => {
            let name = document.createElement("p");
            let email = document.createElement("p");
            name.textContent = `Name: ${student.firstName} ${student.lastName}`;
            email.textContent = `Email: ${student.email}`;
            studentInfoDiv.append(name);
            studentInfoDiv.append(email);
        });
    }
}

// Filter students functions. Pass in a letter, call getStudents. 

const filterStudentsByLastName = async (lastNameLetter) => {
    const students = await getStudents();
    // Filter students by first name starting with letter (whichever button is clicked will pass in the letter).
    const filteredStudents2 = students.filter(student => student.lastName.startsWith(`${lastNameLetter}`));

    // clearing the contents of studentInfoDiv
    studentInfoDiv2.textContent = "";

    // If filteredStudents array is empty, output "No Student". Otherwise, output correct student info to DOM
    if (filteredStudents2.length === 0) {
        let noStudentMessage = document.createElement("p");
        noStudentMessage.textContent = "No Student";
        studentInfoDiv2.append(noStudentMessage);
    } else {
        filteredStudents2.map(student => {
            let name = document.createElement("p");
            let email = document.createElement("p");
            name.textContent = `Name: ${student.lastName}, ${student.firstName}`;
            email.textContent = `Email: ${student.email}`;
            studentInfoDiv2.append(name);
            studentInfoDiv2.append(email);
        });
    }
}


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