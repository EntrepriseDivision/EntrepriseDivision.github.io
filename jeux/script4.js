var messagePoint4 = "";
 document.getElementById("q4btnQ1").onclick = function q4calcule() {
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
     } else if (q4radioOperation1[1].checked == true && randomNumber4 == 2) {
    q4message2 += "Bonne réponse";
    messagePoint4 += 1;
     } else if (q4radioOperation1[2].checked == true && randomNumber4== 3) {
    q4message2 += "Bonne réponse";
    messagePoint4 += 1;
     } else if (q4radioOperation1[3].checked == true &&randomNumber4 == 4) {
    q4message2 += "Bonne réponse";
    messagePoint4 += 1;
     } else {
    q4message2 += "Mauvaise réponse";
    messagePoint4 += 0;
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
