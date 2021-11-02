var q3messagePoint3 = "";
 document.getElementById("q3btnQ1").onclick = function q3calcule() {
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
    q3messagePoint3 += 1;
     } else if (q3radioOperation1[1].checked == true && q3randomNumber1 == 2) {
    q3message2 += "Bonne réponse";
    q3messagePoint3 += 1;
     } else if (q3radioOperation1[2].checked == true && q3randomNumber1 == 3) {
    q3message2 += "Bonne réponse";
    q3messagePoint3 += 1;
     } else if (q3radioOperation1[3].checked == true && q3randomNumber1 == 4) {
    q3message2 += "Bonne réponse";
    q3messagePoint3 += 1;
     } else {
    q3message2 += "Mauvaise réponse";
    q3messagePoint3 += 0;
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