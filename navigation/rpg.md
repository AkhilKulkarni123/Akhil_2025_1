---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id="gameCanvas" width="800" height="600" style="border:1px solid black;"></canvas>

<script>
    console.log("Game script started!");  // Log to confirm script execution.

    // Canvas Setup
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Player Initialization
    const player = { x: 50, y: canvas.height / 2 - 20, width: 40, height: 40 };

    // Projectile Initialization
    const projectile = {
        x: Math.random() * (canvas.width - 20),
        y: Math.random() * (canvas.height - 20),
        width: 20,
        height: 20,
    };

    const projectileImage = new Image();
    projectileImage.src = "{{site.baseurl}}/images/rpg/projectile.png";

    let gameRunning = true;
    let survivalTime = 0;

    // Random Projectile Movement
    function moveProjectile() {
        projectile.x += (Math.random() - 0.5) * 6;
        projectile.y += (Math.random() - 0.5) * 6;

        // Keep the projectile within canvas bounds
        projectile.x = Math.max(0, Math.min(projectile.x, canvas.width - projectile.width));
        projectile.y = Math.max(0, Math.min(projectile.y, canvas.height - projectile.height));
    }

    // Collision Detection
    function checkCollision() {
        if (
            player.x < projectile.x + projectile.width &&
            player.x + player.width > projectile.x &&
            player.y < projectile.y + projectile.height &&
            player.y + player.height > projectile.y
        ) {
            gameRunning = false;
            alert("Game over! You hit the projectile.");
            resetGame();
        }
    }

    // Reset the Game
    function resetGame() {
        survivalTime = 0;
        projectile.x = Math.random() * (canvas.width - 20);
        projectile.y = Math.random() * (canvas.height - 20);
        gameRunning = true;
        gameLoop();
    }

    // Draw the Game
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas

        // Draw Player
        ctx.fillStyle = "green";
        ctx.fillRect(player.x, player.y, player.width, player.height);

        // Draw Projectile
        ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height);

        // Display Survival Time
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Survival Time: " + Math.floor(survivalTime), 10, 30);
    }

    // Main Game Loop
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

            requestAnimationFrame(gameLoop);
        }
    }

    // Start the Game After Image Loads
    projectileImage.onload = () => {
        console.log("Projectile image loaded successfully.");
        gameLoop();
    };

    projectileImage.onerror = () => {
        console.error("Failed to load projectile image.");
    };

    // Player Movement with WASD Keys
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "w": player.y -= 10; break;
            case "s": player.y += 10; break;
            case "a": player.x -= 10; break;
            case "d": player.x += 10; break;
        }

        // Keep Player within Canvas
        player.x = Math.max(0, Math.min(player.x, canvas.width - player.width));
        player.y = Math.max(0, Math.min(player.y, canvas.height - player.height));
    });

    console.log("Game setup complete.");
</script>
