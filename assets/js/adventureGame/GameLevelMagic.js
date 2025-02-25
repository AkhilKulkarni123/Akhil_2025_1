import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';

class GameLevelMagic {
    constructor(path) {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
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
            INIT_POSITION: { x: 50, y: height - (height / CHILLGUY_SCALE_FACTOR) },
            pixels: { height: 280, width: 256 },
            orientation: { rows: 3, columns: 4 },
            down: { row: 0, start: 0, columns: 3 },
            left: { row: 2, start: 0, columns: 3 },
            right: { row: 1, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: { up: 87, left: 65, down: 83, right: 68 }
        };

        const sprite_src_turtle = path + "/images/rpg/turtle.png";
        const sprite_data_turtle = {
            id: 'Turtle',
            greeting: "I am the enemy turtle. Beware!",
            src: sprite_src_turtle,
            SCALE_FACTOR: 10,
            INIT_POSITION: { x: 150, y: height - (height / CHILLGUY_SCALE_FACTOR) }
        };

        this.objects = [
            { class: Background, data: image_data_desert },
            { class: Player, data: sprite_data_chillguy },
            { class: Npc, data: sprite_data_turtle }
        ];

        this.questions = [
            { question: "What is 5 + 3?", answer: "8" },
            { question: "What is the capital of France?", answer: "Paris" },
            { question: "What is 10 / 2?", answer: "5" }
        ];

        this.correctAnswers = 0;
        this.startTime = Date.now();
        this.gameOver = false;
        
        document.addEventListener('keydown', (event) => this.handleKeyPress(event));
        this.createQuestionButton();
    }

    createQuestionButton() {
        const button = document.createElement("button");
        button.innerText = "Answer Question";
        button.style.position = "absolute";
        button.style.top = "10px";
        button.style.left = "10px";
        document.body.appendChild(button);
        button.addEventListener("click", () => this.askQuestion());
    }

    askQuestion() {
        if (this.gameOver) return;
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        const selectedQuestion = this.questions[randomIndex];
        const userAnswer = prompt(selectedQuestion.question);

        if (userAnswer === selectedQuestion.answer) {
            alert("Correct!");
            this.correctAnswers++;
            this.movePlayerAway();
        } else {
            alert("Wrong! The enemy is closing in.");
            this.moveEnemyCloser();
        }
    }

    movePlayerAway() {
        this.objects[1].data.INIT_POSITION.x += 50;
    }

    moveEnemyCloser() {
        this.objects[2].data.INIT_POSITION.x -= 50;
    }

    handleKeyPress(event) {
        if (event.key === 'Escape') {
            const elapsedTime = (Date.now() - this.startTime) / 1000;
            if (this.correctAnswers >= 2) {
                alert("Level Completed!");
                this.gameOver = true;
            } else if (elapsedTime >= 45) {
                alert("Time up! Restarting level...");
                location.reload();
            } else {
                alert("Keep going! Answer more questions.");
            }
        }
    }
}

export default GameLevelMagic;
