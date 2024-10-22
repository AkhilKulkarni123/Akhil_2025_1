// MissileGame.js

export default {
    start() {
        const canvas = document.getElementById('gameCanvas');
        if (!canvas) {
            console.error("Canvas element not found!");
            return;
        }

        const ctx = canvas.getContext('2d');
        let player = { x: 50, y: canvas.height / 2, width: 40, height: 40 };
        let projectile = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            width: 20,
            height: 20,
        };
        let gameRunning = true;
        let survivalTime = 0;

        const projectileImage = new Image();
        projectileImage.src = '{{site.baseurl}}/images/rpg/projectile.png';

        function moveProjectile() {
            projectile.x += (Math.random() - 0.5) * 4;
            projectile.y += (Math.random() - 0.5) * 4;

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
                alert('Game over! You hit the projectile.');
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
            ctx.fillStyle = 'green';
            ctx.fillRect(player.x, player.y, player.width, player.height);
            ctx.drawImage(projectileImage, projectile.x, projectile.y, projectile.width, projectile.height);
            ctx.fillStyle = 'black';
            ctx.fillText(`Survival Time: ${Math.floor(survivalTime)}`, 10, 20);

            if (gameRunning) {
                requestAnimationFrame(draw);
            }
        }

        function gameLoop() {
            if (gameRunning) {
                moveProjectile();
                checkCollision();
                draw();
                survivalTime += 0.1;

                if (survivalTime >= 20) {
                    gameRunning = false;
                    alert('Congratulations! You survived 20 seconds.');
                    if (confirm('Play again?')) resetGame();
                }

                setTimeout(gameLoop, 100);
            }
        }

        gameLoop();

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'w': player.y -= 10; break;
                case 's': player.y += 10; break;
                case 'a': player.x -= 10; break;
                case 'd': player.x += 10; break;
            }

            player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
            player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
        });
    },
};
