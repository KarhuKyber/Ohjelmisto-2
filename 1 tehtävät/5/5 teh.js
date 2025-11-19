'use strict';

// Ask the user for a year
const year = parseInt(prompt('Enter a year:'), 10);

let message = '';

// Check leap year logic
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  message = `${year} is a leap year.`;
} else {
  message = `${year} is not a leap year.`;
}

// Print result on the HTML page
document.getElementById('output').innerHTML = `<p>${message}</p>`;
