import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';

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
      greeting: "Welcome to the city! Dodge the incoming missiles!",
      src: image_src_city,
      pixels: { height: 580, width: 1038 }
    };

    // Player data
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png";
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      greeting: "Stay sharp and dodge the missiles!",
      src: sprite_src_chillguy,
      SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 50, y: height - (height / CHILLGUY_SCALE_FACTOR) },
      pixels: { height: 384, width: 512 },
      orientation: { rows: 3, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      right: { row: 1, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // List of objects for this level
    this.objects = [
      { class: Background, data: image_data_city },
      { class: Player, data: sprite_data_chillguy }
    ];

    this.missiles = [];
    this.timerStartTime = Date.now();
    this.timerDuration = 60000; // 60 seconds

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.canvas.width = width;
    this.canvas.height = height;
    
    // Preload missile image
    this.missileImg = new Image();
    this.missileImg.src = path + "/images/projectile.png";
    this.missileImg.onload = () => {
      this.imageLoaded = true;
    };
    
    // Spawn missiles at intervals
    setInterval(() => {
      this.spawnMissile(path);
    }, 2000); // Spawn a new missile every 2 seconds

    // Check for missile collisions
    this.missileInterval = setInterval(() => {
      this.updateMissiles();
    }, 50);

    // Time check
    setInterval(() => {
      const elapsedTime = Date.now() - this.timerStartTime;
      if (elapsedTime >= this.timerDuration) {
        alert("Time's Up! You Win!");
        clearInterval(this.missileInterval);
      }
    }, 1000);
    
    requestAnimationFrame(() => this.render());
  }

  spawnMissile() {
    const missile = {
      x: 0,
      y: Math.random() * GameEnv.innerHeight,
      width: 134,
      height: 134,
      speed: 5,
      frameX: 0,
      totalFrames: 8,
      frameWidth: 134,
      frameHeight: 134,
      currentFrame: 0
    };
        missile.width = 15;
    missile.height = 15;
    missile.frameWidth = 67;
    missile.frameHeight = 268;
    this.missiles.push(missile);
  }

  updateMissiles() {
    const player = this.objects.find(obj => obj.class === Player).instance;
    if (!player) return;
    
    this.missiles.forEach(missile => {
      missile.x += missile.speed;
      missile.currentFrame = (missile.currentFrame + 1) % missile.totalFrames;
      if (this.isColliding(player, missile)) {
        alert("Job Not Done! Try Again.");
        location.reload(); // Restart level
      }
    });
  }

  isColliding(player, missile) {
    const playerBounds = player.getBounds();
    const missileBounds = {
      left: missile.x,
      right: missile.x + missile.width,
      top: missile.y,
      bottom: missile.y + missile.height
    };
    return !(
      playerBounds.right < missileBounds.left ||
      playerBounds.left > missileBounds.right ||
      playerBounds.bottom < missileBounds.top ||
      playerBounds.top > missileBounds.bottom
    );
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.imageLoaded) {
      this.missiles.forEach(missile => {
        this.ctx.drawImage(
          this.missileImg,
          missile.currentFrame * missile.frameWidth, 0, // Crop frame from spritesheet
          missile.frameWidth, missile.frameHeight,
          missile.x, missile.y, // Position on canvas
          missile.width, missile.height
        );
      });
    }
    requestAnimationFrame(() => this.render());
  }
}

export default GameLevelCity;
