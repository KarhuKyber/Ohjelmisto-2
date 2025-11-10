'use strict';

const dogs = [];

for (let i = 0; i < 6; i++) {
  const name = prompt(`Enter the name of dog ${i + 1}:`);
  dogs.push(name);
}

dogs.sort().reverse();

const output = document.getElementById('output');


for (const dog of dogs) {
  output.innerHTML += `<li>${dog}</li>`;
}

output.innerHTML += '</ul>';
