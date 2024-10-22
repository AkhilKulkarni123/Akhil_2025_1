let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let player = { x: 50, y: canvas.height / 2, width: 40, height: 40 };
let projectile = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: 20,
    height: 20
};
let gameRunning = true;
let survivalTime = 0;
let projectileImage = new Image();
projectileImage.src = "{{site.baseurl}}/images/rpg/projectile.png"; // Ensure the path is correct

// Handles the projectile's random movement
function moveProjectile() {
    projectile.x += (Math.random() - 0.5) * 4;
    projectile.y += (Math.random() - 0.5) * 4;

    // Keep projectile inside the canvas
    if (projectile.x < 0) projectile.x = 0;
    if (projectile.x + projectile.width > canvas.width) 
        projectile.x = canvas.width - projectile.width;
    if (projectile.y < 0) projectile.y = 0;
    if (projectile.y + projectile.height > canvas.height) 
        projectile.y = canvas.height - projectile.height;
}

// Checks if the player collides with the projectile
function checkCollision() {
    if (
        projectile.x < player.x + player.width &&
        projectile.x + projectile.width > player.x &&
        projectile.y < player.y + player.height &&
        projectile.y + projectile.height > player.y
    ) {
        gameRunning = false;
        alert("You hit the projectile! Game over.");
        resetGame();
    }
}

// Resets the game state
function resetGame() {
    survivalTime = 0;
    projectile.x = Math.random() * canvas.width;
    projectile.y = Math.random() * canvas.height;
    gameRunning = true;
}

// Draws the player and projectile
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height);

    ctx.fillStyle = "black";
    ctx.fillText("Survival Time: " + Math.floor(survivalTime), 10, 20);

    if (gameRunning) requestAnimationFrame(draw);
}

// Main game loop to update the game state
function gameLoop() {
    if (gameRunning) {
        moveProjectile();
        checkCollision();
        draw();
        survivalTime += 0.1;

        if (survivalTime >= 20) {
            gameRunning = false;
            alert("You survived 20 seconds! You win!");
            if (confirm("Play again?")) resetGame();
        }

        setTimeout(gameLoop, 100);
    }
}

// Player movement with WASD keys
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            player.y -= 10;
            break;
        case "s":
            player.y += 10;
            break;
        case "a":
            player.x -= 10;
            break;
        case "d":
            player.x += 10;
            break;
    }

    // Keep the player within canvas bounds
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) 
        player.y = canvas.height - player.height;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) 
        player.x = canvas.width - player.width;
});

// Start the game
gameLoop();
