// -------- VARIABLES --------

let firstNum = 0;
let secondNum = 0;
let operator = "";
let opCounter = 0;
let clearFlag = false;

// -------- BASIC OPERATIONS --------

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (op, a, b) => {
  if (opCounter === 1) {
    opCounter = 0;
    b = parseFloat(display.textContent);
    switch (op) {
      case "+":
        firstNum = sum(a, b);
        display.textContent = firstNum;
        break;
      case "-":
        firstNum = subtract(a, b);
        display.textContent = firstNum;
        break;
      case "*":
        firstNum = multiply(a, b);
        display.textContent = firstNum;
        break;
      case "/":
        if (b === 0) {
          display.textContent = "(－‸ლ)";
          break;
        }
        firstNum = divide(a, b);
        display.textContent = firstNum;
        break;
      default:
        alert("Error");
    }
  } else if (opCounter > 1) {
    opCounter = 0;
    switch (op) {
      case "+":
        firstNum = sum(a, b);
        display.textContent = firstNum;
        break;
      case "-":
        firstNum = subtract(a, b);
        display.textContent = firstNum;
        break;
      case "*":
        firstNum = multiply(a, b);
        display.textContent = firstNum;
        break;
      case "/":
        if (b === 0) {
          display.textContent = "(－‸ლ)";
          break;
        }
        firstNum = divide(a, b);
        display.textContent = firstNum;
        break;
      default:
        alert("Error");
    }
  }
};

// -------- MAIN LOGIC --------

const displayNum = (e) => {
  // To prevent numbers like 012 or 000048, instead -> 12 or 48
  if (display.textContent === "0") {
    display.textContent = "";
  }
  if (opCounter === 0) {
    display.textContent += e.target.textContent;
  } else if (opCounter >= 1) {
    if (clearFlag) {
      display.textContent = "";
      clearFlag = false;
    }
    display.textContent += e.target.textContent;
  }
  console.log(display.textContent);
};

const pressOperator = (e) => {
  if (opCounter === 0) {
    firstNum = parseFloat(display.textContent);
    operator = e.target.textContent;
    opCounter++;
    clearFlag = true;
  } else if (opCounter >= 1) {
    secondNum = parseFloat(display.textContent);
    operate(operator, firstNum, secondNum);
    operator = e.target.textContent;
    opCounter++;
    clearFlag = true;
  }
  //   else if (opCounter > 1) {
  //     operator = e.target.textContent;
  //     operate(operator, firstNum, secondNum);
  //     clearFlag = true;
  //   }
};

const clear = () => {
  firstNum = 0;
  secondNum = 0;
  operator = "";
  opCounter = 0;

  display.textContent = "0";
};

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");

// -------- EVENT LISTENERS --------

digits.forEach((digit) => {
  digit.addEventListener("click", displayNum);
});

operators.forEach((operator) => {
  operator.addEventListener("click", pressOperator);
});

equal.addEventListener("click", () => operate(operator, firstNum, secondNum));

clearBtn.addEventListener("click", clear);
