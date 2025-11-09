'use strict';


const number = parseInt(prompt('Enter an integer:'), 10);
const output = document.getElementById('output');

let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  output.innerHTML = `<p>${number} is a prime number.</p>`;
} else {
  output.innerHTML = `<p>${number} is not a prime number.</p>`;
}
