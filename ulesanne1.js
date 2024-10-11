let age = prompt("age?");
age = Number(age);
if (isNaN(age)){
    console.log("Sisend polnud õige. Palun kirjuta number.");
} 
else {
    if(age >=7 && age <=16){
        console.log("Oled põhikooli õpilane (sööd kell 11)");
    } else {
        console.log("Vanus ei ole vahemikus 7 kuni 16");
    }
    if(age >=17 && age <=20){
        console.log("Oled gümnaasiumi õpilane (sööd kell 11)");
    }else {
            console.log("Vanus ei ole vahemikus 17 kuni 20");
        }
    if(age >=21 ){
        console.log("Oled täiskasvanu (sööd kell 12)");   
    }else {
        console.log("Vanus ei ole vahemikus +21");
        }
}