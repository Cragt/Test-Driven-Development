function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  return string.toUpperCase();
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
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

function caesarCipher(string, shift, encodeOrDecode) {
  if (encodeOrDecode === "encode") {
    let encoded = "";
    for (let i = 0; i < string.length; i++) {
      let character = string[i];
      if (character.match(/[a-z]/i)) {
        let code = string.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          character = String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          character = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
        }
      }
      encoded += character;
    }
    return encoded;
  } else if (encodeOrDecode === "decode") {
    return caesarCipher(string, 26 - (shift % 26), "encode");
  } else
    return console.error(
      "Please enter 'encode' or 'decode' as the third function argument."
    );
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
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
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
console.log(
  caesarCipher("Lwd xh iwt bpc iwpi itaah ndj lwpi id sd?", 67, "decode")
);
module.exports = {
  sum,
  capitalize,
  calculate,
  analyzeArray,
  reverseString,
  caesarCipher,
};
