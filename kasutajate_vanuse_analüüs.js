// Andmed: nimed ja vanused
const users = [ 
    {name: "John", age: 25 }, 
    {name: "Alice", age: 30 }, 
    {name: "Bob", age: 20 }, 
    {name: "Jane", age: 35 }, 
    {name: "Tom", age: 40 }, 
    {name: "Sara", age: 17 }
];

// Kasutajad, kes on vanemad kui 25 aastat
const usersOver25 = users.filter(user => user.age > 25);

// Tulemus
console.log("Kasutajad, kes on vanemad kui 25:", usersOver25);

// Lisame täiskasvanustatuse igale kasutajale
const updatedUsers = users.map(user => {
    return {
        name: user.name,
        age: user.age,
        isAdult: user.age >= 18
    };
});

// Tulemus
console.log(updatedUsers);

// Kasutaja nimi ja täiskasvanustatus
updatedUsers.forEach(user => {
    console.log(`${user.name} on täiskasvanu: ${user.isAdult}`);
});

// Keskmine vanus
const totalAge = users.reduce((accumulator, currentUser) => {
    return accumulator + currentUser.age;
}, 0);

// Kasutame users.length, et saada kasutajate arv
const averageAge = totalAge / users.length;

// Tulemus
console.log(`Keskmine vanus on: ${averageAge.toFixed(2)} aastat.`);

// Funktsioon, mis kontrollib, kas kasutaja on vanem kui 25
const isOlderThan25 = (user) => {
    return user.age > 25; // true kui vanus üle 25
};

// Testime esimese kasutajaga
console.log(isOlderThan25(users[0])); // Kontrollib "John" objekti
console.log(isOlderThan25(users[1])); // Kontrollib "Alice" objekti

// Kui soovite kontrollida kogu massiivi kasutajaid
const usersOlderThan25 = users.filter(isOlderThan25);
console.log(usersOlderThan25);

//funktsiooni lisamine addisadultfield
const addIsadultField = (user) => {
    user.isAdult = user.age >= 18;
    return user;
}

//tulemus 
console.log(updatedUsers);

//loguser funktsioon
const loguser = (user) => {
    console.log(`kasutaja nimi: ${user.name}, Täiskasvanustatus: ${user.isAdult ? 'Täisealine' : 'alaealine'}`);
}

//tulemus
console.log(updatedUsers);