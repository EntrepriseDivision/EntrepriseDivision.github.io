
function calcule() {
var message1 = ""
var num1 = parseInt(document.getElementById("num1Q1").value);
var num2 = parseInt(document.getElementById("num2Q1").value);
var randomNumber1 = Math.floor(Math.random() * 4) + 1; 
 console.log(randomNumber1);
if(randomNumber1 == 1) {
 message1 += " " + (num1+num2);
} else if (randomNumber1 == 2) {
message1 += " " + (num1-num2);
} else if (randomNumber1 == 3) {
message1 += " " + (num1 * num2);
} else if (randomNumber1 == 4) {
message1 += " " + (num1 / num2);
} else {
("Rien selecter");
}
var affiche = document.getElementById("divAffiche1");
        var message = "<br> La reponse est:" + message1 + " "
            affiche.innerHTML=message; 
}


