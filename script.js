//this is used to change the display number and get the user input number
const displayNumber = document.querySelector('.calc-display');

//every time you click a number call updatedisplay which concatenates text to display number
const numbers = Array.from(document.querySelectorAll(".numbers"));
numbers.forEach(number => number.addEventListener('click', updateDisplay));

//clears all saved variables to default
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearDisplay);

//when selecting an operation, save selection and first number
const operators = Array.from(document.querySelectorAll('.operators'));
operators.forEach(operation => operation.addEventListener('click', selectOperator));

//when click equals saves second number and runs operate
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', selectEquals);

//vars that get changed depending on user inputs
let firstNumber = 0;
let secondNumber = 0;
let selectedOperation = "";

function selectEquals(){
    //save the users input as a float value to be used in calculations
    secondNumber = parseFloat(displayNumber.textContent);
    //update display to the output of user selected operation
    displayNumber.textContent = operate(selectedOperation, firstNumber, secondNumber);
}

function selectOperator(){
    firstNumber = parseFloat(displayNumber.textContent);
    selectedOperation = this.classList[1];
    displayNumber.textContent = 0;
}

function clearDisplay(){
    firstNumber = 0;
    secondNumber = 0;
    selectedOperation = "";
    displayNumber.textContent = 0;
}

function updateDisplay(e){
    //remove the placeholder 0 in display
    if(displayNumber.textContent == 0){
        displayNumber.textContent = "";
    }

    //concatenate the text from the button user clicked on
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