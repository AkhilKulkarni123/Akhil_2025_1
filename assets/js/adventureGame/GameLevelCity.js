import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

class GameLevelCity {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data for City level
    const image_src_city = path + "/images/gamify/map.jpg";
    const image_data_city = {
      name: 'City',
      greeting: "Welcome to the city! There's a lot to explore here, and many interesting people to meet!",
      src: image_src_city,
      pixels: { height: 580, width: 1038 }
    };

    // Player data for Stock Guy (New Sprite)
    const sprite_src_stockguy = path + "/images/gamify/walking_sprite_sheet.png";
    const STOCKGUY_SCALE_FACTOR = 4;
    const sprite_data_stockguy = {
      id: 'Stock Guy',
      greeting: "Hi I am Stock Guy, ready for business and adventure!",
      src: sprite_src_stockguy,
      SCALE_FACTOR: STOCKGUY_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / STOCKGUY_SCALE_FACTOR) },
      pixels: { height: 768, width: 576 }, // Adjusted for the 3x4 sprite sheet
      orientation: { rows: 4, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 1, start: 0, columns: 3 },
      right: { row: 2, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.5, heightPercentage: 0.25 }, // Adjusted for proportions
      keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // List of objects definitions for this city level
    this.objects = [
      { class: Background, data: image_data_city },
      { class: Player, data: sprite_data_stockguy } // Replaced with new player sprite
    ];

    // Timer and collision detection
    this.timerStartTime = Date.now();
    this.timerDuration = 60000; // 60 seconds
    this.isProjectileActive = true;

    // Timer display for the level
    const timerDisplay = document.createElement("div");
    timerDisplay.id = "timer-display";
    timerDisplay.style.position = "absolute";
    timerDisplay.style.top = "10px";
    timerDisplay.style.left = "10px";
    timerDisplay.style.color = "white";
    timerDisplay.style.fontSize = "20px";
    document.body.appendChild(timerDisplay);

    // Add a projectile that chases the player
    this.projectile = {
      sprite: new Image(),
      x: Math.random() * width,
      y: Math.random() * height,
      size: 30,
      speed: 2
    };
    this.projectile.sprite.src = path + "/images/rpg/projectile.png"; // Assuming a projectile image exists

    // Update the timer and check for collision
    const updateTimer = () => {
      const elapsedTime = Date.now() - this.timerStartTime;
      const remainingTime = Math.max(0, this.timerDuration - elapsedTime);
      timerDisplay.innerText = `Time: ${Math.floor(remainingTime / 1000)}s`;

      if (remainingTime <= 0) {
        alert("Time's Up! You failed the level.");
        this.resetLevel();
      }
    };

    // Move the projectile towards the player
    const moveProjectile = () => {
      if (!this.isProjectileActive) return;

      const player = GameEnv.gameObjects.find(obj => obj.id === 'Stock Guy');
      if (!player) return;

      // Calculate direction towards player
      const dx = player.x - this.projectile.x;
      const dy = player.y - this.projectile.y;
      const angle = Math.atan2(dy, dx);
      this.projectile.x += Math.cos(angle) * this.projectile.speed;
      this.projectile.y += Math.sin(angle) * this.projectile.speed;

      // Check for collision
      if (this.isColliding(player, this.projectile)) {
        alert("You were hit by the projectile! Restarting level...");
        this.resetLevel();
      }
    };

    // Collision detection (for the player and projectile)
    this.isColliding = (player, projectile) => {
      const playerBounds = player.getBounds();
      const projectileBounds = {
        left: projectile.x,
        right: projectile.x + projectile.size,
        top: projectile.y,
        bottom: projectile.y + projectile.size
      };
      return !(playerBounds.right < projectileBounds.left || playerBounds.left > projectileBounds.right || playerBounds.bottom < projectileBounds.top || playerBounds.top > projectileBounds.bottom);
    };

    // Reset the level if the player collides with the projectile
    this.resetLevel = () => {
      GameEnv.gameObjects = [];
      this.timerStartTime = Date.now(); // Reset timer
      this.objects = [
        { class: Background, data: image_data_city },
        { class: Player, data: sprite_data_stockguy } // Reinitialize player sprite
      ];
      this.loadLevel(); // Reload the level
    };

    // Listen for the "ESC" key press to move to the next level
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const elapsedTime = Date.now() - this.timerStartTime;
        if (elapsedTime >= this.timerDuration) {
          // Player survived 60 seconds, move to the next level
          alert("Level completed! Moving to the next level.");
          GameControl.currentLevelIndex++; // Move to the next level
          GameControl.loadLevel(); // Load the next level
        } else {
          alert("You need to survive for 60 seconds to proceed!");
        }
      }
    });

    // Start the timer and projectile movement
    setInterval(updateTimer, 1000);
    setInterval(moveProjectile, 1000 / 60); // 60 FPS update for projectile movement
  }

  // Method to load level objects (same as previous)
  loadLevel() {
    for (let object of this.objects) {
      if (!object.data) object.data = {};
      new object.class(object.data);
    }
  }
}

export default GameLevelCity;
