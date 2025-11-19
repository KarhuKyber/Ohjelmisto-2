'use strict';


const numDice = parseInt(prompt('Enter the number of dice to roll:'), 10);

let sum = 0;


for (let i = 0; i < numDice; i++) {
  // Generate a random number between 1 and 6
  const roll = Math.floor(Math.random() * 6) + 1;
  sum += roll;
}

document.getElementById('output').innerHTML = `<p>You rolled ${numDice} dice. The sum of the rolls is ${sum}.</p>`;
