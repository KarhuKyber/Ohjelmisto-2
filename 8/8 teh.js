'use strict';


const startYear = parseInt(prompt('Enter the start year:'), 10);
const endYear = parseInt(prompt('Enter the end year:'), 10);

const output = document.getElementById('output');


let listHTML = '<ul>';


for (let year = startYear; year <= endYear; year++) {

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    listHTML += `<li>${year}</li>`;
  }
}

listHTML += '</ul>';

// Display the list in the HTML document
output.innerHTML = listHTML;
