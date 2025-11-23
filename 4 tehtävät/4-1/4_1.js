'use strict';

const form = document.getElementById("search-form");

form.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const searchTerm = document.getElementById("query").value;
    const url = "https://api.tvmaze.com/search/shows?q=" + searchTerm;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log("Error: " + response.status);
            return;
        }

        const data = await response.json();
        console.log("Search results:", data);

        if (data.length > 0) {
            console.log("First show:");
            console.log("Name:", data[0].show.name);
            console.log("Genres:", data[0].show.genres);
            console.log("Summary:", data[0].show.summary);
        }

    } catch (error) {
        console.log("Fetch error:", error);
    }
});
