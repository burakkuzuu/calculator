function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperation(op) {
  if (currentInput === "" && op !== "-") return;

  if (operator) {
    calculate();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput || previousInput || "0";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
}

function calculate() {
  if (!operator || currentInput === "") return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
  }

  currentInput = result.toString();
  previousInput = "";
  operator = "";
  updateDisplay();
}
const display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";
