
let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let backspaceButton = document.getElementById('backspace');
let equalsButton = document.getElementById('equals');

let expression = '';
let result = 0;

// Button click event listeners
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        switch ((link unavailable)) {
            case 'clear':
                clearCalculator();
                break;
            case 'backspace':
                backspace();
                break;
            case 'equals':
                calculateResult();
                break;
            default:
                appendToExpression(button.textContent);
        }
    });
});

// Clear calculator
function clearCalculator() {
    expression = '';
    display.value = '';
}

// Backspace
function backspace() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

// Calculate result
function calculateResult() {
    try {
        result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

// Append to expression
function appendToExpression(value) {
    expression += value;
    display.value = expression;
}