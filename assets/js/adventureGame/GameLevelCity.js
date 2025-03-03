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
    const STOCKGUY_SCALE_FACTOR = 2;
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

    // List of objects definitions for this city level
    this.objects = [
      { class: Background, data: image_data_city },
      { class: Player, data: sprite_data_stockguy }, // Replaced with new player sprite
      { class: Npc, data: sprite_data_tux },
      { class: Npc, data: sprite_data_octocat }
    ];

    // Timer setup
    this.timerStartTime = Date.now();
    this.timerDuration = 70000; // 70 seconds

    // Check if the time is up every second
    setInterval(() => {
      const elapsedTime = Date.now() - this.timerStartTime;
      const remainingTime = this.timerDuration - elapsedTime;

      if (remainingTime <= 0) {
        alert("Time's Up!");
        // Stop the game or implement other logic after the time's up
      }
    }, 1000);

    // Logic for ESC key press and time condition
    document.addEventListener('keydown', (event) => {
      if (event.key === "Escape") {
        const elapsedTime = Date.now() - this.timerStartTime;

        if (elapsedTime < 12000) {
          alert("You need more knowledge, you must meet with all of the NPC's. Try the journey again!");
          // Reset the game
          window.location.reload(); // This will reload the page and restart the game
        } else {
          alert("Congrats! You are ready for the true test");
        }
      }
    });

    // Show alert after 2 seconds
    setTimeout(() => {
      alert("Hello traveler! Now the true test begins. Meet up with the NPC's to gain enough knowledge for the final test!!!");
    }, 2000);
  }
}

export default GameLevelCity;
