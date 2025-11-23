'use strict';

document.getElementById("search-form").addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const searchTerm = document.getElementById("query").value;
    console.log("Search term:", searchTerm);  // Näkyykö tämä?

    const url = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

    try {
        const response = await fetch(url);
        console.log("Response status:", response.status); // Näkyykö tämä?

        const data = await response.json();
        console.log("Search results:", data); // PÄÄTULOSTUS

    } catch (error) {
        console.log("Fetch error:", error);
    }
});
