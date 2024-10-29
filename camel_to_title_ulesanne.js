
// Funktsioon, mis jagab camelCase sõnad
function getWords(camelCaseStr) {
    return camelCaseStr.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(' ');
}

// Funktsioon camelCase stringi konverteerimiseks pealkirja stiiliks
function camelToTitleCase(camelCaseString) {
    // Kontrollime, kas sisend on tühi
    if (camelCaseString === '') {
        return '';
    }
    
    const words = getWords(camelCaseString); // Jagame camelCase sõnadeks
    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Suurendame esimese tähe
    
    return titleCaseWords.join(' '); // Tagastame pealkirja stiilis stringi
}

// Näidis
const input = 'helloWorldExample';
const output = camelToTitleCase(input);
console.log(output); // "Hello World Example"
