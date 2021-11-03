// pour le troisième page html


/*var q3messagePoint3 = 0;
function q3calcule() {
var q3message1 = ""
var q3num1 = parseInt(document.getElementById("q3num1Q1").value);
var q3num2 = parseInt(document.getElementById("q3num2Q1").value);
var q3randomNumber1 = Math.floor(Math.random() * 4) + 1; 

if(q3randomNumber1 == 1) {
 q3message1 += " " + (q3num1+q3num2);
} else if (q3randomNumber1 == 2) {
q3message1 += " " + (q3num1-q3num2);
} else if (q3randomNumber1 == 3) {
q3message1 += " " + (q3num1 * q3num2);
} else if (q3randomNumber1 == 4) {
q3message1 += " " + (q3num1 / q3num2);
} else {
("Rien selecter");
}
var q3affiche = document.getElementById("q3divAffiche1");
        var q3message = "<div id='q3reponq1'><strong> La réponse est:" + q3message1 + "<br><br> Équation : <br>" + q3num1 + " ⍰ " + q3num2 + " =" + q3message1 + "</strong></div>"
            q3affiche.innerHTML=q3message; 


 document.getElementById("q3btn2Q1").onclick = function q3calcule2(){ 
 var q3radioOperation1 = 
 var q1message2 = "";document.getElementsByName("q3rad1");
 var q3operation1 = "";
       for (var i = 0; i < q3radioOperation1.length; i++) {
           if (q3radioOperation1[i].checked) {
               q3operation1 = q3radioOperation1[i].value;
           } 
       } 
        
     if (q3radioOperation1[0].checked == true && q3randomNumber1 == 1) {
    q1message2 += "Bonne réponse";
    q3messagePoint3 += 1;
   //alert(q3messagePoint3);
     } else if (q3radioOperation1[1].checked == true q3randomNumber1 == 2) {
    q1message2 += "Bonne réponse";
    q3messagePoint3 += 1;
   //alert(q3messagePoint3);
     } else if (q3radioOperation1[2].checked == true && q3randomNumber1 == 3) {
    q1message2 += "Bonne réponse";
    q3messagePoint3 += 1;
   //alert(q3messagePoint3);
     } else if (q3radioOperation1[3].checked == true && q3randomNumber1 == 4) {
    q1message2 += "Bonne réponse";
    q3messagePoint3 += 1;
   //alert(q3messagePoint3);
     } else {
    q1message2 += "Mauvaise réponse";
     }

    if (q1message2 == "Bonne réponse") {
        var q1affiche2 = document.getElementById("q1divAffiche2");
        var q1message3 =  "<div id='bonneRep'><strong>" + q1message2 + "<br>  Vous avez gagnez un point" + ".</strong> <div id='q1prochainPage'> <img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80'  </div>"
            q1affiche2.innerHTML=q1message3; 
            
    } else if (q1message2 == "Mauvaise réponse") {
      var q1message3 = "<div id='mauvRep'><strong>" + q1message2 + "<br> Votre pointage n'a pas changer <br> <img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80'  </strong></div>";
      q1affiche2.innerHTML=q1message3;

    }
q1affiche.innerHTML = "<div id='titreq1'>Question 3:</div>" + " <input id='q3rad1' name='q3rad1' type='radio' value='+' /><label for='q3rad1'>+</label> <br>  <input id='q3rad2' name='q3rad1' type='radio' value='-'/><label for='q3rad2'>-</label> <br><input id='q3rad3' name='q3rad1' type='radio' value='*' /><label for='q3rad3'>x</label> <br><input id='q3rad4' name='q3rad1' type='radio' value='/' />   <label for='q3rad4'>/</label> <br><br>";
 }

 }


 // pour le quatrième page html


 var messagePoint4 = 0;
function q4calcule() {
var q4message1 = ""
var q4num1 = parseInt(document.getElementById("q4num1Q1").value);
var q4num2 = parseInt(document.getElementById("q4num2Q1").value);
var q4num3 = parseInt(document.getElementById("q4num3Q1").value);
var randomNumber4 = Math.floor(Math.random() * 4) + 1; 
 
if(randomNumber4 == 1) {
 q4message1 += " " + ((q4num1+q4num2)+q4num3);
} else if (randomNumber4 == 2) {
q4message1 += " " + ((q4num1-q4num2)-q4num3);
} else if (randomNumber4 == 3) {
q4message1 += " " + ( (q4num1 * q4num2) * q4num3);
} else if (randomNumber4 == 4) {
q4message1 += " " + ( (q4num1 / q4num2 )/ q4num3);
} else {
("Rien selecter");
}
var q4affiche = document.getElementById("q4divAffiche1");
        var q4message = "<div id='q4reponq1'><strong> La réponse est:" + q4message1 + "<br><br> Équation : <br>" + q4num1 + " ⍰ " + q4num2 + " ⍰ "  + q4num3 + " =" + q4message1 + "</strong></div>"
            q4affiche.innerHTML=q4message; 


 document.getElementById("q4btn2Q1").onclick = function q4calcule2(){ 
 var q4radioOperation1 = document.getElementsByName("q4rad1");
 var q4message2 = "";
 var q4operation1 = "";
       for (var i = 0; i < q4radioOperation1.length; i++) {
           if (q4radioOperation1[i].checked) {
               q4operation1 = q4radioOperation1[i].value;
           } 
       } 
        
     if (q4radioOperation1[0].checked == true && randomNumber4 == 1) {
    q4message2 += "Bonne réponse";
    messagePoint4 += 1;
   alert(messagePoint4);
     } else if (q4radioOperation1[1].checked == true && randomNumber4 == 2) {
    q4message2 += "Bonne réponse";
    messagePoint4 += 1;
   alert(messagePoint4);
     } else if (q4radioOperation1[2].checked == true && randomNumber4== 3) {
    q4message2 += "Bonne réponse";
    messagePoint4 += 1;
   alert(messagePoint4);
     } else if (q4radioOperation1[3].checked == true &&randomNumber4 == 4) {
    q4message2 += "Bonne réponse";
    messagePoint4 += 1;
   alert(messagePoint4);
     } else {
    q4message2 += "Mauvaise réponse";
    messagePoint4 += 0;
   alert(messagePoint4);
     }

    var q4affiche2 = document.getElementById("q4divAffiche2");
    if (q4message2 == "Bonne réponse") {
        var q4message3 =  "<div id='q4bonneRep'><strong>" + q4message2 + "<br>  Vous avez gagnez un point" + ". <div id='q4prochainPage'><a href='symboles5.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
            q4affiche2.innerHTML=q4message3; 
    } else if (q4message2 == "Mauvaise réponse") {
      var q4message3 = "<div id='q4mauvRep'><strong>" + q4message2 + "<br> Votre pointage n'a pas changer" +  ". <div id='q4prochainPage'><a href='symboles5.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
      q4affiche2.innerHTML=q4message3;
    } 
 }

 }


// pour le cinquième page html


var q5messagePoint5 = 0;
function q5calcule() {
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
   alert(q5messagePoint5);
     } else if (q5radioOperation1[1].checked == true && q5randomNumber1 == 2) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 += 1;
   alert(q5messagePoint5);
     } else if (q5radioOperation1[2].checked == true && q5randomNumber1 == 3) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 += 1;
   alert(q5messagePoint5);
     } else if (q5radioOperation1[3].checked == true && q5randomNumber1 == 4) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 += 1;
   alert(q5messagePoint5);
     } else {
    q5message2 += "Mauvaise réponse";
    q5messagePoint5 += 0;
   alert(q5messagePoint5);
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
*/