'use strict';

const numbers = [];

while (true) {
  const input = parseFloat(prompt('Enter a number:'));

  if (isNaN(input)) {
    alert('Please enter a valid number.');
    continue;
  }
  if (numbers.includes(input)) {
    alert(`The number ${input} has already been given. Stopping program.`);
    break;
  }

  numbers.push(input);
}

numbers.sort((a, b) => a - b);

console.log('Numbers in ascending order:');
for (const num of numbers) {
  console.log(num);
}
