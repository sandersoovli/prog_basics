//let vili = prompt("vili?");
let vili = "pirn";
switch(vili){
case "pirn":
   console.log("pirn on puuvili");
  break;
case "õun":
    console.log("õun on populaarne");   
    break;
case "arbuus":
    console.log("arbuus on rohttaim");
    break;
case "banaan":
    console.log("banaan on afrikast");
    break;
default:
    console.log("pole vili");
    break;
} 

let vanus = 16;
let isTaiskasvanu = vanus >= 18 ? true : false;
if (isTaiskasvanu) {
    console.log("täiskasvanu")
} else {
    console.log("alaealine")
}

let alghind = 20;
let lõpphind = isTaiskasvanu ? alghind: alghind -10;
console.log(`piletihind on ${lõpphind}`);