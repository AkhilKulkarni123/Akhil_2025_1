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

        const sprite_src_chillguy = path + "/images/gamify/main.png";
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
            keypress: { up: 87, left: 65, down: 83, right: 68 }
        };

        this.objects = [
            { class: Background, data: image_data_desert },
            { class: Player, data: sprite_data_chillguy }
        ];

        this.quizQuestions = [
            { question: "Which command is used to list files in a directory?", answer: "ls" },
            { question: "Which command is used to change directories?", answer: "cd" },
            { question: "Which command is used to create a new directory?", answer: "mkdir" },
            { question: "Which command is used to remove a file?", answer: "rm" },
            { question: "Which command is used to remove a directory?", answer: "rmdir" }
        ];

        this.startQuiz();
    }

    startQuiz() {
        let correctAnswers = 0;
        for (let i = 0; i < this.quizQuestions.length; i++) {
            let userAnswer = prompt(this.quizQuestions[i].question);
            if (userAnswer && userAnswer.trim().toLowerCase() === this.quizQuestions[i].answer) {
                correctAnswers++;
            }
        }

        if (correctAnswers === this.quizQuestions.length) {
            alert("Just Kidding!");
            alert("Congrats, you are a smarty pants!");
        } else {
            alert("You didn't get all answers correct. Press ESC to restart the level.");
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    location.reload();
                }
            });
        }
    }
}

export default GameLevelMagic;
