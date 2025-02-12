import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

class GameLevelCity {
    constructor(path) {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        // Values dependent on GameEnv.create()
        let width = GameEnv.innerWidth;
        let height = GameEnv.innerHeight;

        // Background data (city background is the same as desert background)
        const image_src_desert = path + "/images/gamify/desert.png"; // keep same background
        const image_data_desert = {
            name: 'desert',
            greeting: "Welcome to the city! It's bustling with life.",
            src: image_src_desert,
            pixels: { height: 580, width: 1038 }
        };

        // Player data (Chillguy same as Desert level)
        const sprite_src_chillguy = path + "/images/gamify/chillguy.png"; // Same sprite as Desert
        const CHILLGUY_SCALE_FACTOR = 5;
        const sprite_data_chillguy = {
            id: 'Chill Guy',
            greeting: "Hi, I am Chill Guy, exploring the city!",
            src: sprite_src_chillguy,
            SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 0, y: height - (height / CHILLGUY_SCALE_FACTOR) },
            pixels: { height: 384, width: 512 },
            orientation: { rows: 3, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            left: { row: 2, start: 0, columns: 3 },
            right: { row: 1, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
        };

        // NPC data (Tux same as Desert level)
        const sprite_src_tux = path + "/images/gamify/tux.png"; // Same sprite as Desert
        const sprite_data_tux = {
            id: 'Tux',
            greeting: "Hi, I am Tux, the Linux mascot!",
            src: sprite_src_tux,
            SCALE_FACTOR: 8,
            ANIMATION_RATE: 50,
            pixels: { height: 256, width: 352 },
            INIT_POSITION: { x: (width / 2), y: (height / 2) },
            orientation: { rows: 8, columns: 11 },
            down: { row: 5, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        };

        // NPC data (Octocat same as Desert level)
        const sprite_src_octocat = path + "/images/gamify/octocat.png"; // Same sprite as Desert
        const sprite_data_octocat = {
            id: 'Octocat',
            greeting: "Hi, I am Octocat, the GitHub mascot!",
            src: sprite_src_octocat,
            SCALE_FACTOR: 10,
            ANIMATION_RATE: 50,
            pixels: { height: 301, width: 801 },
            INIT_POSITION: { x: (width / 4), y: (height / 4) },
            orientation: { rows: 1, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        };

        // City specific data (collision counter)
        this.collisions = 0;
        this.maxCollisions = 15;

        this.objects = [
            new Background(image_data_desert),  // Same background as desert
            new Player(sprite_data_chillguy),    // Same player sprite
            new Npc(sprite_data_tux),           // Same NPC as Desert
            new Npc(sprite_data_octocat)        // Same NPC as Desert
        ];
    }

    // Update method for collision tracking and game logic
    update() {
        GameEnv.gameObjects.forEach((object) => {
            if (object instanceof Player) {
                // Handle collision detection with NPCs
                GameEnv.gameObjects.forEach((npc) => {
                    if (npc instanceof Npc && this.checkCollision(object, npc)) {
                        this.collisions++;
                        if (this.collisions < this.maxCollisions) {
                            this.showMessage(`Collisions: ${this.collisions} / ${this.maxCollisions}`);
                        } else {
                            this.showMessage("You reached 15 collisions! Press ESC to end the level.");
                        }
                    }
                });
            }
        });
    }

    // Collision detection function
    checkCollision(player, npc) {
        const playerBox = player.getBoundingBox();
        const npcBox = npc.getBoundingBox();
        return (
            playerBox.x < npcBox.x + npcBox.width &&
            playerBox.x + playerBox.width > npcBox.x &&
            playerBox.y < npcBox.y + npcBox.height &&
            playerBox.y + playerBox.height > npcBox.y
        );
    }

    // Display messages in the UI
    showMessage(message) {
        const messageDiv = document.getElementById('message');
        if (!messageDiv) {
            const messageElement = document.createElement('div');
            messageElement.id = 'message';
            messageElement.style.position = 'fixed';
            messageElement.style.bottom = '20px';
            messageElement.style.left = '20px';
            messageElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            messageElement.style.color = 'white';
            messageElement.style.padding = '10px';
            messageElement.style.borderRadius = '5px';
            document.body.appendChild(messageElement);
        }
        document.getElementById('message').textContent = message;
    }

    // Handle the ESC key press for logic
    handleEscKeyPress() {
        if (this.collisions < this.maxCollisions) {
            this.showMessage("You didn't reach 15 collisions. Stop playing.");
        } else {
            alert("Level complete! Moving to the next level.");
        }
    }
}

export default GameLevelCity;
