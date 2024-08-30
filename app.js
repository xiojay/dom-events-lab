/*-------------------------------- Constants --------------------------------*/
let currentInput = ''
let previousInput = ''
let operator = ''
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});

document.querySelector('#calculator').addEventListener('click', (event) => {
  const value = event.target.innerText

  if (event.target.classList.contains('number')) {
    handleNumber(value)
  } else if (['+', '-', '*', '/'].includes(value)) {
    handleOperator(value)
  } else if (value === '=') {
    handleEquals()
  } else if (value === 'C') {
    clearCalculator()
  }
});

/*---------------------------------- Functions ------------------------------*/
function handleNumber(number) {
  currentInput += number
  updateDisplay(currentInput)
};

function handleOperator(op) {
  if (currentInput === '') 
    return

  if (previousInput !== '') {
    handleEquals()
  }

  operator = op
  previousInput = currentInput
  currentInput = ''
};

function handleEquals() {
  if (previousInput === '' || currentInput === '' || operator === '') 
    return

  const prev = parseFloat(previousInput)
  const current = parseFloat(currentInput)

  let result

  switch (operator) {
    case '+':
      result = prev + current
      break
    case '-':
      result = prev - current
      break
    case '*':
      result = prev * current
      break
    case '/':
      result = prev / current
      break
    default:
      return
  };

  currentInput = result.toString()
  operator = ''
  previousInput = ''
  updateDisplay(currentInput)
};

function clearCalculator() {
  currentInput = ''
  previousInput = ''
  operator = ''
  updateDisplay('0')
};

function updateDisplay(value) {
  display.innerText = value || '0'
};