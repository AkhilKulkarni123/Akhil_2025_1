import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

// Define non-mutable constants as defaults
const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
const ANIMATION_RATE = 1; // 1/nth of the frame rate
const INIT_POSITION = { x: 0, y: 0 };

class Character extends GameObject {
    constructor(data = null) {
        super();
        this.state = {
            ...this.state,
            animation: 'idle',
            direction: 'right',
            isDying: false,
            isFinishing: false,
        };

        if (data?.pixels?.width && data?.pixels?.height) {
            this.canvas = document.createElement("canvas");
            this.canvas.id = data.id || "default";
            this.canvas.width = data.pixels.width;
            this.canvas.height = data.pixels.height;
        } else {
            console.error("Missing pixel data (width or height) in sprite data");
            return;  // Exit constructor if pixel data is missing
        }

        this.hitbox = data?.hitbox || {};
        this.ctx = this.canvas.getContext('2d');
        document.getElementById("gameContainer").appendChild(this.canvas);

        this.x = 0;
        this.y = 0;
        this.frame = 0;
        
        this.scale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

        if (data && data.src) {
            this.scaleFactor = data.SCALE_FACTOR || SCALE_FACTOR;
            this.stepFactor = data.STEP_FACTOR || STEP_FACTOR;
            this.animationRate = data.ANIMATION_RATE || ANIMATION_RATE;
            this.position = data.INIT_POSITION || INIT_POSITION;
            this.spriteSheet = new Image();
            this.spriteSheet.src = data.src;

            this.frameIndex = 0;
            this.frameCounter = 0;
            this.direction = 'down';
            this.spriteData = data;
        } else {
            throw new Error('Sprite data is required');
        }

        this.velocity = { x: 0, y: 0 };
        GameEnv.gameObjects.push(this);
        this.resize();
    }

    draw() {
        if (this.spriteSheet) {
            const frameWidth = this.spriteData.pixels.width / this.spriteData.orientation.columns;
            const frameHeight = this.spriteData.pixels.height / this.spriteData.orientation.rows;
    
            const directionData = this.spriteData[this.direction];
    
            let frameX, frameY;
            frameX = (directionData.start + this.frameIndex) * frameWidth;
            frameY = directionData.row * frameHeight;
    
            this.canvas.width = frameWidth;
            this.canvas.height = frameHeight;
            this.canvas.style.width = `${this.width}px`;
            this.canvas.style.height = `${this.height}px`;
            this.canvas.style.position = 'absolute';
            this.canvas.style.left = `${this.position.x}px`;
            this.canvas.style.top = `${GameEnv.top+this.position.y}px`;
    
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
            this.ctx.drawImage(
                this.spriteSheet,
                frameX, frameY, frameWidth, frameHeight,
                0, 0, this.canvas.width, this.canvas.height
            );
    
            this.frameCounter++;
            if (this.frameCounter % this.animationRate === 0) {
                this.frameIndex = (this.frameIndex + 1) % directionData.columns;
            }
        } else {
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    update() {
        this.draw();
        this.collisionChecks();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height > GameEnv.innerHeight) {
            this.position.y = GameEnv.innerHeight - this.height;
            this.velocity.y = 0;
        }

        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        }

        if (this.position.x + this.width > GameEnv.innerWidth) {
            this.position.x = GameEnv.innerWidth - this.width;
            this.velocity.x = 0;
        }

        if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x = 0;
        }
    }
}

export default Character;
