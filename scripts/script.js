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

console.log(operate("add", 2, 3));
console.log(operate("subtract", 10, 3));
console.log(operate("multiply", 5, 5));
console.log(operate("divide", 100, 2));