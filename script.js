// calculator program

const display = document.getElementById("display");

function appendtoDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
function conversion(input) {
  display.value /= input;
}
function currency(input) {
  display.value = input + display.value;
}
function back () {
  display.value = display.value.slice(0, -1);
}

