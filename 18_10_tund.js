//wile loop//
//
/*let loggedIn = false;
let userName;
let password;

while (!loggedIn) {
   userName = window.prompt(`Enter your username`);
   password = window.prompt(`Enter your password`);
    
    if (userName === "myusername" && password === "mypassword") {
        loggedIn = true;
        console.log("You are logged in");
    } else {        
        console.log("Invalid credentials! Please try again");
    }
}
*/



//for loop
//for(let i= 1; i < 5; i ++){
//    console.log(i);

//}
const randomnumber = Math.round(Math.random() * 100);
let arvatud = false;
let number;
let attempts = 5;
console.log(randomnumber);

while(attempts > 0){
    number = Number(window.prompt(`Enter your number`));


while (number !== randomnumber){
     number = Number(window.prompt(`Enter your number`));
     console.log(number);
     if(!isNaN(number)){
            if(number === randomnumber){
                alert(`võidsid mängu ${number} õige number oli ${randomnumber}`)
            }
            else if(number > randomnumber){
                alert("liiga suur")
            } else {
                alert("liiga väike")
            }

    
     } else{
        alert("see ei ole number, sisesta number")
     }
     attempts --;

     if (attempts === 0){
        alert("katsed pole rohkem, tee uus mäng")
     }
     
}
}

