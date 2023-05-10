start()
function start(){
    step_0()
}

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function dial(dialV, dialValue){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data[dialV][dialValue];
    })
    .catch(err => console.error(err));
}
function hideButton(btnId) {
    document.getElementById(btnId).style.display = "none";
  }

 
  

function dial_0(){
    
        dial("X00","D1");
        dial("X00","D2");
        dial("X00","D3");
        dial("X00","D4");
        dial("X00","D5");
        dial("X00","D6"); 
}

function dial_10(){
    dial("X10","D1")
    dial("X10","D2")
    dial("X10","D3")
    dial("X10","D4")
    dial("X10","D5")
}

function step_0(){
    hideButton("btn3")
    hideButton("btn4")
    document.getElementById("dial0").innerHTML = "DEBUT HISTOIRE"
    document.getElementById("btn1").innerHTML = "Aller go"
    document.getElementById("btn1").setAttribute("onclick", "step_10()")
    document.getElementById("btn2").innerHTML = "aller go"
    document.getElementById("btn2").setAttribute("onclick", "step_10()")
    dial_0()
   
}
function step_10(){
    document.getElementById("dial0").innerHTML = "JEUX 1"
    document.getElementById("btn1").innerHTML = "OSEF"
    document.getElementById("btn1").setAttribute("onclick", "step_11()")
    document.getElementById("btn2").innerHTML = "Rester dans le cokcpit"
    document.getElementById("btn2").setAttribute("onclick", "step_12()")
    dial("X12", "D1")
    dial("X12", "D2")
    dial("X12", "D3")
}
function step_11(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans l'armurie, il y a un pistolet et un fusil. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Prendre le pistolet"
    document.getElementById("btn1").setAttribute("onclick", "step_20()")
    document.getElementById("btn2").innerHTML = "Prendre le fusil"
    document.getElementById("btn2").setAttribute("onclick", "step_21()")
    dial("X11")
    
    rmBTN34()
}
function step_12(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le cockpit ferme le sas ou ne rien faire. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Ferme le sas"
    document.getElementById("btn1").setAttribute("onclick", "step_22()")
    document.getElementById("btn2").innerHTML = "attendre"
    document.getElementById("btn2").setAttribute("onclick", "step_23()")
    dial("X22")
    rmBTN34()
}



function step_20(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le couloir de gauche continuez d'avancer."
    document.getElementById("btn1").innerHTML = "Avancer"
    document.getElementById("btn1").setAttribute("onclick", "step_30()")
    rmBTN2()
    rmBTN34()
}
function step_21(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le cockpit, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_81()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_81()")
    rmBTN34()
    dial("X22")
}
function step_22(){
    document.getElementById("dial0").innerHTML = "mini jeux go next"
    document.getElementById("btn1").innerHTML = "go next"
    document.getElementById("btn1").setAttribute("onclick", "step_31()")
    document.getElementById("btn2").innerHTML = "go next"
    document.getElementById("btn2").setAttribute("onclick", "step_31()")
    rmBTN34()
}
function step_23(){
    document.getElementById("dial0").innerHTML = "Vous avez choisis d'attendre"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_32()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_32()")
    rmBTN34()
}



function step_30(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le couloir de gauche vous entedez du bruit et le sas en face s'ouvre. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_40()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_41()")
    rmBTN34()
}
function step_31(){
    document.getElementById("dial0").innerHTML = "Vous êtes entrain de negocier. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Decoupler le module"
    document.getElementById("btn1").setAttribute("onclick", "step_42()")
    document.getElementById("btn2").innerHTML = "ouvrir le SAS"
    document.getElementById("btn2").setAttribute("onclick", "step_43()")
    rmBTN34()
}
function step_32(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_44()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_45()")
    document.getElementById("btn3").innerHTML = "Victime banos"
    document.getElementById("btn3").setAttribute("onclick", "step_46()")
}



function step_40(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans la chambre, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_50()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_50()")
    rmBTN34()
}
function step_41(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans la chambre, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_51()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_51()")
    rmBTN34()
}
function step_42(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_52()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_52()")
    rmBTN34()
}
function step_43(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_32()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_32()")
    rmBTN34()
}
function step_44(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_64()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_65()")
    rmBTN34()
}
function step_45(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_54()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_54()")
    rmBTN34()
}
function step_46(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_54()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_54()")
    rmBTN34()
}



function step_50(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_60()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_61()")
    rmBTN34()
}
function step_51(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_61()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_62()")
    rmBTN34()
}
function step_52(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_63()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_53()")
    rmBTN34()
}
function step_53(){
    "loose"
}
function step_54(){
    "loose"
}



function step_60(){
    "loose"
}
function step_61(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_71()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_71()")
    rmBTN34()
}
function step_62(){
    "loose"
}
function step_63(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_72()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_73()")
    rmBTN34()
}
function step_64(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_74()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_74()")
    rmBTN34()
}
function step_65(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_75()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_75()")
    rmBTN34()
}




function step_70(){
    "loose"
}
function step_71(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_70()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_80()")
    rmBTN34()
}
function step_72(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Decoupler le module"
    document.getElementById("btn1").setAttribute("onclick", "step_62()")
    document.getElementById("btn2").innerHTML = "ouvrir le SAS"
    document.getElementById("btn2").setAttribute("onclick", "step_62()")
    rmBTN34()
}
function step_73(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_83()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_63()")
    rmBTN34()
}
function step_74(){
    "loose"
}
function step_75(){
    "win"
}

function step_80(){
    "WIN"
}
function step_81(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_90()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_91()")
}
function step_82(){
    "loose"
}
function step_83(){
    "WIN"
}


function step_100(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_110()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_111()")
    document.getElementById("btn3").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn3").setAttribute("onclick", "step_112()")
}


function step_110(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_120()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_121()")
}
function step_111(){
    document.getElementById("btn1").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn1").setAttribute("onclick", "step_122()")
    
}
function step_112(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_123()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_124()")
}

function step_120(){
    "ARRACHE MOI LE BOSS"
    document.getElementById("btn1").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn1").setAttribute("onclick", "step_130()")
}
function step_121(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_131()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_131()")
}
function step_122(){
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_32()")

}
function step_123(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_131()")
}
function step_124(){
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").setAttribute("onclick", "step_132()")
}

function step_130(){
   "WIN"
}
function step_131(){
    "loose"
}
function step_132(){
    "MINI JEU"
}
function step_140(){
    "WIN FIN 4"
}


