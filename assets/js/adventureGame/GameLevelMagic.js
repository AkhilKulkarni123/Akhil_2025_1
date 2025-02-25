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

        // Turtle sprite to chase the player
        const TURTLE_SCALE_FACTOR = 10;
        const sprite_src_turtle = path + "/images/rpg/turtle.png";
        const sprite_data_turtle = {
            name: 'turtle',
            src: sprite_src_turtle,
            SCALE_FACTOR: TURTLE_SCALE_FACTOR,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 0, y: height - (height / TURTLE_SCALE_FACTOR) },
            pixels: { height: 280, width: 256 },
            orientation: { rows: 4, columns: 3 },
            down: { row: 0, start: 0, columns: 3 },
            left: { row: 1, start: 0, columns: 3 },
            right: { row: 2, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
        };

        // Timer logic
        let timeLeft = 30;
        let gameOver = false;
        let turtleChasing = false;
        let timerInterval;
        let turtleSpeed = 1; // Speed at which turtle moves towards the user

        // Function to move the turtle towards the player
        function moveTurtleToPlayer(turtle, player) {
            let dx = player.x - turtle.x;
            let dy = player.y - turtle.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 0) {
                turtle.x += (dx / distance) * turtleSpeed;
                turtle.y += (dy / distance) * turtleSpeed;
            }
        }

        // Start the timer countdown
        function startTimer() {
            timerInterval = setInterval(() => {
                if (timeLeft > 0 && !gameOver) {
                    timeLeft--;
                } else if (timeLeft <= 0 && !gameOver) {
                    clearInterval(timerInterval);
                    gameOver = true;
                    alert("Game Over! Time's up!");
                    // Restart level logic can be added here
                }
            }, 1000);
        }

        // Check if turtle hits the player
        function checkCollision(turtle, player) {
            if (Math.abs(turtle.x - player.x) < 50 && Math.abs(turtle.y - player.y) < 50) {
                gameOver = true;
                alert("You were hit by the turtle! Restarting level.");
                // Restart level logic here
            }
        }

        // Handle 'Esc' key press
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                if (timeLeft <= 0) {
                    alert("Game Over! All levels completed.");
                    // End game and show game over logic
                } else if (gameOver) {
                    return; // Game already over, do nothing
                } else {
                    clearInterval(timerInterval);
                    alert("Game paused. You have not fully survived the game yet!");
                    // Pause the game but don't end the level
                }
            }
        });

        // Initialize objects and start the game
        this.objects = [
            { class: Background, data: image_data_desert },
            { class: Player, data: sprite_data_chillguy },
            { class: Npc, data: sprite_data_tux },
            { class: Npc, data: sprite_data_octocat },
            { class: Npc, data: sprite_data_turtle }
        ];

        // Start the timer
        startTimer();
    }

    update() {
        // Update the turtle's position towards the player
        let player = this.objects[1]; // Player object
        let turtle = this.objects[4]; // Turtle object

        if (turtle && player) {
            moveTurtleToPlayer(turtle, player);
            checkCollision(turtle, player);
        }
    }
}

export default GameLevelMagic;
