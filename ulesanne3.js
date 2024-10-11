let x  = Number(prompt("x?"));
let y = Number(prompt("y?"));
let result = prompt("tehe?");

switch(result){
case "a":
        console.log(x + y);
        break;
case "s":
        console.log(x - y);   
        break;
case "m":
        console.log(x * y);
        break;
case "d":
        console.log(x / y);
        break;
case "e":
        console.log(x ** y);
        break;
case "r":
        console.log(x % y);
        break;
default:
    console.log("Palun kirjuta numbrid");
    break;
} 