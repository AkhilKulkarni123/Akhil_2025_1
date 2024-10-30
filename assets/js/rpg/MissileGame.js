window.onload = () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Player setup
    const player = { 
        x: 50, 
        y: canvas.height / 2, 
        width: 40, 
        height: 40, 
        speed: 100 
    };

    // Projectile setup
    const projectile = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 20,
        height: 20,
        speed: 0.0000000000000000000000001 // Adjusted speed for a more balanced challenge
    };

    const projectileImage = new Image();
    projectileImage.src = "{{site.baseurl}}/assets/rpg/projectile.png";

    const backgroundImage = new Image();
    backgroundImage.src = "{{site.baseurl}}/assets/rpg/water.png"; 

    let gameRunning = true;
    let survivalTime = 0;
    let lastUpdateTime = Date.now(); 

    // Function to make the projectile chase the player
    function chasePlayer() {
        const dx = player.x - projectile.x;
        const dy = player.y - projectile.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) { 
            // Normalize direction and move towards the player more smoothly
            projectile.x += (dx / distance) * projectile.speed;
            projectile.y += (dy / distance) * projectile.speed;
        }
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
            alert("Game over! You were caught by the projectile.");
            resetGame();
        }
    }

    // Reset the game
    function resetGame() {
        survivalTime = 0;
        projectile.x = Math.random() * canvas.width;
        projectile.y = Math.random() * canvas.height;
        gameRunning = true;
        gameLoop(); 
    }

    // Draw the game elements
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 

        // Draw background
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Draw player
        ctx.fillStyle = "green";
        ctx.fillRect(player.x, player.y, player.width, player.height);

        // Draw projectile
        ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height);

        // Display survival time
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Survival Time: " + Math.floor(survivalTime), 10, 30);
    }

    // Update the survival time
    function updateSurvivalTime() {
        const now = Date.now();
        if (now - lastUpdateTime >= 1000) { 
            survivalTime++;
            lastUpdateTime = now;
        }
    }

    // Main game loop
    function gameLoop() {
        if (gameRunning) {
            chasePlayer(); // Projectile chases player
            checkCollision();
            updateSurvivalTime();
            draw();

            if (survivalTime >= 20) {
                gameRunning = false;
                alert("You survived for 20 seconds! You win!");
                if (confirm("Play again?")) resetGame();
            }

            requestAnimationFrame(gameLoop);
        }
    }

    // Start the game when all images are loaded
    backgroundImage.onload = () => {
        projectileImage.onload = gameLoop;
    };

    // Handle player movement with keyboard input
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "w":
                player.y -= player.speed;
                break;
            case "s":
                player.y += player.speed;
                break;
            case "a":
                player.x -= player.speed;
                break;
            case "d":
                player.x += player.speed;
                break;
        }

        // Ensure player stays within the canvas boundaries
        player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
        player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
    });
};
