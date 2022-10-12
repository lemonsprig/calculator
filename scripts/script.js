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
    if (display.textContent.length < 20) {
        if(e.type == "keydown") {
            console.log ("keydown")
            display.textContent += e.key
        } else {
            console.log("click")
            display.textContent += this.value
        }
    }
}


buttons.forEach(button => button.addEventListener("click", updateDisplay));
window.addEventListener("keydown", updateDisplay);