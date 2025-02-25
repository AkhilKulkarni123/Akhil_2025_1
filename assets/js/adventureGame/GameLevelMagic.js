import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

class GameLevelMagic {
    constructor(path) {
        let width = GameEnv.innerWidth;
        let height = GameEnv.innerHeight;

        // Use the same desert background image as in GameLevelDesert
        const image_src_desert = path + "/images/gamify/castle.png"; // Same image as in castle level
        const image_data_desert = {
            name: 'desert',
            greeting: "Welcome to the desert! It is hot and dry here, but there are many adventures to be had!",
            src: image_src_desert,
            pixels: { height: 720, width: 1280 }
        };

        // Use the same Chill Guy sprite as in GameLevelDesert
        const sprite_src_chillguy = path + "/images/gamify/main.png"; // Same sprite as in castle level
        const CHILLGUY_SCALE_FACTOR = 5;
        const sprite_data_chillguy = {
            id: 'Chill Guy',
            greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
            src: sprite_src_chillguy,
            SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 0, y: height - (height / CHILLGUY_SCALE_FACTOR) },
            pixels: { height: 280, width: 256 },
            orientation: { rows: 3, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            left: { row: 2, start: 0, columns: 3 },
            right: { row: 1, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
        };

        // Add a projectile sprite
        const sprite_src_projectile = path + "/images/rpg/projectile.png"; // Placeholder image path
        const sprite_data_projectile = {
            id: 'Projectile',
            src: sprite_src_projectile,
            SCALE_FACTOR: 5,
            ANIMATION_RATE: 50,
            pixels: { height: 50, width: 50 },
            INIT_POSITION: { x: width / 2, y: height / 2 }, // Starts in the center
            hitbox: { widthPercentage: 0.5, heightPercentage: 0.5 },
            direction: { x: 0, y: 0 }, // To be set for chasing the player
            speed: 2
        };

        // Timer and state for game logic
        let timer = 30;
        let gameStarted = false;
        let levelCompleted = false;

        // This function will be called each frame to update game logic
        const updateGame = (player, projectile, deltaTime) => {
            if (gameStarted && !levelCompleted) {
                // Move projectile towards player
                let dx = player.position.x - projectile.position.x;
                let dy = player.position.y - projectile.position.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                projectile.direction.x = dx / distance;
                projectile.direction.y = dy / distance;

                projectile.position.x += projectile.direction.x * projectile.speed;
                projectile.position.y += projectile.direction.y * projectile.speed;

                // Check for collision between player and projectile
                let hitboxPlayer = player.getHitbox();
                let hitboxProjectile = projectile.getHitbox();

                if (hitboxPlayer.collidesWith(hitboxProjectile)) {
                    alert("You were hit! Restarting the level...");
                    restartLevel();
                }
            }

            if (timer <= 0 && !levelCompleted) {
                // If 30 seconds pass, check ESC key press to end level
                if (gameStarted) {
                    alert("Time's up! Press ESC to end the level.");
                }
            }

            // Decrease timer each second
            if (gameStarted) {
                timer -= deltaTime / 1000;
            }
        };

        const restartLevel = () => {
            // Reset game state, restart level logic
            gameStarted = false;
            timer = 30;
            levelCompleted = false;
        };

        // Handle ESC key press
        const handleKeyPress = (event) => {
            if (event.keyCode === 27) { // ESC key
                if (timer <= 0 && !levelCompleted) {
                    alert("All levels completed!");
                    levelCompleted = true;
                } else if (!gameStarted) {
                    alert("You haven't survived yet!");
                } else {
                    alert("Game paused. Press ESC to end the level.");
                    gameStarted = false;
                }
            }
        };

        // Use the same Tux NPC sprite as in GameLevelDesert
        const sprite_src_tux = path + "/images/gamify/tux.png"; // Same sprite as in desert level
        const sprite_data_tux = {
            id: 'Tux',
            greeting: "Hi I am Tux, the Linux mascot. I am very happy to spend some Linux shell time with you!",
            src: sprite_src_tux,
            SCALE_FACTOR: 8,  // Same scale factor as in desert level
            ANIMATION_RATE: 50,
            pixels: { height: 256, width: 352 },
            INIT_POSITION: { x: (width / 2), y: (height / 2) },
            orientation: { rows: 8, columns: 11 },
            down: { row: 5, start: 0, columns: 3 },  // Stationary NPC, default is down
            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            quiz: {
                title: "Linux Command Quiz",
                questions: [
                    "Which command is used to list files in a directory?\n1. ls\n2. dir\n3. list\n4. show",
                    "Which command is used to change directories?\n1. cd\n2. chdir\n3. changedir\n4. changedirectory",
                    "Which command is used to create a new directory?\n1. mkdir\n2. newdir\n3. createdir\n4. makedir",
                    "Which command is used to remove a file?\n1. rm\n2. remove\n3. delete\n4. erase",
                    "Which command is used to remove a directory?\n1. rmdir\n2. removedir\n3. deletedir\n4. erasedir",
                    "Which command is used to copy files?\n1. cp\n2. copy\n3. duplicate\n4. xerox",
                    "Which command is used to move files?\n1. mv\n2. move\n3. transfer\n4. relocate",
                    "Which command is used to view a file?\n1. cat\n2. view\n3. show\n4. display",
                    "Which command is used to search for text in a file?\n1. grep\n2. search\n3. find\n4. locate",
                    "Which command is used to view the contents of a file?\n1. less\n2. more\n3. view\n4. cat"
                ]
            }
        };

        this.objects = [
            { class: Background, data: image_data_desert }, // Use desert background
            { class: Player, data: sprite_data_chillguy },  // Use Chill Guy sprite
            { class: Npc, data: sprite_data_tux },          // Use Tux sprite
            { class: Npc, data: sprite_data_octocat },      // Use Octocat sprite
            { class: Npc, data: sprite_data_projectile }    // Add projectile
        ];

        // Event listener for key press
        document.addEventListener("keydown", handleKeyPress);

        // Start game logic
        gameStarted = true;
    }
}

export default GameLevelMagic;
