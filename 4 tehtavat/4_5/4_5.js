'use strict';

async function getJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Joke:", data.value);
    } catch (error) {
        console.log("Error:", error);
    }
}

getJoke();
