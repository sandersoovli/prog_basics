let books = ["War and Peace", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "Pride and Prejudice"];
let temperatures = [18, 21, 19, 22, 20, 17, 16];

let numOfbooks = books.length;
console.log(numOfbooks);

//Lühima raamatu leidmine
let lühimRaamat = books.reduce((shortest, currentBook) => {
    return currentBook.length < shortest.length ? currentBook : shortest;
});

console.log("Lühim raamat on:", lühimRaamat);


books.sort();
books.forEach(books => console.log(books));

const hasGreatGatsby = books.includes("The Great Gatsby");
console.log(hasGreatGatsby);

const hightemperatures = temperatures.filter(temp=> temp > 20);
console.log(hightemperatures);  

// Temperatuuride keskmise arvutamine
const total = temperatures.reduce((sum, temp) => sum + temp, 0);
const averageTemperature = total / temperatures.length; // Keskmine temperatuur

// Kuvame keskmise temperatuuri
console.log(`Keskmine temperatuur: ${averageTemperature.toFixed(2)}`); // Kahendkohaline täpsus
// jätka 7. ja 8. ülesandega

//temperatuuri teisendamine faherheiti
const temperatureInFahrenheit = temperatures.map(temp => temp * 9 / 5 + 32);
console.log("Temperatuurid fahrenheit kraadides:", temperatureInFahrenheit);

// temperatuurid kahanevalt

temperatures.sort((a, b) => b - a);
console.log("Temperatuurid kahaevalt",temperatures);