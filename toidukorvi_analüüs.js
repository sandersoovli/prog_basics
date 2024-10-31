//toidukorv
const shoppingCart = [
    {name: "apple", quantity: 4 },
    {name: "banana", quantity: 2 },
    {name: "orange", quantity: 5 },
    {name: "milk", quantity: 1 },
    {name: "bread", quantity: 2 }
];

//koguarvu leidmine
const totalQuantity = shoppingCart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;// liidame akumulaatorisse praeguse toote koguse
}, 0); //Algväärtus 0

console.log(`Kogu toidukorvi kogus: ${totalQuantity}`);

// uue toote lisamine
const newProduct = {name: "yougurt", quantity:3 };
shoppingCart.push(newProduct);
//tulemus
console.log("Uendatud ostukorv", shoppingCart);

// apple ostimine
const appleItem = shoppingCart.find(item => item.name === "apple");
//kui apple on olemas siis suurendame 3 võrra
    if (appleItem) {
        appleItem.quantity += 3;
    } else {
        //kui apple'it ei ole siis lisame
        shoppingCart.push({name: "apple", quantity: + 3});
    }
//kuva uus ostukorvis sisu
console.log("Uuendatud ostokorv", shoppingCart);

//banaani indexi otsimine
const bananaIndex = shoppingCart.findIndex(item => item.name === "banana");
    //banaani eemaldamine, kui on olemas
    if (bananaIndex !== -1) {
        shoppingCart.splice(bananaIndex, 1);
    }
// kuva uus ostukorv
console.log("Uuendatud ostukorv", shoppingCart);
//uue massivi loomine
const ProductNames = shoppingCart.map(item => item.name);
//nimekirja kuvamine
console.log("Kõigi toodete nimed:", ProductNames);

// Kontrollin, kas "milk" on olemas
const hasMilk = shoppingCart.some(item => item.name === "milk");

// Tulemuse kontroll
console.log("Kas ostukorvis on 'milk'?", hasMilk);

//sorteeri otukorvi kahanevas
shoppingCart.sort((a, b) => b.quantity - a.quantity);
//tulemuse kuva
console.log("Sorteeritud ostukorv", shoppingCart);