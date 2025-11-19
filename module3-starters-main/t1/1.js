'use strict';

// Select the element with id="target"
const target = document.getElementById('target');

// Add the HTML inside the element
target.innerHTML = `
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
`;

// Add class "my-list" to the element
target.classList.add('my-list');
