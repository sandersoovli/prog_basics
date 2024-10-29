//25.10 tund//
//array//

//const fruits = ["apple","orange", "banana", "orange"]

//fruits[3] = "coconut"

//let size = fruits.length;

//let fruits = ["apple","orange", "banana", "mango"]

//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("kiwi");

//let numOfFruits = fruits.length
//let index = fruits.indexOf("kiwi");
//let index = fruits.indexOf("kiwi"); console.log näitab ="kiwi-ga on -1"
//console.log(index);

//for(let i = 0; i < fruits.length; i++){
//    console.log(fruits[i]);
//}

//ÜL2

//let books = ["War and Peace", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "Pride and Prejudice"];
//let temperatures = [18, 21, 19, 22, 20, 17, 16];

//let numOfbooks = books.length;
//console.log(numOfbooks);

//let books = ["War and Peace", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "Pride and Prejudice"];

// Lühima raamatu leidmine
//let lühimRaamat = books.reduce((shortest, currentBook) => {
//    return currentBook.length < shortest.length ? currentBook : shortest;
//});

//console.log("Lühim raamat on:", lühimRaamat);

//let books = ["War and Peace", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "Pride and Prejudice"];

//books.sort();
//books.forEach(books => console.log(books));

//const hasGreatGatsby = books.includes("The Great Gatsby");
// järgmine tund jätkan

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