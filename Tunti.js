// kysy käyttäjältä viisi numeroa
const numerot: number[] = [];

for (let i: number = 1; i <= 5; i++) {
    numerot.push(parseFloat(prompt("Anna numero") || "0"));
}

console.log(numerot);

// tulosta numerot vastakkaisessa järjestyksessä
// käyttämättä reverse-funktiota
for (let i: number = numerot.length - 1; i >= 0; i--) {
    console.log(numerot[i]);
}