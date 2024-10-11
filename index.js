// This is my firt JavaScript code!
//console.log('Hello World');
//let name ='Sander';
//console.log(name);
// cannot be a reserved keyword
// should be meaningful
//cannot start with a number (1name)
// cannot contain a space or hypen (-)
// are case-sensiteve

//let firstname = 'Sander';
//et lastname = 'Sooväli';

//const interestRate = 0.3;
//interestRate
//console.log(interestRate);

//let name2 = 'Mark'; //string literal
//let age = '23'; // number 
//let isApproved = false; // boolean li
//let firstname = undefined;
//let selectedColor = null;

//let name3 = 'Tom';
//let age2 = '30';
//let person = {
//    name: 'Sander',
//    age: 23
//}

//dot notation
//person.name = 'John';

//bracket Notation
////person[selection] = 'Mary'

//et selectedColor = ['red', 'blue'];
//selectedColor[2] = 'green';
//console.log(selectedColor.length);
//
//function greet(name, lastname) {
 //   console.log('Hello ' + name + ' ' + lastname);
//}

//greet('John', 'Smith');

//let aPrompt = prompt('what is the letter?');
//console.log(aPrompt)

//var a = 15;
//var b = 20;

// swap a and b
//var temp = a;
//a = b;
//b = temp;

// 04.10.2024
//math
//Math.PI

//console.log(Math.PI)
//let x = 3.99;
//let y =2;
//let z;

//z = Math.round(x); - ümardage kümnendarvud lähima väärtuseni.
//z = Math.floor(x); - tagastab lähima täisarvu väärtuse (esitatud topeltväärtusena), mis on väiksem või võrdne antud topeltväärtusega
//z = Math.celi(x); - converts the number to the nearest integer greater than or equal to the given number
//z = Math.cos
//console.log(z);

// random number gen
//const min = 50;
//const max = 100;
//let randomNum = Math.floor(Math.random() * 100) +1;

//console.log(randomNum);
//const mybutton = document.getElementById("mybutton");
//const mylable1 = document.getElementById("mylable1");
//const mylable2 = document.getElementById("mylable1");
//const mylable3 = document.getElementById("mylable1");
//const min = 1;
//const max = 6;
//let randomNum1;
//let randomNum2;
//let randomNum3;

//mybutton.onclick = function(){
    //randomNum1 = Math.floor(Math.random() * max) + min;
    //randomNum2 = Math.floor(Math.random() * max) + min;
    //randomNum3 = Math.floor(Math.random() * max) + min;
    //console.log(randomNum);
    //mylable1.textContent = randomNum1;
    //mylable2.textContent = randomNum2;
    //mylable3.textContent = randomNum3;
//}

let age = prompt("age?");
if(!isNaN(age)){
    console.log("on number");
    if(age >=7 && age <=16){
        console.log("Oled põhikooli õpilane");
     } else {
         console.log("Vanus ei ole vahemikus 7 kuni 16");
     }
     
     if(age >=17 && age <=20){
         console.log("Oled gümnaasiumi õpilane");
     } else {
         console.log("Vanus ei ole vahemikus 17 kuni 20")
     }
     
     if(age >= 20){
         console.log("Oled täiskasvanu");
     } else {
         console.log("Vanus ei ole vahemik 20+");
     } 
    }
    else{
        console.log("pole number");
    }
