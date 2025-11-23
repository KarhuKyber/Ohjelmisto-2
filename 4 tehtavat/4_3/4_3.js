'use strict';

const form = document.getElementById("search-form");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const searchTerm = document.getElementById("query").value;
    const url = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

    resultsDiv.innerHTML = ''; // Tyhjennä vanhat tulokset

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("Search results:", data);

        data.forEach(tvShow => {
            const show = tvShow.show;

            //  <article>
            const article = document.createElement("article");

            // Nimi
            const title = document.createElement("h2");
            title.textContent = show.name;
            article.appendChild(title);

            // Linkki
            const link = document.createElement("a");
            link.href = show.url;
            link.target = "_blank";
            link.textContent = "More details";
            article.appendChild(link);

            // Kuva
            const img = document.createElement("img");
            img.src = show.image?.medium || '';
            img.alt = show.name;
            article.appendChild(img);

            // Summary
            const summary = document.createElement("div");
            summary.innerHTML = show.summary || "No summary available.";
            article.appendChild(summary);

            // Lisää article results-diviin
            resultsDiv.appendChild(article);
        });

    } catch (error) {
        console.log("Fetch error:", error);
    }
});
