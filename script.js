const numbers = Array.from(document.querySelectorAll(".numbers"));
numbers.forEach(number => number.addEventListener('click', updateDisplay));

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCalc);

const displayNumber = document.querySelector('.calc-display');


function clearCalc(){
    displayNumber.textContent = 0;
}

function updateDisplay(e){
    //remove the placeholder 0 in display
    if(displayNumber.textContent == 0){
        displayNumber.textContent = "";
    }

    displayNumber.textContent = displayNumber.textContent + this.textContent;
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, number1, number2){
    switch(operator){
        case "add":
            return add(number1, number2);
        case "subtract":
            return subtract(number1, number2);
        case "multiply":
            return multiply(number1, number2);
        case "divide":
            return divide(number1, number2);
    }
}