// Algata a väärtusega 10
var a = 10;

// Algata b väärtusega 20
var b = 20;      


// Loo ajutine muutuja, et hoida a väärtust
var temp = a;   // temp hoiab nüüd 10

// Määra b väärtus a-le
a = b;          // a hoiab nüüd 20

// Määra temp-s hoitud väärtus b-le
b = temp;      // b hoiab nüüd 10

// Kuvame muutuja a ja b väärtused konsoolis
console.log("a väärtus pärast vahetust:", a);
console.log("b väärtus pärast vahetust:", b);