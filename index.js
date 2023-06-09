let colorOne = document.getElementById("color1");
let colorTwo = document.getElementById("color2");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code");

function setDirection(value, _this) {
    let directions = document.querySelectorAll(".buttons button");

    for (const i of directions) {
        i.classList.remove("active");
    }

    _this.classList.add("active");
    currentDirection = value;
}

function generateCode() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    document.getElementsByTagName("body")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`
}

function copyText() {
    outputCode.select();
    document.execCommand('copy');
    alert("Gradient Copied!");
}

generateCode();