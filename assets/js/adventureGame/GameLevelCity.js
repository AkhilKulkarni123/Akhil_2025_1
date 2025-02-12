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

        // Background data for city (using desert placeholder for now)
        const image_src_city = path + "/images/gamify/desert.png"; // Placeholder for city image, you can update with actual city image
        const image_data_city = {
            name: 'city',
            greeting: "Welcome to the city! A vast open space with endless infrastructure!",
            src: image_src_city,
            pixels: { height: 580, width: 1038 }
        };

        // Player data for Chillguy (same as previous level)
        const sprite_src_chillguy = path + "/images/gamify/chillguy.png";
        const CHILLGUY_SCALE_FACTOR = 5;
        const sprite_data_chillguy = {
            id: 'Chill Guy',
            greeting: "Hi, I am Chill Guy, your guide! Ready to explore?",
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

        // NPC data from GameLevelDesert (using a desert NPC)
        const sprite_src_desert_npc = path + "/images/gamify/desert_npc.png"; // Using a desert NPC sprite
        const sprite_data_desert_npc = {
            id: 'Desert NPC',
            greeting: "Hi, I'm an explorer! Welcome to the desert!",
            src: sprite_src_desert_npc,
            SCALE_FACTOR: 8,
            ANIMATION_RATE: 50,
            pixels: { height: 256, width: 352 },
            INIT_POSITION: { x: (width / 2), y: (height / 2) },
            orientation: { rows: 8, columns: 11 },
            down: { row: 5, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            quiz: {
                title: "Desert Quiz",
                questions: [
                    "Which animal is commonly found in the desert?\n1. Camel\n2. Kangaroo\n3. Elephant\n4. Bear",
                    "Which of the following is a desert plant?\n1. Cactus\n2. Pine Tree\n3. Oak\n4. Maple",
                    "What is the hottest desert in the world?\n1. Sahara\n2. Gobi\n3. Sonoran\n4. Mojave"
                ]
            }
        };

        // Collision counter
        this.collisionCount = 0;

        // Add event listener for movement (WASD keys) and Escape key functionality
        this.setupKeyListeners();
        this.displayCollisionCount();
    }

    setupKeyListeners() {
        const player = this.objects.find(obj => obj.class === Player).data;

        // Function to handle key presses
        const moveHandler = (event) => {
            // Handle movement (WASD)
            if (event.keyCode === player.keypress.up) {
                player.INIT_POSITION.y -= 10; // Move up
            } else if (event.keyCode === player.keypress.down) {
                player.INIT_POSITION.y += 10; // Move down
            } else if (event.keyCode === player.keypress.left) {
                player.INIT_POSITION.x -= 10; // Move left
            } else if (event.keyCode === player.keypress.right) {
                player.INIT_POSITION.x += 10; // Move right
            }

            // Prevent default behavior for WASD (so it doesn't scroll the page)
            event.preventDefault();
        };

        // Function to handle Escape key for level end
        const escapeHandler = (event) => {
            if (event.key === 'Escape') {
                if (this.collisionCount < 15) {
                    alert("You have not yet reached 15 collisions. Keep going!");
                } else {
                    alert("All levels have ended! Congratulations on completing the game!");
                }
            }
        };

        // Detect collisions with NPCs
        const collisionHandler = () => {
            this.objects.forEach(obj => {
                if (obj.class === Npc) {
                    const npc = obj.data;
                    if (this.isPlayerNearNpc(player, npc)) {
                        this.collisionCount++;
                        this.displayCollisionCount(); // Update collision count in real-time
                    }
                }
            });
        };

        // Listen for keydown events
        document.addEventListener('keydown', moveHandler);
        document.addEventListener('keydown', escapeHandler);
        setInterval(collisionHandler, 100); // Check for collisions regularly
    }

    isPlayerNearNpc(player, npc) {
        // Check if player is within a certain distance from the NPC
        return Math.abs(player.INIT_POSITION.x - npc.INIT_POSITION.x) < 100 &&
            Math.abs(player.INIT_POSITION.y - npc.INIT_POSITION.y) < 100;
    }

    displayCollisionCount() {
        // Display collision count on top-left of the screen
        let collisionDisplay = document.getElementById('collisionCount');
        if (!collisionDisplay) {
            collisionDisplay = document.createElement('div');
            collisionDisplay.id = 'collisionCount';
            collisionDisplay.style.position = 'absolute';
            collisionDisplay.style.top = '10px';
            collisionDisplay.style.left = '10px';
            collisionDisplay.style.color = 'white';
            collisionDisplay.style.fontSize = '20px';
            document.body.appendChild(collisionDisplay);
        }

        // Update the count in real-time
        collisionDisplay.innerHTML = `Collisions: ${this.collisionCount}`;
    }

    // Function to initialize and render the game level
    initializeLevel() {
        // Initialize the environment (this should load the player, NPCs, and background)
        this.objects.forEach(obj => {
            if (obj.class === Background) {
                obj.class.render(obj.data);
            } else if (obj.class === Player) {
                obj.class.render(obj.data);
            } else if (obj.class === Npc) {
                obj.class.render(obj.data);
            }
        });
    }

    // Main update loop for the level
    update() {
        this.objects.forEach(obj => {
            if (obj.class === Player) {
                obj.class.update(obj.data);
            } else if (obj.class === Npc) {
                obj.class.update(obj.data);
            }
        });
    }
}

export default GameLevelCity;
