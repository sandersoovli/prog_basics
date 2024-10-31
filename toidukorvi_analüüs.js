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