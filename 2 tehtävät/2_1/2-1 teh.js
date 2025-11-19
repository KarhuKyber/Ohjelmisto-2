'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = parseFloat(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
}

const output = document.getElementById('output');

for (let i = numbers.length - 1; i >= 0; i--) {
  output.innerHTML += `<li>${numbers[i]}</li>`;
}

output.innerHTML += '</ul>';
