let input = document.getElementById('input');
let currency = false; // Flag to track if currency conversion is enabled
let programmerMode = false; // Flag to track if programmer mode is enabled

function insert(char) {
  if (programmerMode) {
    input.value += char;
  } else {
    if (char === '.') {
      // Only allow one decimal point
      if (input.value.includes('.')) return;
    }
    input.value += char;
  }
}

function clearInput() {
  input.value = '';
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  // Evaluate the expression and update the input value
  let result = eval(input.value);
  input.value = result.toLocaleString('en-US', {maximumFractionDigits: 2});
}

function exchange() {
  // Toggle the currency flag
  currency = !currency;

  if (currency) {
    // Display the currency conversion prompt
    let rate = prompt('Enter the exchange rate:');
    if (!isNaN(rate) && rate !== null) {
      // Convert the input value to the selected currency
      let value = input.value / rate;
      input.value = value.toLocaleString('en-US', {maximumFractionDigits: 2}) + ' USD';
    } else {
      // Invalid input, revert the flag
      currency = !currency;
    }
  } else {
    // Revert the input value to the original format
    input.value = input.value.replace(/( USD$)/, '');
  }
}

function enableProgrammerMode() {
  // Toggle the programmer mode flag
  programmerMode = !programmerMode;

  if (programmerMode) {
    // Convert the input value to hexadecimal
    let value = parseInt(input.value);
    input.value = value.toString(16).toUpperCase();
  } else {
    // Convert the input value back to decimal
    let value = parseInt(input.value, 16);
    input.value = value.toLocaleString('en-US', {maximumFractionDigits: 2});
  }
}