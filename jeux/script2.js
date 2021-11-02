var messagePoint2 = "";
 document.getElementById("btnQ2").onclick = function q2calcule() {
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
    messagePoint2 += 1;
     } else if (q2radioOperation1[1].checked == true && randomNumber2 == 2) {
    q2message2 += "Bonne réponse";
    messagePoint2 += 1;
     } else if (q2radioOperation1[2].checked == true && randomNumber2 == 3) {
    q2message2 += "Bonne réponse";
    messagePoint2 += 1;
     } else if (q2radioOperation1[3].checked == true && randomNumber2 == 4) {
    q2message2 += "Bonne réponse";
    messagePoint2 += 1;
     } else {
    q2message2 += "Mauvaise réponse";
    messagePoint2 += 0;
     }

    var q2affiche2 = document.getElementById("q2divAffiche2");
    if (q2message2 == "Bonne réponse") {
        var q2message3 =  "<div id='bonneRep'><strong>" + q2message2 + "<br>  Vous avez gagnez un point" + ". <div id='prochainPage'><a href='symboles3.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
            q2affiche2.innerHTML=q2message3; 
    } else if (q2message2 == "Mauvaise réponse") {
      var q2message3 = "<div id='mauvRep'><strong>" + q2message2 + "<br> Votre pointage n'a pas changer" +  ". <div id='prochainPage'><a href='symboles3.html'><img src='https://cdn-icons-png.flaticon.com/512/25/25426.png' width='80' </a> </div> </strong></div>"
      q2affiche2.innerHTML=q2message3;
    }

 
 }









 }
