cDial()
function cDial(){
    step_10()
}

function step_10(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le cockpit,a gauche l'armurie et a droite rester ici. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "OSEF"
    document.getElementById("bouton1").setAttribute("onclick", "step_11()")
    document.getElementById("btn2").innerHTML = "Rester dans le cokcpit"
    document.getElementById("btn2").setAttribute("onclick", "step_12()")
}
function step_11(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans l'armurie, il y a un pistolet et un fusil. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Prendre le pistolet"
    document.getElementById("bouton1").setAttribute("onclick", "step_20()")
    document.getElementById("btn2").innerHTML = "Prendre le fusil"
    document.getElementById("btn2").setAttribute("onclick", "step_21()")
}
function step_12(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le cockpit ferme le sas ou ne rien faire. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Ferme le sas"
    document.getElementById("bouton1").setAttribute("onclick", "step_22()")
    document.getElementById("btn2").innerHTML = "attendre"
    document.getElementById("btn2").setAttribute("onclick", "step_23()")
}



function step_20(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le cockpit, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_30()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_30()")
}
function step_21(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le cockpit, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_81()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_81()")
}
function step_22(){
    document.getElementById("dial0").innerHTML = "mini jeux go next"
    document.getElementById("bouton1").innerHTML = "go next"
    document.getElementById("bouton1").setAttribute("onclick", "step_31()")
    document.getElementById("btn2").innerHTML = "go next"
    document.getElementById("btn2").setAttribute("onclick", "step_31()")
}
function step_23(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans la chambre, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_43()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_42()")
}



function step_30(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans la chambre, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_40()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_41()")
}
function step_31(){
    document.getElementById("dial0").innerHTML = "Vous êtes entrain de negocier. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Decoupler le module"
    document.getElementById("bouton1").setAttribute("onclick", "step_42()")
    document.getElementById("btn2").innerHTML = "ouvrir le SAS"
    document.getElementById("btn2").setAttribute("onclick", "step_43()")
}
function step_32(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_44()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_45()")
    document.getElementById("btn3").innerHTML = "Victime banos"
    document.getElementById("btn3").setAttribute("onclick", "step_46()")
}



function step_40(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans la chambre, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_50()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_50()")
}
function step_41(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans la chambre, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_51()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_51()")
}
function step_42(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_52()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_52()")
}
function step_43(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_32()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_32()")
}
function step_44(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_64()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_65()")
}
function step_45(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_54()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_54()")
}
function step_46(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_54()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_54()")
}



function step_50(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_60()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_61()")
}
function step_51(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_61()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_62()")
}
function step_52(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_63()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_53()")
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
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_71()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_71()")
}
function step_62(){
    "loose"
}
function step_63(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_72()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_73()")
}
function step_64(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_74()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_74()")
}
function step_65(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_75()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_75()")
}




function step_70(){
    "loose"
}
function step_71(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_70()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_80()")
}
function step_72(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Decoupler le module"
    document.getElementById("bouton1").setAttribute("onclick", "step_62()")
    document.getElementById("btn2").innerHTML = "ouvrir le SAS"
    document.getElementById("btn2").setAttribute("onclick", "step_62()")
}
function step_73(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("bouton1").innerHTML = "Aller dormir"
    document.getElementById("bouton1").setAttribute("onclick", "step_83()")
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").setAttribute("onclick", "step_63()")
}
function step_74(){
    "loose"
}
function step_75(){
    "win"
}

function step_82(){
    "loose"
}
function step_83(){
    "WIN"
}





function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function dial_10(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial0").innerHTML = data.X10;
    })
    .catch(err => console.error(err));
}



function dial_12(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X12;
    })
    .catch(err => console.error(err));
}

function dial_22(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X22;
    })
    .catch(err => console.error(err));
}
function dial_23(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X23;
    })
    .catch(err => console.error(err));
}

function dial_31(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X31;
    })
    .catch(err => console.error(err));
}
function dial_32(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X32;
    })
    .catch(err => console.error(err));
}
function dial_42(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X42;
    })
    .catch(err => console.error(err));
}
function dial_43(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X43;
    })
    .catch(err => console.error(err));
}
function dial_44(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X44;
    })
    .catch(err => console.error(err));
}
function dial_45(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X45;
    })
    .catch(err => console.error(err));
}
function dial_46(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X46;
    })
    .catch(err => console.error(err));
}
function dial_52(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X52;
    })
    .catch(err => console.error(err));
}
function dial_53(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X53;
    })
    .catch(err => console.error(err));
}
function dial_54(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X54;
    })
    .catch(err => console.error(err));
}
function dial_63(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X63;
    })
    .catch(err => console.error(err));
}
function dial_64(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML =  data.X64;
    })
    .catch(err => console.error(err));
}
function dial_65(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML =  data.X65;
    })
    .catch(err => console.error(err));
}
function dial_72(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML =  data.X72;
    })
    .catch(err => console.error(err));
}
function dial_73(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML =  data.X73;
    })
    .catch(err => console.error(err));
}
function dial_74(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML =  data.X74;
    })
    .catch(err => console.error(err));
}
function dial_75(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML =  data.X75;
    })
    .catch(err => console.error(err));
}


