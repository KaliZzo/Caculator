const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function calculateRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function calculateFactorial() {
  try {
    let num = eval(display.value);
    if (num < 0 || !Number.isInteger(num)) {
      display.value = "Error";
      return;
    }
    display.value = factorial(num);
  } catch {
    display.value = "Error";
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function convertToBinary() {
  try {
    let num = parseInt(eval(display.value), 10);
    display.value = num.toString(2);
  } catch {
    display.value = "Error";
  }
}

function convertToDecimal() {
  try {
    let num;
    if (display.value.startsWith("0x")) {
      num = parseInt(display.value, 16);
    } else {
      num = parseInt(display.value, 2);
    }
    if (isNaN(num)) {
      throw new Error("Invalid number");
    }
    display.value = num.toString(10);
  } catch {
    display.value = "Error";
  }
}

function convertToHex() {
  try {
    let num = parseInt(eval(display.value), 10);
    display.value = "0x" + num.toString(16).toUpperCase();
  } catch {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[0-9+\-*/.()]/.test(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

function runExamples() {
  console.log("Running examples:");

  display.value = "255";
  convertToHex();
  console.log("255 to Hex:", display.value);

  convertToDecimal();
  console.log("0xFF to Decimal:", display.value);

  display.value = "15";
  convertToBinary();
  console.log("15 to Binary:", display.value);

  convertToDecimal();
  console.log("1111 to Decimal:", display.value);
}

window.onload = runExamples;
