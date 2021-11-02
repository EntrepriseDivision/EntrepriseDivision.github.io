var messagePoint1 = 0;
function calcule() {
var q1message1 = ""
var q1num1 = parseInt(document.getElementById("num1Q1").value);
var q1num2 = parseInt(document.getElementById("num2Q1").value);
var randomNumber1 = Math.floor(Math.random() * 4) + 1; 
 console.log(randomNumber1);
if(randomNumber1 == 1) {
 q1message1 += " " + (q1num1+q1num2);
} else if (randomNumber1 == 2) {
q1message1 += " " + (q1num1-q1num2);
} else if (randomNumber1 == 3) {
q1message1 += " " + (q1num1 * q1num2);
} else if (randomNumber1 == 4) {
q1message1 += " " + (q1num1 / q1num2);
} else {
("Rien selecter");
}
var q1affiche = document.getElementById("divAffiche1");
        var q1message = "<div id='reponq1'><strong> La réponse est:" + q1message1 + "<br><br> Équation : <br>" + q1num1 + " ⍰ " + q1num2 + " =" + q1message1 + "</strong></div>"
            q1affiche.innerHTML=q1message; 


 document.getElementById("btn2Q1").onclick = function calcule2(){ 
 var q1radioOperation1 = document.getElementsByName("rad1");
 var q1message2 = "";
 var q1operation1 = "";
       for (var i = 0; i < q1radioOperation1.length; i++) {
           if (q1radioOperation1[i].checked) {
               q1operation1 = q1radioOperation1[i].value;
           } 
       } 
        
     if (q1radioOperation1[0].checked == true && randomNumber1 == 1) {
    q1message2 += "Bonne réponse";
    messagePoint1 = messagePoint1 + 1;
     } else if (q1radioOperation1[1].checked == true && randomNumber1 == 2) {
    q1message2 += "Bonne réponse";
    messagePoint1 = messagePoint1 + 1;
     } else if (q1radioOperation1[2].checked == true && randomNumber1 == 3) {
    q1message2 += "Bonne réponse";
   messagePoint1 = messagePoint1 + 1;
     } else if (q1radioOperation1[3].checked == true && randomNumber1 == 4) {
    q1message2 += "Bonne réponse";
     messagePoint1 = messagePoint1 + 1;
     } else {
    q1message2 += "Mauvaise réponse";
     messagePoint1 = messagePoint1 + 0;
     }


    var q1affiche2 = document.getElementById("q1divAffiche2");
    if (q1message2 == "Bonne réponse") {
        var q1message3 =  "<div id='bonneRep'><strong>" + q1message2 + "<br>  Vous avez gagnez un point" + ".</strong> <div id='q1prochainPage'><a href='symboles2.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div></div>"
            q1affiche2.innerHTML=q1message3; 
    } else if (q1message2 == "Mauvaise réponse") {
      var q1message3 = "<div id='mauvRep'><strong>" + q1message2 + "<br> Votre pointage n'a pas changer" + ". <div id='q1prochainPage'><a href='symboles2.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
      q1affiche2.innerHTML=q1message3;
    }

 }


 }


// pour le deuxième html 


var messagePoint2 = 0;
function q2calcule() {
var q2message1 = ""
var q2num1 = parseInt(document.getElementById("num1Q2").value);
var q2num2 = parseInt(document.getElementById("num2Q2").value);
var q2num3 = parseInt(document.getElementById("num3Q2").value);
var randomNumber2 = Math.floor(Math.random() * 4) + 1; 
if(randomNumber2 == 1) {
q2message1 += " " + ((q2num1+q2num2)+q2num3);
} else if (randomNumber2 == 2) {
q2message1 += " " + ((q2num1-q2num2)-q2num3);
} else if (randomNumber2 == 3) {
q2message1 += " " + ( (q2num1 * q2num2) * q2num3);
} else if (randomNumber2 == 4) {
q2message1 += " " + ( (q2num1 / q2num2 )/ q2num3);
} else {
("Rien selecter");
}
var q2affiche = document.getElementById("q2divAffiche");
        var q2message = "<div id='q2reponq1'><strong> La réponse est:" + q2message1 + "<br><br> Équation : <br>" + q2num1 + " ⍰ " + q2num2 + " ⍰ "  + q2num3 + " =" + q2message1 + "</strong></div>"
            q2affiche.innerHTML=q2message; 


 document.getElementById("btn2Q2").onclick = function q2calcule2(){ 
 var q2radioOperation1 = document.getElementsByName("q2rad1");
 var q2message2 = "";
 var q2operation1 = "";
       for (var i = 0; i < q2radioOperation1.length; i++) {
           if (q2radioOperation1[i].checked) {
               q2operation1 = q2radioOperation1[i].value;
           } 
       } 
        
     if (q2radioOperation1[0].checked == true && randomNumber2 == 1) {
    q2message2 += "Bonne réponse";
    messagePoint2 = messagePoint2 + messagePoint1 + 1;
     } else if (q2radioOperation1[1].checked == true && randomNumber2 == 2) {
    q2message2 += "Bonne réponse";
    messagePoint2 = messagePoint2 + messagePoint1 + 1;
     } else if (q2radioOperation1[2].checked == true && randomNumber2 == 3) {
    q2message2 += "Bonne réponse";
    messagePoint2 = messagePoint2 + messagePoint1 + 1;
     } else if (q2radioOperation1[3].checked == true && randomNumber2 == 4) {
    q2message2 += "Bonne réponse";
    messagePoint2 = messagePoint2 + messagePoint1 + 1;
     } else {
    q2message2 += "Mauvaise réponse";
    messagePoint2 = messagePoint2 + messagePoint1 + 0;
     }

    var q2affiche2 = document.getElementById("q2divAffiche2");
    if (q2message2 == "Bonne réponse") {
        var q2message3 =  "<div id='q2bonneRep'><strong>" + q2message2 + "<br>  Vous avez gagnez un point" + ". <div id='q2prochainPage'><a href='symboles3.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
            q2affiche2.innerHTML=q2message3; 
    } else if (q2message2 == "Mauvaise réponse") {
      var q2message3 = "<div id='q2mauvRep'><strong>" + q2message2 + "<br> Votre pointage n'a pas changer" +  ". <div id='q2prochainPage'><a href='symboles3.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
      q2affiche2.innerHTML=q2message3;
    }

 }
var messagePoint11 = messagePoint1
 }

// pour le troisième page html


var q3messagePoint3 = 0;
function q3calcule() {
var q3message1 = ""
var q3num1 = parseInt(document.getElementById("q3num1Q1").value);
var q3num2 = parseInt(document.getElementById("q3num2Q1").value);
var q3randomNumber1 = Math.floor(Math.random() * 4) + 1; 
 console.log(q3randomNumber1);
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
 var q3radioOperation1 = document.getElementsByName("q3rad1");
 var q3message2 = "";
 var q3operation1 = "";
       for (var i = 0; i < q3radioOperation1.length; i++) {
           if (q3radioOperation1[i].checked) {
               q3operation1 = q3radioOperation1[i].value;
           } 
       } 
        
     if (q3radioOperation1[0].checked == true && q3randomNumber1 == 1) {
    q3message2 += "Bonne réponse";
    q3messagePoint3 = q3messagePoint3 + messagePoint2 + 1;
     } else if (q3radioOperation1[1].checked == true && q3randomNumber1 == 2) {
    q3message2 += "Bonne réponse";
    q3messagePoint3 = q3messagePoint3 + messagePoint2 + 1;
     } else if (q3radioOperation1[2].checked == true && q3randomNumber1 == 3) {
    q3message2 += "Bonne réponse";
    q3messagePoint3 = q3messagePoint3 + messagePoint2 + 1;
     } else if (q3radioOperation1[3].checked == true && q3randomNumber1 == 4) {
    q3message2 += "Bonne réponse";
    q3messagePoint3 = q3messagePoint3 + messagePoint2 + 1;
     } else {
    q3message2 += "Mauvaise réponse";
    q3messagePoint3 = q3messagePoint3 + messagePoint2 + 0;
     }

    var q3affiche2 = document.getElementById("q3divAffiche2");
    if (q3message2 == "Bonne réponse") {
        var q3message3 =  "<div id='q3bonneRep'><strong>" + q3message2 + "<br>  Vous avez gagnez un point " + ".</strong> <div id='q3prochainPage'><a href='symboles4.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div></div>"
            q3affiche2.innerHTML=q3message3; 
    } else if (q3message2 == "Mauvaise réponse") {
      var q3message3 = "<div id='q3mauvRep'><strong>" + q3message2 + "<br> Votre pointage n'a pas changer" + ". <div id='q3prochainPage'><a href='symboles4.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
      q3affiche2.innerHTML=q3message3;
    }

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
    messagePoint4 = messagePoint4 + q3messagePoint3 + 1;
     } else if (q4radioOperation1[1].checked == true && randomNumber4 == 2) {
    q4message2 += "Bonne réponse";
    messagePoint4 = messagePoint4 + q3messagePoint3 + 1;
     } else if (q4radioOperation1[2].checked == true && randomNumber4== 3) {
    q4message2 += "Bonne réponse";
    messagePoint4 = messagePoint4 + q3messagePoint3 + 1;
     } else if (q4radioOperation1[3].checked == true &&randomNumber4 == 4) {
    q4message2 += "Bonne réponse";
    messagePoint4 = messagePoint4 + q3messagePoint3 + 1;
     } else {
    q4message2 += "Mauvaise réponse";
    messagePoint4 = messagePoint4 + q3messagePoint3 + 0;
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
    q5messagePoint5 = q5messagePoint5 + messagePoint4 + 1;
     } else if (q5radioOperation1[1].checked == true && q5randomNumber1 == 2) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 = q5messagePoint5 + messagePoint4 + 1;
     } else if (q5radioOperation1[2].checked == true && q5randomNumber1 == 3) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 = q5messagePoint5 + messagePoint4 + 1;
     } else if (q5radioOperation1[3].checked == true && q5randomNumber1 == 4) {
    q5message2 += "Bonne réponse";
    q5messagePoint5 = q5messagePoint5 + messagePoint4 + 1;
     } else {
    q5message2 += "Mauvaise réponse";
    q5messagePoint5 = q5messagePoint5 + messagePoint4 + 0;
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
 document.getElementById("affichepoint").onclick = function point() {
    var pointtotale = 1
    var affichepoint = document.getElementById("divAffichePoint")
    
    var yo = "Votre pointage est: " + pointtotale 
    affichepoint.innerHTML = yo;
 }