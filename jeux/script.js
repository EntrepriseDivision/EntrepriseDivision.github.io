var q1affiche2 = document.getElementById("optext");
//Message point cacule le nombre de points accumule durant le quiz. Il debute a 0 et calcule le nombre de bonne reponse une fois le onclick pointage effectue. //
var messagePoint1 = 0;
//Creation de fonction calcule() qui initialise les variables pour ensuite calculer une equation qui utilise les deux nombres choisis par l'utilisateur. //
function calcule() {
  var q1message1 = ""
  var q1num1 = parseInt(document.getElementById("num1Q1").value);
  var q1num2 = parseInt(document.getElementById("num2Q1").value);
//Math Floor et random choisisent un nombre aleatoire entre 1-4 qui corespond a une type d'equation (+,-,/,*) retrouve dans la boucle if suivante//
  var randomNumber1 = Math.floor(Math.random() * 4) + 1; 
  //Le if qui effectue les calcules
    if(randomNumber1 == 1) {
      q1message1 += " " + (q1num1+q1num2);
      } else if (randomNumber1 == 2) {
      q1message1 += " " + (q1num1-q1num2);
      } else if (randomNumber1 == 3) {
      q1message1 += " " + (q1num1 * q1num2);
      } else if (randomNumber1 == 4) {
      q1message1 += " " + (q1num1 / q1num2);
      } else {
      ("Rien sélectionné");
      }
//Apres avoir effectue une equation, le resultat de celui-ci et le visuel sont affiches dans la variable q1affiche ci-dessous qui se retrouve dans la deuxieme boite en bleu sur le site web. Ceci est un message inner HTML.//
  var q1affiche = document.getElementById("divAffiche1");
  var q1message = "<div id='q1reponq1'><div id='sizerep'><strong> La réponse est:" + q1message1 + "</div><br><br> Équation : <br>" + q1num1 + " ⍰ " + q1num2 + " =" + q1message1 + "</strong></div>"
  q1affiche.innerHTML=q1message; 
  //La deuxieme fonction qui travail avec les radios
  document.getElementById("btn2Q1").onclick = function calcule2() { 
    //Cherche les donner des radios
    var q1radioOperation1 = document.getElementsByName("rad1");
    // Le var pour le message2
    var q1message2 = "";
    var q1operation1 = "";
          //Ajoute les donner des radios dans un tableau. 
          for (var i = 0; i < q1radioOperation1.length; i++) {
            if (q1radioOperation1[i].checked) {
               q1operation1 = q1radioOperation1[i].value;
              } 
             } 
        //Le commencement du if pour afficher "bon reponse" ou "mauvais reponse" et ajouter un point au compteur
       if (q1radioOperation1[0].checked == true && randomNumber1 == 1) {
      q1message2 += "Bonne réponse";
      //Ajoute un point au compteur
      messagePoint1+=100;
      } else if (q1radioOperation1[1].checked == true && randomNumber1 == 2) {
      q1message2 += "Bonne réponse";
      //Ajoute un point au compteur
      messagePoint1+=100;
      } else if (q1radioOperation1[2].checked == true && randomNumber1 == 3) {
      q1message2 += "Bonne réponse";
       //Ajoute un point au compteur
      messagePoint1+=100;
      } else if (q1radioOperation1[3].checked == true && randomNumber1 == 4) {
      q1message2 += "Bonne réponse";
       //Ajoute un point au compteur
      messagePoint1+=100;
      } else {
      q1message2 += "Mauvaise réponse";
       //Ajoute pas un point au compteur
      messagePoint1+=0;
      }
      //Le if qui remplace les boite avec les imput avec le resulta du jeu
       if (q1message2 == "Bonne réponse") {
        var q1affiche2 = document.getElementById("q1divAffiche2");
        var q1message3 =  "<div id='bonneRep'><strong>" + q1message2 + "<br>  Vous avez gagnez un point" + ".</strong> </div>"
        q1affiche2.innerHTML=q1message3; 
       //Le if qui remplace les boite avec les imput avec le resulta du jeu     
      } else if (q1message2 == "Mauvaise réponse") {
        var q1affiche2 = document.getElementById("q1divAffiche2");
      var q1message3 = "<div id='mauvRep'><strong>" + q1message2 + "<br> Votre pointage n'a pas changer <br>   </strong></div>";
      q1affiche2.innerHTML=q1message3;
      } 
       // Remplace le boite de imput avec les imput de la deuxième question. 
        q1affiche.innerHTML = "<div id='titreq1'>Question 2:</div>" + "<input type='number' id='num1Q2' name='num1Q2' placeholder='Nombre 1' /> <br> <input type='number' id='num2Q2' name='num2Q2' placeholder='Nombre 2' /> <br>  <input type='number' id='num3Q2' name='num3Q2' placeholder='Nombre 3'> <br> <input type='button' id='btnQ2'  name='btnQ2' onclick='q2calcule()' value='Soumettre!'/>";
    }
    }
// pour le deuxième html 

//Creation de fonction q2calcule2() qui initialise les variables pour ensuite calculer une equation qui utilise les trois nombres choisis par l'utilisateur. //
 var messagePoint1 = messagePoint1; 
    function q2calcule() {
      //Remplace les radio precedant avec des nouveau radio pour la deuxiem question
      var q1affiche2 = document.getElementById("q1divAffiche2");
      q1affiche2.innerHTML= " <div id='optext'><div class='radcss'><input id='rad1' name='rad1' type='radio' value='+' /> <label for='rad1'>+</label> <br> <input id='rad2' name='rad1' type='radio' value='-' /> <label for='rad2'>-</label> <br> <input id='rad3' name='rad1' type='radio' value='*' /> <label for='rad3'>x</label> <br><input id='rad4' name='rad1' type='radio' value='/' /><label for='rad4'>/</label></div> <br></div> <input type='button' id='btn2Q2' onclick='q2calcule2()' value='Soumettre votre réponse'/>" 
    //La var pour le deuxiem message 
    var q2message1 = ""
    //Prend les imput de l'utilisateur et le transform en variable avec une value utilisable
    var q2num1 = parseInt(document.getElementById("num1Q2").value);
    var q2num2 = parseInt(document.getElementById("num2Q2").value);
    var q2num3 = parseInt(document.getElementById("num3Q2").value);
    //Math Floor et random choisisent un nombre aleatoire entre 1-4 qui corespond a une type d'equation (+,-,/,*) retrouve dans la boucle if suivante
    var randomNumber2 = Math.floor(Math.random() * 4) + 1;
      //Le if qui effectue les calcules avec les 3 nombres
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
      //Affiche la reponse des calcules des trois nombres. 
    var q1affiche = document.getElementById("divAffiche1")
    var q2message = "<div id='q2reponq1'><strong> La réponse est:" + q2message1 + "<br><br> Équation : <br>" + q2num1 + " ⍰ " + q2num2 + " ⍰ "  + q2num3 + " =" + q2message1 + "</strong></div>"
    q1affiche.innerHTML=q2message; 
 //Le commencement de la fonction q2calcule2 pour les radios. 
  document.getElementById("btn2Q2").onclick = function q2calcule2(){
    // Cherche les donner des radios. 
    var q2radioOperation1 = document.getElementsByName("rad1");
    //La var pour le message 2 
    var q1message2 = "";
    var q2operation1 = "";
        //Prends les donner des radio et les transform en tableau. 
       for (var i = 0; i < q2radioOperation1.length; i++) {
           if (q2radioOperation1[i].checked) {
               q2operation1 = q2radioOperation1[i].value;
           } 
       } 
    //Le if qui ajoute le text "Bon reponse" ou  "Mauvais reponse" et ajoute un nombre au compteur de score. 
    if (q2radioOperation1[0].checked == true && randomNumber2 == 1) {
    // Ajoute le text "Bonne reponse" au var message.
    q1message2 += "Bonne réponse";
    //Ajoute un point au compteur
  messagePoint1+=100;
     } else if (q2radioOperation1[1].checked == true && randomNumber2 == 2) {
       // Ajoute le text "Bonne reponse" au var message.
    q1message2 += "Bonne réponse";
    //Ajoute un point au compteur
   messagePoint1+=100;
     } else if (q2radioOperation1[2].checked == true && randomNumber2 == 3) {
       // Ajoute le text "Bonne reponse" au var message.
    q1message2 += "Bonne réponse";
    //Ajoute un point au compteur
   messagePoint1+=100;
     } else if (q2radioOperation1[3].checked == true && randomNumber2 == 4) {
       // Ajoute le text "Bonne reponse" au var message.
    q1message2 += "Bonne réponse";
    //Ajoute un point au compteur
   messagePoint1+=100;
     } else {
       // Ajoute le text "Mauvais reponse" au var message.
    q1message2 += "Mauvaise réponse";
    //Ajoute pas un point au compteur
     }
      // Affiche le text de bonne reponse et ajoute le boutton pour afficher le score 
      var q1affiche2 = document.getElementById("q1divAffiche2");
        if (q1message2 == "Bonne réponse") {
         var q2message3 =  "<div id='bonneRep'><strong>" + q1message2 + "<br>  Vous avez gagnez un point </div> <br> <br>" + "<input type='button' name='pointage' id='affichepoint' value='Affiche Pointage!' onclick='point()'/> </strong>"
            q1affiche2.innerHTML=q2message3; 

        // Affiche le text de mauvais reponse et ajoute le boutton pour afficher le score 
      } else if (q1message2 == "Mauvaise réponse!") {
        var q2message3 = "<div id='mauvRep'><strong>" + q1message2 + "<br> Votre pointage n'a pas changé. </div> <br> <br>"  + "<input type='button' name='pointage' id='affichepoint' value='Affiche Pointage!' onclick='point()'/> </strong>"
        q1affiche2.innerHTML=q2message3;
       } 
      }
    }
    function point() {
     //Affiche le score final du jeu 
      var q1affiche2 = document.getElementById("q1divAffiche2");
      var q2message3 =  "Votre pointage final est:  " + messagePoint1 + " <br> <br> Merci pour votre participation! À la prochaine." 
      q1affiche2.innerHTML=q2message3;
    }