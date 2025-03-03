import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';

class GameLevelMagic {
    constructor(path) {
        let width = GameEnv.innerWidth;
        let height = GameEnv.innerHeight;

        const image_src_desert = path + "/images/gamify/castle.png";
        const image_data_desert = {
            name: 'desert',
            greeting: "Welcome to the desert! It is hot and dry here, but there are many adventures to be had!",
            src: image_src_desert,
            pixels: { height: 720, width: 1280 }
        };

        const sprite_src_chillguy = path + "/images/gamify/Download17930.png";
        const CHILLGUY_SCALE_FACTOR = 5;
        const sprite_data_chillguy = {
            id: 'Chill Guy',
            greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
            src: sprite_src_chillguy,
            SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 0, y: height - (height / CHILLGUY_SCALE_FACTOR) },
            pixels: { height: 268, width: 569 },
            orientation: { rows: 4, columns: 9 },
            down: { row: 2, start: 0, columns: 9 },
            left: { row: 1, start: 0, columns: 9 },
            right: { row: 3, start: 0, columns: 9 },
            up: { row: 0, start: 0, columns: 9 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: { up: 87, left: 65, down: 83, right: 68 }
        };

        this.objects = [
            { class: Background, data: image_data_desert },
            { class: Player, data: sprite_data_chillguy }
        ];

        // Start the quiz after 6 seconds
        setTimeout(() => this.startQuiz(), 6000);

        // Detect key press within 4 seconds to show "Don't rush the quiz" and restart only if ESC is pressed
        this.startTime = Date.now();
        document.addEventListener('keydown', this.handleKeyPress.bind(this));

        // Alert after 5 seconds saying "Get Ready for The Quiz!"
        setTimeout(() => {
            alert("Get Ready for The Quiz!");
        }, 5000);
    }

    handleKeyPress(event) {
        if (Date.now() - this.startTime <= 4000) { // User pressed within 4 seconds
            if (event.key === "Escape") {
                alert("Don't rush the quiz!");
                location.reload(); // Restart the game if ESC is pressed
            }
        }
    }

    startQuiz() {
        const questions = [
            { q: "Which command is used to list files in a directory?", a: "ls" },
            { q: "Which command is used to change directories?", a: "cd" },
            { q: "Which command is used to create a new directory?", a: "mkdir" },
            { q: "Which command is used to remove a file?", a: "rm" },
            { q: "Which command is used to remove a directory?", a: "rmdir" }
        ];

        let correct = true;

        for (let i = 0; i < questions.length; i++) {
            let answer = prompt(questions[i].q);
            if (answer.trim().toLowerCase() !== questions[i].a) {
                correct = false;
            }
        }

        if (correct) {
            alert("Wow, all answers are correct!");
            alert("Congrats, you are a smarty pants!");
        } else {
            alert("Incorrect answers! Press Esc to restart the game.");
            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    location.reload();
                }
            });
        }
    }
}

export default GameLevelMagic;
