var messagePoint1 = "";
 document.getElementById("btnQ1").onclick = function calcule() {
var message1 = ""
var q1num1 = parseInt(document.getElementById("num1Q1").value);
var q1num2 = parseInt(document.getElementById("num2Q1").value);
var randomNumber1 = Math.floor(Math.random() * 4) + 1; 
 console.log(randomNumber1);
if(randomNumber1 == 1) {
 message1 += " " + (q1num1+q1num2);
} else if (randomNumber1 == 2) {
message1 += " " + (q1num1-q1num2);
} else if (randomNumber1 == 3) {
message1 += " " + (q1num1 * q1num2);
} else if (randomNumber1 == 4) {
message1 += " " + (q1num1 / q1num2);
} else {
("Rien selecter");
}
var affiche = document.getElementById("divAffiche1");
        var message = "<div id='reponq1'><strong> La réponse est:" + message1 + "<br><br> Équation : <br>" + q1num1 + " ⍰ " + q1num2 + " =" + message1 + "</strong></div>"
            affiche.innerHTML=message; 


 document.getElementById("btn2Q1").onclick = function calcule2(){ 
 var radioOperation1 = document.getElementsByName("rad1");
 var message2 = "";
 var operation1 = "";
       for (var i = 0; i < radioOperation1.length; i++) {
           if (radioOperation1[i].checked) {
               operation1 = radioOperation1[i].value;
           } 
       } 
        
     if (radioOperation1[0].checked == true && randomNumber1 == 1) {
    message2 += "Bonne réponse";
    messagePoint1 += 1;
     } else if (radioOperation1[1].checked == true && randomNumber1 == 2) {
    message2 += "Bonne réponse";
    messagePoint1 += 1;
     } else if (radioOperation1[2].checked == true && randomNumber1 == 3) {
    message2 += "Bonne réponse";
    messagePoint1 += 1;
     } else if (radioOperation1[3].checked == true && randomNumber1 == 4) {
    message2 += "Bonne réponse";
    messagePoint1 += 1;
     } else {
    message2 += "Mauvaise réponse";
    messagePoint1 += 0;
     }

    var affiche2 = document.getElementById("divAffiche2");
    if (message2 == "Bonne réponse") {
        var message3 =  "<div id='bonneRep'><strong>" + message2 + "<br>  Vous avez gagnez un point" + ".</strong> <div id='prochainPage'><a href='symboles2.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div></div>"
            affiche2.innerHTML=message3; 
    } else if (message2 == "Mauvaise réponse") {
      var message3 = "<div id='mauvRep'><strong>" + message2 + "<br> Votre pointage n'a pas changer" + ". <div id='prochainPage'><a href='symboles2.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
      affiche2.innerHTML=message3;
    }

 
 }









 }