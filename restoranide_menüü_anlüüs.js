//Funktsioon menüü analüüsimiseks
function analyzeMenu(menuItems){
    //Odavate toodete leidmine
    const cheapItemsArray = menuItems.filter(item => item.price < 10);

    //Odavate toodete nimed:
    const cheapItemNames = cheapItemsArray.map(item => item.name);

    // Odavate toodete kuvamine
    cheapItemsArray.forEach(item => {
    console.log(`Toote nimi: ${item.name}, hind: ${item.price}€`);
});

    // Odavate toodete kogusumma leidmine
    const totalCost = cheapItemsArray.reduce((sum, item) => + item.price, 0);

    //Objekti tagastamine
    return {
    cheapItems: cheapItemNames,
    totalCost: totalCost
    };
}
//menü
const menuItems = [
    { name: "Caesar Salad", price: 8.5, category: "starter" },
    { name: "Beef Burger", price: 12.0, category: "main" },
    { name: "Spaghetti Carbonara", price: 9.5, category: "main" },
    { name: "Chocolate Cake", price: 5.0, category: "dessert" },
    { name: "Ice Cream", price: 3.5, category: "dessert" }
];

// Funktsiooni käivitamine ja tulemuse kuvamine
const result = analyzeMenu(menuItems);
console.log("Odavad tooted:", result.cheapItems);
console.log("Odavate toodete kogusumma:", result.totalCost + "€");