// Définir les variables du jeu
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var player = {
  x: WIDTH / 2 - 25,
  y: HEIGHT - 50,
  width: 50,
  height: 50,
  speed: 5,
};
var boss = {
  x: WIDTH / 2 - 50,
  y: 50,
  width: 100,
  height: 50,
  speed: 5,
  direction: 1,
  health: 15,
};
var bullets = [];
var bulletSpeed = 4;
var bulletWidth = 5;
var bulletHeight = 10;
var score = 0;

// Dessiner le joueur
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Dessiner le boss
function drawBoss() {
  ctx.fillStyle = "red";
  ctx.fillRect(boss.x, boss.y, boss.width, boss.height);
}

// Dessiner les balles
function drawBullets() {
  ctx.fillStyle = "yellow";
  for (var i = 0; i < bullets.length; i++) {
    ctx.fillRect(bullets[i].x, bullets[i].y, bulletWidth, bulletHeight);
  }
}

// Vérifier si une balle a touché le boss
function checkBulletHit() {
  for (var i = 0; i < bullets.length; i++) {
    if (
      bullets[i].x >= boss.x &&
      bullets[i].x <= boss.x + boss.width &&
      bullets[i].y <= boss.y + boss.height
    ) {
      bullets.splice(i, 1);
      boss.health--;
      score += 10;
      if (boss.health <= 0) {
        alert("You win! Your score is " + score);
        document.location.reload();
      }
    }
  }
}

// Mettre à jour les positions
function update() {
  // Déplacer le boss
  boss.x += boss.speed * boss.direction;
  if (boss.x + boss.width >= WIDTH || boss.x <= 0) {
    boss.direction *= -1;
    boss.y += boss.height;
  }

  // Déplacer les balles
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].y -= bulletSpeed;
    if (bullets[i].y < 0) {
      bullets.splice(i, 1);
      i--;
    }
  }

  // Vérifier si une balle a touché le boss
  checkBulletHit();
}

// Dessiner le jeu
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  drawPlayer();
  drawBoss();
  drawBullets();
  ctx.fillText("Score: " + score, 10, 20);
}

// Gérer les événements clavier
document.onkeydown = function (event) {

    // Déplacer le joueur
if (event.keyCode == 37) {
    // Gauche
    player.x -= player.speed;
    if (player.x < 0) {
    player.x = 0;
    }
    } else if (event.keyCode == 39) {
    // Droite
    player.x += player.speed;
    if (player.x + player.width > WIDTH) {
    player.x = WIDTH - player.width;
    }
    }
    
    // Tirer une balle
    if (event.keyCode == 32) {
    // Espace
    bullets.push({
    x: player.x + player.width / 2 - bulletWidth / 2,
    y: player.y - bulletHeight,
    });
    }
    };
    
    // Boucle de jeu
    function gameLoop() {
    update();
    draw();
    }
    
    setInterval(gameLoop, 20); // Appeler gameLoop toutes les 20ms
