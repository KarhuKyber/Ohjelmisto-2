'use strict';

const numParticipants = parseInt(prompt('Enter the number of participants:'), 10);

const names = [];

for (let i = 0; i < numParticipants; i++) {
  const name = prompt(`Enter the name of participant ${i + 1}:`);
  names.push(name);
}

names.sort();

const output = document.getElementById('output');

for (const name of names) {
  output.innerHTML += `<li>${name}</li>`;
}

output.innerHTML += '</ol>';
