//11.10.24 1. tund
//let age = 21;
//let message = age >= 18 ? "You are an adult" : "You are a minor";
//console.log(message);

//let purchaseAmount = 125;
//let discount = purchaseAmount >= 100 ? 10 : 0;  // Muutsin 'count' -> 'discount'
//console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);

//let day = 2;
//switch(day){
//case 1:
 //   console.log("It's Monday");
 //   break;
//case 2:
//    console.log("It's Tuesday");
 //   break;
//case 3:
//    console.log("It's Wendsday");
//    break;
//case 4:
//    console.log("It's Thursday");
//    break;
//case 5:
//    console.log("It's Friday");
//    break;
//case 6:
//    console.log("It's Saturday");
 //   break;
//case 7:
    //console.log("It's Sunday");
  //  break;
//default:
//    console.log("It's not a day");
//    break;
//} 

//string 
//let userName = "Brocode";

//console.log(userName.lastIndexOf("o"));
//userName = userName.toUpperCase();
//userName = userName.repeat(2);
//userName = userName.startsWith(" ");
//let result = userName.includes(" ");
//if(result) {
//    console.log("The username contains a space: " + userName);
//} else {
//    console.log("The username does not contain any spaces.");
//}
//console.log(userName);

//string slicing
//const fullName = "Bro Code";

//let firstname = fullName.slice(0, 3);
//let lastname = fullName.slice(4, 8);



//let firtChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1);

//let firstname = fullName.slice(0, fullName.indexOf(" "));
//let lastname = fullName.slice(fullName.indexOf(" ") +1);

//console.log(firstname);
//console.log(lastname);

//const email = "sander.soovali@voco.ee";

//let username = email.slice(0, email.indexOf("@"));
//let extension = email.slice(email.indexOf("@") + 1);

//console.log(username);
//console.log(extension);

// method chaining
// no method
//let userName = window.prompt("Enter your username: ");

//userName = userName.trim();  // Eemaldab tühikud algusest ja lõpust
//let letter = userName.charAt(0).toUpperCase();  // Võtab esimese tähe ja teeb selle suureks

//let extension = userName.slice(1).toLowerCase();  // Võtab ülejäänud osa stringist ja teeb väikesteks tähtedeks
//userName = letter + extension;  // Kombineerib esimese tähe ja ülejäänud osa

//console.log(userName);  // Kuvab kasutajanime, kus esimene täht on suur ja ülejäänud on väikesed

// method
//userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
//console.log(userName);
/* 2. tund*/

/*and - &&
or - ||
not - !*/

/*const temp = 20;
if(temp > 0 && temp > 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}*/
/*const isSunny = true;
if(isSunny){
    console.log("It is SUNNY");
}
else{
    console.log("It is CLOUDY");
}*/

