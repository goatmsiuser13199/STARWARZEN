class ship {
    constructor() {
        this.name = 'ship';
        this.hpMax = 100;
        this.hp = 100;
        // this.attack = Math.floor(Math.random() * 21) + 5;
        this.defense = Number
    }
    attack(target) {
        const attack = Math.floor(Math.random() * 21) + 5;
        target.hp -= attack
    }
    
}
const playerShip = new ship();
const hostileShip = new ship();
const myInput = document.getElementById("myInput");
myInput.addEventListener("input", function(event) {
  console.log("Vous avez saisi : " + event.target.value);
});
fight()





function fight(){

    playerShip.attack(hostileShip);
    hostileShip.attack(playerShip);
}

// playerShip.attack(hostileShip);
// hostileShip.attack(playerShip);

console.log(`HP hostileShip : ${hostileShip.hp}`)
console.log(`HP playerShip : ${playerShip.hp}`)
sleep(4000)




// console.log(playerShip.attack);
// console.log(hostileShip.attack);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
  
