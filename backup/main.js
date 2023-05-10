const ship1 = {
    name: 'Vaisseau 1',
    health: 100,
    attack: function() {
        return Math.floor(Math.random() * 21) + 5;
    },
    element: document.getElementById('ship1')
};

const ship2 = {
    name: 'Vaisseau 2',
    health: 100,
    attack: function() {
        return Math.floor(Math.random() * 21) + 5;
    },
    element: document.getElementById('ship2')
};

// Fonction pour mettre à jour l'affichage de la santé
function updateHealth(ship) {
    ship.element.querySelector('.health').textContent = `${ship.health} / 100`;
}

// Fonction pour g
function attack(){
    const damage = ship1.attack();
    ship2.health -= damage;
    updateHealth(ship2);
    alert(`${ship1.name} attaque ${ship2.name} et inflige ${damage} points de dégâts !`);
    if (ship2.health <= 0) {
        alert(`${ship2.name} est détruit !`);
        ship1.element.querySelector('.button').disabled = true;
        ship2.element.querySelector('.button').disabled = true;
    }
}
        // Fonction pour gérer l'attaque
// function attack(attacker, defender) {
//     const damage = attacker.attack();
//     defender.health -= damage;
//     updateHealth(defender);
//     alert(`${attacker.name} attaque ${defender.name} et inflige ${damage} points de dégâts !`);
//     if (defender.health <= 0) {
//         alert(`${defender.name} est détruit !`);
//         attacker.element.querySelector('.button').disabled = true;
//         defender.element.querySelector('.button').disabled = true;
//     }
// }

// Ajout des écouteurs d'événements sur les boutons
ship1.element.querySelector('.button').addEventListener('click', function() {
    attack(ship1, ship2);
});

ship2.element.querySelector('.button').addEventListener('click', function() {
    attack(ship2, ship1);
});