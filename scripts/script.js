let operand = 0;
let  = "";

buttons = document.querySelectorAll(".button");
display = document.querySelector(".display");

display.textContent="";

function operate(operator, num1, num2) {
    switch(operator) {
        case "add":
            return num1 + num2;
            break;
        case "subtract":
            return num1 - num2
            break;
        case "multiply":
            return num1 * num2
            break;
        case "divide":
            return num1 / num2
            break;
        default:
    }
}

function updateDisplay(e) {
    if(display.textContent.length < 20) {
        if(e.type == "keydown") {
            if(e.key.match(/[0-9]/)) {
                display.textContent += e.key
            }
        } else {
            display.textContent += this.value
        }
    }
}


buttons.forEach(button => button.addEventListener("click", updateDisplay));
window.addEventListener("keydown", updateDisplay);