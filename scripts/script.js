const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const equals = document.querySelector("[data-equals");
const displayValue = document.querySelector(".display-value");
const displayOperator = document.querySelector(".display-operator")
const clear = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const sign = document.querySelector("[data-sign]");


let operandA = "";
let selectedOperator = "";
let isResult = false;
displayValue.textContent = "";



function operate(operator, num1, num2) {
    if(num1 === "" || num2 ==="" || operator === "") return
    switch(operator) {
        case "+":
            displayValue.textContent = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            displayValue.textContent = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            displayValue.textContent = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            if(num2 == 0) {
                zeroDivisionError()
                return;
            }
            displayValue.textContent = parseFloat(num1) / parseFloat(num2);
            break;
        default:
    }
    displayOperator.textContent = ''
    selectedOperator = ''
    isResult = true;
}

function updateDisplay(number) {
    if(isResult === true) {
        isResult = false;
        displayValue.textContent = "";
    }
    if(displayValue.textContent.length >= 20 || (number =="." && displayValue.textContent.includes("."))) return;
    displayValue.textContent += number;
}

function setOperator(operator) {
    if(displayValue.textContent === '') return;
    operandA = displayValue.textContent;
    displayValue.textContent = "";
    selectedOperator = operator;
    displayOperator.textContent = operator;
}

function clearAll() {
    operandA = ""
    isResult = false;
    displayOperator.textContent = "";
    displayValue.textContent = "";
    displayValue.classList.remove("error");
    displayOperator.classList.remove("hide");
}

function deleteLast() {
    displayValue.textContent = displayValue.textContent.slice(0,-1);
}

function swapSign() {
    displayValue.textContent *= -1;
}

function zeroDivisionError() {
    displayOperator.textContent = "";
    displayValue.textContent = "Error! Divide by 0";
    displayValue.classList.add("error");
    displayOperator.classList.add("hide");

}

function keyPressed(e) {
    if(e.key.match(/[0-9.]/)) {
        updateDisplay(e.key);
    }
    else if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        setOperator(e.key);
    }
    else if(e.key === "backspace") {
        deleteLast();
    }
    else if(e.key === "=" || e.key === "Enter") {
        operate(selectedOperator, operandA, displayValue.textContent);
    }
}

numbers.forEach(number => {number.addEventListener('click', () => {updateDisplay(number.textContent)})});
operators.forEach(operator => {operator.addEventListener('click', () => {setOperator(operator.textContent)})});
equals.addEventListener('click', () => {operate(selectedOperator, operandA, displayValue.textContent)});
clear.addEventListener('click', clearAll);
deleteButton.addEventListener('click', deleteLast);
sign.addEventListener('click', swapSign);
displayValue.addEventListener('animationend', clearAll)
window.addEventListener('keydown', keyPressed)





    