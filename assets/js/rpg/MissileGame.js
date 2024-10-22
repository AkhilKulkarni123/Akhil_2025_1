let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let player = { x: 50, y: canvas.height / 2, width: 40, height: 40 }; // Turtle
let projectile = { x: Math.random() * canvas.width, y: Math.random() * canvas.height, width: 20, height: 20 };
let gameRunning = true;
let survivalTime = 0;
let gameOver = false;

// Load the projectile sprite
let projectileImage = new Image();
projectileImage.src = "images/projectile.png"; // Ensure this path is correct

function moveProjectile() {
    projectile.x += (Math.random() - 0.5) * 4; // Move randomly in x direction
    projectile.y += (Math.random() - 0.5) * 4; // Move randomly in y direction

    // Keep the projectile within bounds
    if (projectile.x < 0) projectile.x = 0;
    if (projectile.x + projectile.width > canvas.width) projectile.x = canvas.width - projectile.width;
    if (projectile.y < 0) projectile.y = 0;
    if (projectile.y + projectile.height > canvas.height) projectile.y = canvas.height - projectile.height;
}

function checkCollision() {
    if (
        projectile.x < player.x + player.width &&
        projectile.x + projectile.width > player.x &&
        projectile.y < player.y + player.height &&
        projectile.y + projectile.height > player.y
    ) {
        gameRunning = false;
        gameOver = true;
        alert("You hit the projectile! Game over.");
        resetGame();
    }
}

function resetGame() {
    survivalTime = 0;
    projectile.x = Math.random() * canvas.width;
    projectile.y = Math.random() * canvas.height;
    gameRunning = true;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green"; // Color for the player
    ctx.fillRect(player.x, player.y, player.width, player.height); // Draw the player

    ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height); // Draw the projectile

    ctx.fillStyle = "black";
    ctx.fillText("Survival Time: " + Math.floor(survivalTime), 10, 20); // Draw survival time

    if (gameRunning) {
        requestAnimationFrame(draw);
    }
}

function gameLoop() {
    if (gameRunning) {
        moveProjectile();
        checkCollision();
        draw();
        survivalTime += 0.1; // Increase survival time
        if (survivalTime >= 20) {
            gameRunning = false;
            gameOver = true;
            alert("You survived for 20 seconds! You win!");
            let playAgain = confirm("Would you like to play again?");
            if (playAgain) {
                resetGame();
            }
        }
        setTimeout(gameLoop, 100); // Continue the game loop
    }
}

// Start the game loop
gameLoop();

// Control the player with WASD
document.addEventListener("keydown", function(event) {
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

    // Keep player within bounds
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
});

