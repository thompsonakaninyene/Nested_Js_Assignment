let celsius = Number(prompt("Enter the temperature range"));
let fehrenheit = celsiusToFahrenheit(celsius);

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(`${celsius} is equivilent to ${fehrenheit}`)

