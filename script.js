class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(prev) || isNaN(current)) return;

        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if(prev === 0 || current === 0){
                    alert("You are not allowed to divide by 0");
                    computation = 0;
                    break;
                }else{
                    computation = prev / current;
                    break;
                }
                
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)) {
            integerDisplay = '';
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        }else{
            return integerDisplay;
        }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        }else{
            this.previousOperandTextElement.innerText = '';
        }
         
    }
}

const displayNumber = document.querySelector('.calc-display');
const numberButtons = Array.from(document.querySelectorAll(".numbers"));
const operationButtons = Array.from(document.querySelectorAll('.operators'));
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('.delete');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

//keyboard support
document.addEventListener('keydown',(event) => {
    if(event.key === "1"){calculator.appendNumber(1);}
    if(event.key === "2"){calculator.appendNumber(2);}
    if(event.key === "3"){calculator.appendNumber(3);}
    if(event.key === "4"){calculator.appendNumber(4);}
    if(event.key === "5"){calculator.appendNumber(5);}
    if(event.key === "6"){calculator.appendNumber(6);}
    if(event.key === "7"){calculator.appendNumber(7);}
    if(event.key === "8"){calculator.appendNumber(8);}
    if(event.key === "9"){calculator.appendNumber(9);}
    if(event.key === "0"){calculator.appendNumber(0);}
    if(event.key === "."){calculator.appendNumber(".");}
    if(event.key === "+"){calculator.chooseOperation("+");}
    if(event.key === "/"){calculator.chooseOperation("/");}
    if(event.key === "*"){calculator.chooseOperation("*");}
    if(event.key === "-"){calculator.chooseOperation("-");}
    if(event.key === "Enter"){calculator.compute();}
    if(event.key === "Backspace"){calculator.delete();}
    if(event.key === "Delete"){calculator.delete();}
    calculator.updateDisplay();
})

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});