window.onload = () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Player setup
    const player = { x: 50, y: canvas.height / 2, width: 40, height: 40 };

    // Projectile setup
    const projectile = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 20,
        height: 20,
    };

    const projectileImage = new Image();
    projectileImage.src = "{{site.baseurl}}/images/rpg/projectile.png";

    let gameRunning = true;
    let survivalTime = 0;

    let lastUpdateTime = Date.now();  // Track when the timer was last updated

    // Random projectile movement
    function moveProjectile() {
        projectile.x += (Math.random() - 0.5) * 6;
        projectile.y += (Math.random() - 0.5) * 6;

        // Keep projectile within bounds
        if (projectile.x < 0) projectile.x = 0;
        if (projectile.x + projectile.width > canvas.width) projectile.x = canvas.width - projectile.width;
        if (projectile.y < 0) projectile.y = 0;
        if (projectile.y + projectile.height > canvas.height) projectile.y = canvas.height - projectile.height;
    }

    // Check for collisions
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

    // Reset game state
    function resetGame() {
        survivalTime = 0;
        projectile.x = Math.random() * canvas.width;
        projectile.y = Math.random() * canvas.height;
        gameRunning = true;
        gameLoop(); // Restart the game
    }

    // Draw the game elements
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(player.x, player.y, player.width, player.height);

        ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height);

        ctx.fillStyle = "black";
        ctx.fillText("Survival Time: " + Math.floor(survivalTime), 10, 20);
    }

    // Update the survival time based on real seconds
    function updateSurvivalTime() {
        const now = Date.now();
        if (now - lastUpdateTime >= 1000) {  // If 1 second has passed
            survivalTime++;
            lastUpdateTime = now;
        }
    }

    // Main game loop
    function gameLoop() {
        if (gameRunning) {
            moveProjectile();
            checkCollision();
            updateSurvivalTime();
            draw();

            if (survivalTime >= 20) {
                gameRunning = false;
                alert("You survived for 20 seconds! You win!");
                if (confirm("Would you like to play again?")) resetGame();
            }

            requestAnimationFrame(gameLoop);
        }
    }

    // Start the game loop when assets are loaded
    projectileImage.onload = gameLoop;

    // Player movement with WASD keys
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "w": player.y -= 10; break;
            case "s": player.y += 10; break;
            case "a": player.x -= 10; break;
            case "d": player.x += 10; break;
        }

        // Keep player within canvas boundaries
        player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
        player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
    });
};
