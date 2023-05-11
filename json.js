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
    document.getElementById(btnId).style.display = "inline-block";
  }

 
  

function dial_0(){
    setTimeout('dial("X00","D1")', 1000);
    setTimeout('dial("X00","D2")', 11000);
    setTimeout('dial("X00","D3")', 18000);
    setTimeout('dial("X00","D4")', 25000);
    setTimeout('dial("X00","D5")', 32000);
    setTimeout('dial("X00","D6")', 39000);
    setTimeout('dial("X00","D7")', 46000);
    setTimeout('dial("X00","D8")', 53000);
    setTimeout('dial("X00","D9")', 60000);
    setTimeout('dial("X00","D10")', 67000);
    setTimeout('hideButton("btn1")', 67500);
    
}
function dial_11(){
    setTimeout('dial("X11","D1")', 1000);
    setTimeout('dial("X11","D2")', 11000);
    setTimeout('dial("X11","D3")', 21000);
    setTimeout('hideButton("btn1")', 1000);
    setTimeout('hideButton("btn2")', 1000);
}
function dial_20(){
    setTimeout('dial("X2O","D1")', 1000);
    setTimeout('hideButton("btn1")', 2000);
    setTimeout('hideButton("btn2")', 2000);
}
function dial_21(){
    setTimeout('dial("X21","D1")', 1000);
    setTimeout('hideButton("btn1")', 2000);
    setTimeout('hideButton("btn2")', 2000);
}
function dial_30(){
    setTimeout('dial("X30","D1")', 1000);
    setTimeout('dial("X30","D2")', 11000);
    setTimeout('hideButton("btn1")', 12000);
    setTimeout('hideButton("btn2")', 12000);
}
function dial_40(){
    setTimeout('dial("X40","D1")', 1000);
    setTimeout('dial("X40","D2")', 11000);
    setTimeout('dial("X40","D3")', 21000);
    setTimeout('dial("X40","D4")', 31000);
    setTimeout('dial("X40","D5")', 41000);
    setTimeout('dial("X40","D6")', 51000);
    setTimeout('dial("X40","D7")', 61000);
    setTimeout('hideButton("btn1")', 62000);
    setTimeout('hideButton("btn2")', 62000);
}
function dial_41(){
    setTimeout('dial("X41","D1")', 1000);
    setTimeout('dial("X41","D2")', 11000);
    setTimeout('dial("X41","D3")', 21000);
    setTimeout('hideButton("btn1")', 22000);
    setTimeout('hideButton("btn2")', 22000);
}
function dial_60(){
    setTimeout('dial("X60","D1")', 1000);
    setTimeout('dial("X60","D2")', 11000);
    setTimeout('dial("X60","D3")', 21000);
    setTimeout('dial("X60","D4")', 31000);
    setTimeout('hideButton("btn1")', 32000);
    setTimeout('hideButton("btn2")', 32000);

}
function dial_61(){
    setTimeout('dial("X61","D1")', 1000);
    setTimeout('dial("X61","D2")', 11000);
    setTimeout('dial("X61","D3")', 21000);
    setTimeout('hideButton("btn1")', 22000);
    setTimeout('hideButton("btn2")', 22000);
}
function dial_62(){
    setTimeout('dial("X62","D1")', 1000);
    setTimeout('dial("X62","D2")', 11000);
    setTimeout('dial("X62","D3")', 21000);   
    setTimeout('dial("X62","D4")', 31000);
    setTimeout('hideButton("btn1")', 32000);
    setTimeout('hideButton("btn2")', 32000);
}
function dial_70(){
    setTimeout('dial("X70","D1")', 1000);
    setTimeout('dial("X70","D2")', 11000);
    setTimeout('dial("X70","D3")', 21000);
    setTimeout('dial("X70","D4")', 31000);
    setTimeout('dial("X70","D5")', 41000);
    setTimeout('dial("X70","D6")', 51000);
    setTimeout('dial("X70","D7")', 61000);
    setTimeout('dial("X70","D8")', 71000);
    setTimeout('dial("X70","D9")', 81000);
    setTimeout('hideButton("btn1")', 82000);
    setTimeout('hideButton("btn2")', 82000);
   
}
function dial_71(){
    setTimeout('dial("X71","D1")', 1000);
    setTimeout('hideButton("btn1")', 2000);
    setTimeout('hideButton("btn2")', 2000);
}
function dial_80(){
    setTimeout('dial("X80","D1")', 1000);
    setTimeout('dial("X80","D2")', 11000);
    setTimeout('dial("X80","D3")', 21000);
    setTimeout('dial("X80","D4")', 31000);
    setTimeout('dial("X80","D5")', 41000);
    setTimeout('dial("X80","D6")', 51000);
    setTimeout('dial("X80","D7")', 61000);
    setTimeout('hideButton("btn1")', 62000);
    setTimeout('hideButton("btn2")', 62000);
}
function dial_81(){
    setTimeout('dial("X81","D1")', 1000);
    setTimeout('dial("X81","D2")', 11000);
    setTimeout('hideButton("btn1")', 22000);
    setTimeout('hideButton("btn2")', 22000);
}
function dial_90(){
    setTimeout('dial("X90","D1")', 1000);
    setTimeout('dial("X90","D2")', 11000);
    setTimeout('dial("X90","D3")', 21000);
    setTimeout('dial("X90","D4")', 31000);
    setTimeout('dial("X90","D5")', 41000);
    setTimeout('dial("X90","D6")', 51000);
    setTimeout('hideButton("btn1")', 52000);
    setTimeout('hideButton("btn2")', 52000);
}
function dial_91(){
    setTimeout('dial("X91","D1")', 1000);
    setTimeout('hideButton("btn1")', 2000);
    setTimeout('hideButton("btn2")', 2000);
}
function dial_100(){
    setTimeout('dial("X100","D1")', 1000);
    setTimeout('hideButton("btn1")', 2000);
    setTimeout('hideButton("btn2")', 2000);
}
function dial_110(){
    setTimeout('dial("X110","D1")', 1000);
    setTimeout('dial("X110","D2")', 11000);
    setTimeout('dial("X110","D3")', 21000);
    setTimeout('dial("X110","D4")', 31000);
    setTimeout('dial("X110","D5")', 41000);
    setTimeout('hideButton("btn1")', 42000);
    setTimeout('hideButton("btn2")', 42000);
    
}
function dial_111(){
    setTimeout('dial("X111","D1")', 1000);
    setTimeout('dial("X111","D2")', 11000);
    setTimeout('dial("X111","D3")', 21000);
    setTimeout('dial("X111","D4")', 31000);
    setTimeout('dial("X111","D5")', 41000);
    setTimeout('dial("X111","D6")', 51000);
    setTimeout('dial("X111","D7")', 61000);
    setTimeout('dial("X111","D8")', 71000);
    setTimeout('dial("X111","D9")', 81000);
    setTimeout('dial("X111","D10")', 91000);
    setTimeout('dial("X111","D11")', 101000);
    setTimeout('dial("X111","D12")', 111000);
    setTimeout('dial("X111","D13")', 121000);
    setTimeout('dial("X111","D14")', 131000);
    setTimeout('hideButton("btn1")', 132000);
    setTimeout('hideButton("btn2")', 132000);
}
function dial_112(){
    setTimeout('dial("X112","D1")', 1000);
    setTimeout('dial("X112","D2")', 11000);
    setTimeout('hideButton("btn1")', 22000);
    setTimeout('hideButton("btn2")', 22000);
}
function dial_121(){
    setTimeout('dial("X121","D1")', 1000);
    setTimeout('dial("X121","D2")', 11000);
    setTimeout('dial("X121","D3")', 21000);
    setTimeout('dial("X121","D4")', 31000);
    setTimeout('hideButton("btn1")', 32000);
    setTimeout('hideButton("btn2")', 32000);
}
function dial_122(){
    setTimeout('dial("X122","D1")', 1000);
    setTimeout('dial("X122","D2")', 11000);
    setTimeout('dial("X122","D3")', 21000);
    setTimeout('dial("X122","D4")', 31000);
    setTimeout('hideButton("btn1")', 32000);
    setTimeout('hideButton("btn2")', 32000);
}
function dial_123(){
    setTimeout('dial("X123","D1")', 1000);
    setTimeout('dial("X123","D2")', 11000);
    setTimeout('hideButton("btn1")', 22000);
    setTimeout('hideButton("btn2")', 22000);
}
function dial_124(){
    setTimeout('dial("X124","D1")', 1000);
    setTimeout('dial("X124","D2")', 11000);
    setTimeout('dial("X124","D3")', 21000);
    setTimeout('dial("X124","D4")', 31000);
    setTimeout('dial("X124","D5")', 41000);
    setTimeout('hideButton("btn1")', 42000);
    setTimeout('hideButton("btn2")', 42000);
}









function step_0(){
    
    document.getElementById("btn1").innerHTML = "Se lever"
    document.getElementById("btn1").addEventListener("click",() =>{
        step_10()
    } )
    dial_0()
   
}
function step_10(){
    
    document.getElementById("btn1").innerHTML = "OSEF"
    document.getElementById("btn1").addEventListener("click",() =>{
        step_11()
    } )
    document.getElementById("btn2").innerHTML = "Rester dans le cokcpit"
    document.getElementById("btn2").addEventListener("click",() =>{
        step_12()
    } )
}
function step_11(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans l'armurie, il y a un pistolet et un fusil. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Prendre le pistolet"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_20()
    })
    document.getElementById("btn2").innerHTML = "Prendre le fusil"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_21()
        })
    dial_11()
    
}
function step_12(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le cockpit ferme le sas ou ne rien faire. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Ferme le sas"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_22()
        })
    document.getElementById("btn2").innerHTML = "attendre"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_23()
        })
    dial("X22")
    
}



function step_20(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le couloir de gauche continuez d'avancer."
    document.getElementById("btn1").innerHTML = "Avancer"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_30()
        })
    rmBTN2()
    
    dial_20()
}
function step_21(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le cockpit, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_81()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_81()
        }
        )
    
    dial_21()
}
function step_22(){
    document.getElementById("dial0").innerHTML = "mini jeux go next"
    document.getElementById("btn1").innerHTML = "go next"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_31()
        })
    document.getElementById("btn2").innerHTML = "go next"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_31()
        })
    
}
function step_23(){
    document.getElementById("dial0").innerHTML = "Vous avez choisis d'attendre"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_32()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_32()
        })
    
}



function step_30(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le couloir de gauche vous entedez du bruit et le sas en face s'ouvre. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_40()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_41()
        })
    
    dial_30()
}
function step_31(){
    document.getElementById("dial0").innerHTML = "Vous êtes entrain de negocier. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Decoupler le module"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_42()
        })
    document.getElementById("btn2").innerHTML = "ouvrir le SAS"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_43()
        })
    
}
function step_32(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_44()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_45()
        })
    document.getElementById("btn3").innerHTML = "Victime banos"
    document.getElementById("btn3").addEventListener("click",() =>{
         step_46()
        })
}



function step_40(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans la chambre, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_50()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_50()
        })
    
    dial_40()
}
function step_41(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans la chambre, il y a un lit et une armoire. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_51()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_51()
        })
    
    dial_41()
}
function step_42(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_52()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_52()
        })
    
}
function step_43(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_32()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_32()
        })
    
}
function step_44(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_64()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_65()
        })
    
}
function step_45(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_54()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_54()
        })
    
}
function step_46(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_54()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_54()
        })
    
}



function step_50(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_60()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_61()
        })
    
}
function step_51(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_61()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_62()
        })
    
}
function step_52(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_63()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_53()
        })
    
}
function step_53(){
    "loose"
}
function step_54(){
    "loose"
}



function step_60(){
    dial_60()
    
}
function step_61(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_71()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_71()
        })
    
    dial_61()
}
function step_62(){
    dial_62()
}
function step_63(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_72()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_73()
        })
    
}
function step_64(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_74()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_74()
        })
    
}
function step_65(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_75()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_75()
        })
    
}




function step_70(){
    dial_70()
}
function step_71(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_70()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_80()
        })
    
    dial_71()
}
function step_72(){
    document.getElementById("dial0").innerHTML = "Vous êtes dans le SAS. Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Decoupler le module"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_62()
        })
    document.getElementById("btn2").innerHTML = "ouvrir le SAS"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_62()
        })
    
}
function step_73(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_83()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_63()
        })
    
}
function step_74(){
    "loose"
}
function step_75(){
    "win"
}

function step_80(){
    dial_80()
}
function step_81(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_90()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_91()
        })
    dial_81()
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
    document.getElementById("btn1").addEventListener("click",() =>{
         step_110()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_111()
        })
    document.getElementById("btn3").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn3").addEventListener("click",() =>{
         step_112()
        })
    dial_100()
}


function step_110(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_120()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_121()
        })
    dial_110()
}
function step_111(){
    document.getElementById("btn1").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_122()
        })
    dial_111()
    
}
function step_112(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_123()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_124()
        })
    dial_112()
}

function step_120(){
    "ARRACHE MOI LE BOSS"
    document.getElementById("btn1").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_130()
        })
}
function step_121(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_131()
        })
    document.getElementById("btn2").innerHTML = "Ouvrir l'armoire"
    document.getElementById("btn2").addEventListener("click",() =>{
         step_131()
        })
    dial_121()
}
function step_122(){
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_32()
        })    
    dial_122()

}
function step_123(){
    document.getElementById("dial0").innerHTML = "Vous êtes . Que faites-vous ?"
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_131()
        })
    dial_123()
    hideButton("btn2")
    hideButton("btn3")
    hideButton("btn4")


}
function step_124(){
    document.getElementById("btn1").innerHTML = "Aller dormir"
    document.getElementById("btn1").addEventListener("click",() =>{
         step_132()
        })
    dial_124()
    hideButton("btn2")
    hideButton("btn3")
    hideButton("btn4")
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
