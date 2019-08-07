var clockDisplay = document.querySelector('.clock');
setInterval(
    () => (clockDisplay.innerText = new Date().toLocaleTimeString()),
    1000
);

var display = document.querySelector('.calculator .display');

var displayValue = display.value;

function clearInput() {
    displayValue = ""
}

var memory = "";

function memorize(){
    if (memory === "") {
        memory = displayValue; 
    } else {
        displayValue += memory;
    }
}

function clearMemory() {
    memory = "";
}

document
    .querySelectorAll('.digits button')
    .forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev) {
    displayValue += ev.target.innerText;

}

document
    .querySelectorAll('.opers button')
    .forEach(oper => oper.addEventListener('click', operPressed));

function operPressed(ev) {
    if (isNaN(displayValue[displayValue.length-1])) {
        displayValue = displayValue.substr(0, displayValue.length-1)
    }

    displayValue += ev.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
    displayValue = eval(displayValue);

    if (displayValue === "Infinity") {
        alert("You can't divide by 0");
        clearInput();
    }
}