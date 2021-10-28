
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

var radiosReponse = document.getElementsByName("rad1");
       var messageReponseOperation = "";
       var messagePoint
       for (var i = 0; i < radiosReponse.length; i++) {
           if (radiosReponse[i].checked) {
               reponseOperation = radiosReponse[i].value;
           } 
       } 
           if(radiosReponse[0].checked==true && randomNumber1 == 1) {
            messageReponseOperation += "Bon reponse!";
            messagePoint += " " + 1;
           } else if (radiosReponse[1].checked==true && randomNumber1 == 2) {
             messageReponseOperation += "Bon reponse!";
             messagePoint += " " + 1;
           } else if (radiosReponse[2].checked == true && randomNumber1 == 3) {
            messageReponseOperation += "Bon reponse!";
            messagePoint += " " + 1;
           } else if (radiosReponse[3].checked == true && randomNumber1 == 4) {
            messageReponseOperation += "Bon reponse!";
            messagePoint += " " + 1;
           } else {
            messageReponseOperation += "Mauvais reponse!"
            messgaePoint += " " + 0;
           }

       var afficheReponse = document.getElementById("divAffiche2");
        var message2 = "<br>  + messageReponseOperation + " "
            afficheReponse.innerHTML=message2;  
}


