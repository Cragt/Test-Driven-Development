function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.toUpperCase();
}

function calculate(a, operator, b) {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  if (operator === "add") {
    return add(a, b);
  } else if (operator === "subtract") {
    return subtract(a, b);
  } else if (operator === "multiply") {
    return multiply(a, b);
  } else if (operator === "divide") {
    return divide(a, b);
  } else {
    return;
  }
}

function analyzeArray(array, property) {
  function average(arr) {
    let sum = 0;
    arr.forEach((element) => {
      sum += element;
    });
    return sum / arr.length;
  }

  function min(arr) {
    let min = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  function max(arr) {
    let max = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  function length(arr) {
    return arr.length;
  }

  if (property === "average") {
    return average(array);
  } else if (property === "min") {
    return min(array);
  } else if (property === "max") {
    return max(array);
  } else if (property === "length") {
    return length(array);
  } else {
    return;
  }
}

module.exports = { sum, capitalize, calculate, analyzeArray };
