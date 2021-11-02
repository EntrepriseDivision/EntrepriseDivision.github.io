var q5messagePoint5 = "";
 document.getElementById("q5btnQ1").onclick = function q5calcule() {
var q5message1 = ""
var q5num1 = parseInt(document.getElementById("q5num1Q1").value);
var q5num2 = parseInt(document.getElementById("q5num2Q1").value);
var q5randomNumber1 = Math.floor(Math.random() * 4) + 1; 
 console.log(q5randomNumber1);
if(q5randomNumber1 == 1) {
 q5message1 += " " + (q5num1+q5num2);
} else if (q5randomNumber1 == 2) {
q5message1 += " " + (q5num1-q5num2);
} else if (q5randomNumber1 == 3) {
q5message1 += " " + (q5num1 * q5num2);
} else if (q5randomNumber1 == 4) {
q5message1 += " " + (q5num1 / q5num2);
} else {
("Rien selecter");
}
var q5affiche = document.getElementById("q5divAffiche1");
        var q5message = "<div id='q5reponq1'><strong> La réponse est:" + q5message1 + "<br><br> Équation : <br>" + q5num1 + " ⍰ " + q5num2 + " =" + q5message1 + "</strong></div>"
            q5affiche.innerHTML=q5message; 


 document.getElementById("q5btn2Q1").onclick = function q5calcule2(){ 
 var q5radioOperation1 = document.getElementsByName("q5rad1");
 var q5message2 = "";
 var q5operation1 = "";
       for (var i = 0; i < q5radioOperation1.length; i++) {
           if (q5radioOperation1[i].checked) {
               q5operation1 = q5radioOperation1[i].value;
           } 
       } 
        
     if (q5radioOperation1[0].checked == true && q5randomNumber1 == 1) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 += 1;
     } else if (q5radioOperation1[1].checked == true && q5randomNumber1 == 2) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 += 1;
     } else if (q5radioOperation1[2].checked == true && q5randomNumber1 == 3) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 += 1;
     } else if (q5radioOperation1[3].checked == true && q5randomNumber1 == 4) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 += 1;
     } else {
    q5message2 += "Mauvaise réponse";
    q5messagePoint5 += 0;
     }

    var q5affiche2 = document.getElementById("q5divAffiche2");
    if (q5message2 == "Bonne réponse") {
        var q5message3 =  "<div id='q5bonneRep'><strong>" + q5message2 + "<br>  Vous avez gagnez un point" + ".</strong> <div id='q5prochainPage'><a href='pointage.html'><img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/SCORE_logo.jpg' width='80' </a> </div></div>"
            q5affiche2.innerHTML=q5message3; 
    } else if (q5message2 == "Mauvaise réponse") {
      var q5message3 = "<div id='q5mauvRep'><strong>" + q5message2 + "<br> Votre pointage n'a pas changer" + ". <div id='q5prochainPage'><a href='pointage.html'><img src='https://upload.wikimedia.org/wikipedia/commons/3/3b/SCORE_logo.jpg' width='80' </a> </div> </strong></div>"
      q5affiche2.innerHTML=q5message3;
    }

 
 }









 }