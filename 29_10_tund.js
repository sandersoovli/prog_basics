//function
// arvutamise funktsioon
function add(x, y){
    let result = x + y;
    return result;
}
//console.log(add (2,3));

function subtract(x ,y){
    let result = x - y;
    return result;
}

console.log(subtract (2, 3));

//callback - kutsub teise funktsiooni tagasi
/*hello();
function hello(){
    console.log("Hello");
/*}
sum(displayConsule, 1 ,2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsule(result){
    console.log(result);
}

//forEach - 
// element index array on kaasas
/*let numbers = [1, 2, 3, 4, 5];

Kasutame forEach'i, et iga elementi kahekordistada
numbers.forEach(double);

Seejärel kuvame iga kahekordistatud elemendi
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2; // Kahekordistame iga elemendi ja salvestame selle tagasi massiivi
}

function display(element) {
    console.log(element); // Kuvame iga elemendi
}
let fruits = ["apple", "orange", "banana", "cocont"];
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(elementi, index, array){
    array[index] = element.toUpperCase();
}
function upperCase(elementi, index, array){
    function toLowerCase()
}
function upperCase(elementi, index, array){
    function capitalize()
}


/*.map 

/*const numbers = [1, 2, 3, 4, 5];

Funktsioon iga elemendi ruudu arvutamiseks
function square(element) {
    return element * element; // Või Math.pow(element, 2);
}

Kasutame map'i, et luua iga elemendi ruutudest uus massiiv
const squares = numbers.map(square);

/*console.log(squares);

/// filter() - kui masiivist on vaja midagi konkreetset

/*let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);

console.log("Paarisarvud:", evenNums);

function isEven(element) {
    return element % 2 === 0; // Tagastab true, kui element on paarisarv
}

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);

console.log("Täiskasvanud vanused:", adults);

function isAdult(element) {
    return element >= 18; // Tagastab true, kui element on 18 või vanem
}

//reduce()

const prices = [5, 30, 10, 25, 15, 20];

// Kasutame reduce() funktsiooni, et leida hindade summa
const total = prices.reduce(sum, 0); // 0 on algväärtus

console.log(`$${total.toFixed(2)}`); // Kasutame template literals

function sum(accumulator, element) {
    return accumulator + element; // Summeerib akumuleeritud ja praeguse elemendi
}*/

// function expression
/*const hello = function(){
    console.log("hello");
}
hello();

setTimeout(hello, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

// Funktsioon iga elemendi ruudu arvutamiseks
const square = numbers.map(function(element) {
    return Math.pow(element, 2); // Arvutab iga elemendi ruudu
});
const cubes = numbers.map(function(element) { // Korrigeeritud sulud
    return Math.pow(element, 3); // Tagastab elemendi kuubi
});

// Alternatiivselt võid kasutada ka arrow funktsiooni
// const square = numbers.map(element => Math.pow(element, 2));

console.log(square);*/

/*const hello = function(){
console.log("hello");
}
hello();
*/

// arrow function
/*const hello = (name, age) => {
    console.log(`Hello ${name}`); // Lisatud tühik "Hello" ja `${name}` vahele
    console.log(`You are ${age} years old`); // Parandatud sulud
};

// Näide funktsiooni kasutamisest
hello("Alice", 25);
*/

