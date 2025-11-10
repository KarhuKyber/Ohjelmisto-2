'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const output = document.getElementById('output');
output.innerHTML = '<h2>Dice rolls:</h2><ul>';

let roll;
do {
  roll = rollDice();
  console.log(`Rolled: ${roll}`);
  output.innerHTML += `<li>${roll}</li>`;
} while (roll !== 6);

output.innerHTML += '</ul>';
