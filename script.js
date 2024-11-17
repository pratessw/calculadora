let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}

function calculateResult() {
    if (firstOperand !== null && currentInput !== '') {
        let secondOperand = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand !== 0) {
                    result = firstOperand / secondOperand;
                } else {
                    result = 'Erro';
                }
                break;
            default:
                return;
        }

        currentInput = result.toString();
        firstOperand = null;
        operator = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}