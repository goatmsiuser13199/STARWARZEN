//1.1
function armory(){ 
    leftLane()
    rightLane()

}

//1.2
function armory(){
}


//2.0
function leftLane(){

}


//2.1
function rightLane(){
    
}
// Récupération des éléments HTML
var bouton1 = document.getElementById("bouton1");
var bouton2 = document.getElementById("bouton2");

// Ajout d'un écouteur d'événement sur chaque bouton
bouton1.addEventListener("click", function() {
    if (bouton1.style.backgroundColor == "red") {
        bouton1.style.backgroundColor = "";
    } else {
        bouton1.style.backgroundColor = "red";
    }
});

bouton2.addEventListener("click", function() {
    if (bouton2.style.backgroundColor == "blue") {
        bouton2.style.backgroundColor = "";
    } else {
        bouton2.style.backgroundColor = "blue";
    }
});