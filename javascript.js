const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const equalKey = document.querySelector(".equal");
const resetKey = document.querySelector(".reset");

const addedNumbers = [];
const addedOperation = [];
let result = "";

for (const button of buttons) {
  button.addEventListener("click", function () {
    if (button.value === "AC") {
      display.textContent = "";
      result = "";
    } else if (button.value === "+") {
      if (checkPreviousOperation(display.innerHTML)) {
        updateDisplay("+");
        result += "+";
      }
    } else if (button.value === "-") {
      if (checkPreviousOperation(display.innerHTML)) {
        updateDisplay("-");
        result += "-";
      }
    } else if (button.value === "x") {
      if (checkPreviousOperation(display.innerHTML)) {
        updateDisplay("x");
        result += "*";
      }
    } else if (button.value === "%") {
      if (checkPreviousOperation(display.innerHTML)) {
        updateDisplay("%");
        result += "/";
      }
    } else if (!isNaN(Number(button.value))) {
      updateDisplay(button.value);
      result += button.value;
    } else if (button.value === "=") {
      calculate();
    }
  });
}

function updateDisplay(newValue) {
  display.innerHTML += newValue;
}

function checkPreviousOperation(displayExpresion) {
  if (displayExpresion !== "") {
    displayExpresion = displayExpresion[displayExpresion.length - 1];
    if (
      displayExpresion.includes("+") ||
      displayExpresion.includes("-") ||
      displayExpresion.includes("%") ||
      displayExpresion.includes("x")
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function calculate() {
  let lastValueOfExpresion = display.innerHTML[display.innerHTML.length - 1];
  if (!isNaN(Number(lastValueOfExpresion))) {
    display.textContent = eval(result);
    result = display.innerHTML;
  } else {
    display.innerHTML = display.innerHTML.slice(
      0,
      display.innerHTML.length - 1
    );
    result = result.slice(0, result.length - 1);
    display.textContent = eval(result);
    result = display.innerHTML;
  }
}
