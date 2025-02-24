import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

class GameLevelCity {
  constructor(path) {
    const width = GameEnv.innerWidth;
    const height = GameEnv.innerHeight;

    // Background data
    const image_src_city = path + "/images/gamify/map.jpg";
    const image_data_city = {
      name: 'City',
      greeting: "Welcome to the city! Survive for 60 seconds!",
      src: image_src_city,
      pixels: { height: 580, width: 1038 }
    };

    // Player data
    const sprite_src_stockguy = path + "/images/gamify/walking_sprite_sheet.png";
    const STOCKGUY_SCALE_FACTOR = 4;
    const sprite_data_stockguy = {
      id: 'Stock Guy',
      greeting: "Hi I am Stock Guy, ready for action!",
      src: sprite_src_stockguy,
      SCALE_FACTOR: STOCKGUY_SCALE_FACTOR,
      STEP_FACTOR: 5,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 100, y: height - (height / STOCKGUY_SCALE_FACTOR) },
      pixels: { height: 768, width: 576 },
      orientation: { rows: 4, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 1, start: 0, columns: 3 },
      right: { row: 2, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.5, heightPercentage: 0.25 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    // NPC data
    const sprite_src_tux = path + "/images/gamify/tux.png";
    const sprite_data_tux = {
      id: 'Tux',
      greeting: "Hi, I'm Tux, the Linux mascot!",
      src: sprite_src_tux,
      SCALE_FACTOR: 8,
      pixels: { height: 256, width: 352 },
      INIT_POSITION: { x: width / 2, y: height / 2 },
      orientation: { rows: 8, columns: 11 },
      down: { row: 5, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.4, heightPercentage: 0.8 },
    };

    // Projectile data (chases player)
    const sprite_src_projectile = path + "/images/rpg/projectile.png";
    this.projectile = {
      id: 'Chasing Projectile',
      src: sprite_src_projectile,
      SCALE_FACTOR: 5,
      speed: 2,  // Speed of the projectile
      x: width - 100,
      y: 100,
      width: 64,
      height: 64
    };

    // Player and NPC objects
    this.player = new Player(sprite_data_stockguy);
    this.npcs = [new Npc(sprite_data_tux)];
    this.background = new Background(image_data_city);

    // Timer setup
    this.timerStartTime = Date.now();
    this.timerDuration = 60000; // 60 seconds

    // Display timer
    this.displayTimer = () => {
      const elapsedTime = Math.floor((Date.now() - this.timerStartTime) / 1000);
      let timerDisplay = document.getElementById("level-timer");

      if (!timerDisplay) {
        timerDisplay = document.createElement("div");
        timerDisplay.id = "level-timer";
        timerDisplay.style.position = "absolute";
        timerDisplay.style.top = "10px";
        timerDisplay.style.left = "10px";
        timerDisplay.style.color = "white";
        timerDisplay.style.fontSize = "20px";
        document.body.appendChild(timerDisplay);
      }

      timerDisplay.innerText = `Time: ${elapsedTime}s`;
    };

    // Move projectile towards player
    this.moveProjectile = () => {
      if (!this.player) return;

      const dx = this.player.x - this.projectile.x;
      const dy = this.player.y - this.projectile.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0) {
        this.projectile.x += (dx / distance) * this.projectile.speed;
        this.projectile.y += (dy / distance) * this.projectile.speed;
      }

      this.checkCollision();
    };

    // Check for collision
    this.checkCollision = () => {
      if (this.isColliding(this.player, this.projectile)) {
        alert("You got hit! Restarting level...");
        location.reload(); // Restart level
      }
    };

    this.isColliding = (player, projectile) => {
      return !(
        player.x + player.width < projectile.x ||
        player.x > projectile.x + projectile.width ||
        player.y + player.height < projectile.y ||
        player.y > projectile.y + projectile.height
      );
    };

    // Timer to check if the player survived
    this.timerInterval = setInterval(() => {
      this.displayTimer();
      this.moveProjectile();

      if (Date.now() - this.timerStartTime >= this.timerDuration) {
        this.levelCompleted = true;
        clearInterval(this.timerInterval);
        alert("You survived! Press ESC to move to the next level.");
      }
    }, 1000);

    // Escape key to move to the next level
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.levelCompleted) {
          alert("Moving to the next level!");
          // Logic to transition to next level
        } else {
          alert("Survive for 60 seconds first!");
        }
      }
    });
  }
}

export default GameLevelCity;
