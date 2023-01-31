var date = new Date();
var date2 = document.getElementById("date3");
date2.innerHTML = date;
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pexels-johannes-plenio-1477835.jpg") {
        myImage.setAttribute("src", "images/pexels-nappy-935985.jpg");
    } else {
        myImage.setAttribute("src", "images/pexels-johannes-plenio-1477835.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};