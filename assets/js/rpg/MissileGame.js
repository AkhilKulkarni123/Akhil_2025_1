let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

// Player (Turtle) setup
let player = { x: 50, y: canvas.height / 2, width: 40, height: 40 }; 

// Projectile (missile) setup
let projectile = { 
    x: Math.random() * canvas.width, 
    y: Math.random() * canvas.height, 
    width: 20, 
    height: 20 
};

let projectileImage = new Image();
projectileImage.src = "{{site.baseurl}}/images/rpg/projectile.png"; // Ensure path correctness

let gameRunning = true;
let survivalTime = 0;

// Move the projectile randomly
function moveProjectile() {
    projectile.x += (Math.random() - 0.5) * 6; // Random x movement
    projectile.y += (Math.random() - 0.5) * 6; // Random y movement

    // Keep the projectile within bounds
    if (projectile.x < 0) projectile.x = 0;
    if (projectile.x + projectile.width > canvas.width) projectile.x = canvas.width - projectile.width;
    if (projectile.y < 0) projectile.y = 0;
    if (projectile.y + projectile.height > canvas.height) projectile.y = canvas.height - projectile.height;
}

// Check for collisions between the player and the projectile
function checkCollision() {
    if (
        player.x < projectile.x + projectile.width &&
        player.x + player.width > projectile.x &&
        player.y < projectile.y + projectile.height &&
        player.y + player.height > projectile.y
    ) {
        gameRunning = false;
        alert("You hit the projectile! Game over.");
        resetGame();
    }
}

// Reset the game state
function resetGame() {
    survivalTime = 0;
    projectile.x = Math.random() * canvas.width;
    projectile.y = Math.random() * canvas.height;
    gameRunning = true;
    gameLoop(); // Restart the game loop
}

// Draw the player, projectile, and survival time
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, player.width, player.height); // Draw player

    ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height); // Draw projectile

    ctx.fillStyle = "black";
    ctx.fillText("Survival Time: " + Math.floor(survivalTime), 10, 20); // Display survival time
}

// Main game loop to manage movement and rendering
function gameLoop() {
    if (gameRunning) {
        moveProjectile();
        checkCollision();
        draw();
        survivalTime += 0.1;

        if (survivalTime >= 20) {
            gameRunning = false;
            alert("You survived for 20 seconds! You win!");
            let playAgain = confirm("Would you like to play again?");
            if (playAgain) resetGame();
        }

        requestAnimationFrame(gameLoop); // Continuously run the game loop
    }
}

// Start the game loop
gameLoop();

// Player movement controls with WASD keys
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w": player.y -= 10; break;
        case "s": player.y += 10; break;
        case "a": player.x -= 10; break;
        case "d": player.x += 10; break;
    }

    // Keep the player within the canvas boundaries
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
});
