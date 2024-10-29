/*function CelsiusToFahrenheit(Celsius){
    return(Celsius * 9/5 + 32);{}
}


let temperatureInCelsius = 20
let temperatureInFahrenheit = CelsiusToFahrenheit(temperatureInCelsius);

console.log(`See on ${temperatureInCelsius} Celsiuse kraad`); // Celsiuse temperatuur
console.log(`See on ${temperatureInFahrenheit} Fahrenheit'i kraad`); // Fahrenheit'i temperatuur
*/
function FahrenheitToCelsius(Fahrenheit){
    return(Fahrenheit - 32 * 5/9);{}
}
let temperatureInFahrenheit = 43
let temperatureInCelsius = FahrenheitToCelsius(temperatureInFahrenheit);

console.log(`See on ${temperatureInFahrenheit} Fahrenheit kraad`);
console.log(`See on ${temperatureInCelsius} Celsius kraad`);