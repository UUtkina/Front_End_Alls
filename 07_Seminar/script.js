const titleLinc = document.getElementById("title");
let flag = false;

console.log(titleLinc);

function changeTitle() {
    const clicked = "Welcome to my page!";
    const unClicked = "You clicked button";

    if (flag) {
        titleLinc.textContent = clicked;
    } else {
        titleLinc.textContent = unClicked;
    }
    flag = !flag;
}
const images = [
    "./Images/Rouen_Cathedral_1.jpg",
    "./Images/Rouen_Cathedral_5.jpg",
    "./Images/Rouen_Cathedral_2.jpg",
    "./Images/Rouen_Cathedral_3.jpg",
    "./Images/Rouen_Cathedral_4.jpg",
    "./Images/Rouen_Cathedral_6.jpg",
];

const btnPref = document.getElementById("pref");
const elemPicture = document.getElementById("picture");
const btnNext = document.getElementById("next");

btnPref.onclick = prevHandler;
btnNext.onclick = nextHandler;
let index = 0;

function prevHandler() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    elemPicture.src = images[index];
}
function nextHandler() {
    index++;
    if (index == images.length) {
        index = 0;
    }
    elemPicture.src = images[index];
}
