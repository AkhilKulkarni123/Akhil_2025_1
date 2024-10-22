// Get the canvas and context
const canvas = document.getElementById("gameCanvas");
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext("2d");

// Player and projectile objects
let player = { x: 50, y: canvas.height / 2, width: 40, height: 40 };
let projectile = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: 20,
    height: 20
};

let gameRunning = true;
let survivalTime = 0;
let gameOver = false;

// Load the projectile sprite image
let projectileImage = new Image();
projectileImage.src = "images/projectile.png"; // Ensure path is correct

// Move projectile randomly within bounds
function moveProjectile() {
    projectile.x += (Math.random() - 0.5) * 4;
    projectile.y += (Math.random() - 0.5) * 4;

    // Keep projectile within canvas bounds
    if (projectile.x < 0) projectile.x = 0;
    if (projectile.x + projectile.width > canvas.width) 
        projectile.x = canvas.width - projectile.width;
    if (projectile.y < 0) projectile.y = 0;
    if (projectile.y + projectile.height > canvas.height) 
        projectile.y = canvas.height - projectile.height;
}

// Check for collision between player and projectile
function checkCollision() {
    if (
        player.x < projectile.x + projectile.width &&
        player.x + player.width > projectile.x &&
        player.y < projectile.y + projectile.height &&
        player.y + player.height > projectile.y
    ) {
        gameRunning = false;
        gameOver = true;
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

// Draw player, projectile, and survival time
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player as a green rectangle
    ctx.fillStyle = "green";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw projectile using the sprite image
    ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height);

    // Display survival time
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Survival Time: " + Math.floor(survivalTime), 10, 30);

    if (gameRunning) {
        requestAnimationFrame(draw);
    }
}

// Main game loop
function gameLoop() {
    if (gameRunning) {
        moveProjectile();
        checkCollision();
        draw();

        // Increase survival time
        survivalTime += 0.1;
        if (survivalTime >= 20) {
            gameRunning = false;
            alert("You survived for 20 seconds! You win!");
            if (confirm("Play again?")) {
                resetGame();
            }
        }

        setTimeout(gameLoop, 100); // Loop every 100ms
    }
}

// Start the game loop
gameLoop();

// Player controls with WASD
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            player.y -= 10; // Move up
            break;
        case "s":
            player.y += 10; // Move down
            break;
        case "a":
            player.x -= 10; // Move left
            break;
        case "d":
            player.x += 10; // Move right
            break;
    }

    // Ensure player stays within bounds
    player.x = Math.max(0, Math.min(player.x, canvas.width - player.width));
    player.y = Math.max(0, Math.min(player.y, canvas.height - player.height));
});
