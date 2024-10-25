---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id="gameCanvas" width="800" height="600" style="border:1px solid black;"></canvas>

<!-- Load JavaScript after the canvas is defined -->
<script>
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

        const backgroundImage = new Image();
        backgroundImage.src = "{{site.baseurl}}/images/rpg/water.png";

        let gameRunning = true;
        let survivalTime = 0;
        let lastUpdateTime = Date.now();

        function moveProjectile() {
            projectile.x += (Math.random() - 0.5) * 6;
            projectile.y += (Math.random() - 0.5) * 6;

            projectile.x = Math.max(0, Math.min(canvas.width - projectile.width, projectile.x));
            projectile.y = Math.max(0, Math.min(canvas.height - projectile.height, projectile.y));
        }

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

        function resetGame() {
            survivalTime = 0;
            projectile.x = Math.random() * canvas.width;
            projectile.y = Math.random() * canvas.height;
            gameRunning = true;
            gameLoop();
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "green";
            ctx.fillRect(player.x, player.y, player.width, player.height);

            ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height);

            ctx.fillStyle = "black";
            ctx.font = "20px Arial";
            ctx.fillText("Survival Time: " + Math.floor(survivalTime), 10, 30);
        }

        function updateSurvivalTime() {
            const now = Date.now();
            if (now - lastUpdateTime >= 1000) {
                survivalTime++;
                lastUpdateTime = now;
            }
        }

        function gameLoop() {
            if (gameRunning) {
                moveProjectile();
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

        backgroundImage.onload = () => {
            projectileImage.onload = gameLoop;
        };

        document.addEventListener("keydown", (event) => {
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

            player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
            player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
        });
    };
</script>

