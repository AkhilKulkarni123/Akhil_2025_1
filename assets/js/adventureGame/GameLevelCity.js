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
      pixels: { height: 768, width: 576 },
      orientation: { rows: 4, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 1, start: 0, columns: 3 },
      right: { row: 2, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.5, heightPercentage: 0.25 },
      keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    // NPC data for Tux
    const sprite_src_tux = path + "/images/gamify/tux.png";
    const sprite_data_tux = {
      id: 'Tux',
      greeting: "Hi I am Tux, the Linux mascot.  I am very happy to spend some Linux shell time with you!",
      src: sprite_src_tux,
      SCALE_FACTOR: 8,
      ANIMATION_RATE: 50,
      pixels: { height: 256, width: 352 },
      INIT_POSITION: { x: (width / 2), y: (height / 2) },
      orientation: { rows: 8, columns: 11 },
      down: { row: 5, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.4, heightPercentage: 0.8 },
    };

    // NPC data for Octocat
    const sprite_src_octocat = path + "/images/gamify/octocat.png";
    const sprite_data_octocat = {
      id: 'Octocat',
      greeting: "Hi I am Octocat! I am the GitHub collaboration mascot!",
      src: sprite_src_octocat,
      SCALE_FACTOR: 10,
      ANIMATION_RATE: 50,
      pixels: { height: 301, width: 801 },
      INIT_POSITION: { x: (width / 4), y: (height / 4) },
      orientation: { rows: 1, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.3, heightPercentage: 0.3 },
    };

    // Coin data
    const sprite_src_coin = path + "/images/gamify/coin.png";
    this.coins = [
      { x: width * 0.2, y: height * 0.3, collected: false },
      { x: width * 0.5, y: height * 0.5, collected: false },
      { x: width * 0.8, y: height * 0.7, collected: false }
    ];

    // Render coins
    this.renderCoins = (context) => {
      const img = new Image();
      img.src = sprite_src_coin;
      img.onload = () => {
        this.coins.forEach(coin => {
          if (!coin.collected) {
            context.drawImage(img, coin.x, coin.y, 30, 30);
          }
        });
      };
    };

    // Handle coin collection
    this.checkCoinCollection = (player) => {
      this.coins.forEach(coin => {
        if (!coin.collected && Math.abs(player.x - coin.x) < 30 && Math.abs(player.y - coin.y) < 30) {
          coin.collected = true;
        }
      });
    };

    // Display message after 3 seconds
    setTimeout(() => {
      alert("Get all the money to buy magic knowledge.");
    }, 3000);

    // Handle Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (this.coins.every(coin => coin.collected)) {
          alert("Congrats!");
        } else {
          location.reload();
        }
      }
    });

    // List of objects definitions for this city level
    this.objects = [
      { class: Background, data: image_data_city },
      { class: Player, data: sprite_data_stockguy },
      { class: Npc, data: sprite_data_tux },
      { class: Npc, data: sprite_data_octocat }
    ];

    // Timer setup
    this.timerStartTime = Date.now();
    this.timerDuration = 60000; // 60 seconds

    // Check if the time is up every second
    setInterval(() => {
      const elapsedTime = Date.now() - this.timerStartTime;
      const remainingTime = this.timerDuration - elapsedTime;

      if (remainingTime <= 0) {
        alert("Time's Up!");
        // Stop the game or implement other logic after the time's up
      }
    }, 1000);
  }
}

export default GameLevelCity;
