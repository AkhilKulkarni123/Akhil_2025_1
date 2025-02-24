import GameEnv from './GameEnv.js';
import GameLevelWater from './GameLevelWater.js';
import GameLevelDesert from './GameLevelDesert.js';
import GameLevelCity from './GameLevelCity.js';
import GameLevelMagic from './GameLevelMagic.js';
import { getStats } from "./StatsManager.js";

const createStatsUI = () => {
    const statsContainer = document.createElement('div');
    statsContainer.id = 'stats-container';
    statsContainer.style.position = 'fixed';
    statsContainer.style.top = '10px';
    statsContainer.style.right = '10px';
    statsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    statsContainer.style.color = 'white';
    statsContainer.style.padding = '10px';
    statsContainer.style.borderRadius = '5px';
    statsContainer.innerHTML = `
        <div>Balance: <span id="balance">0</span></div>
        <div>Chat Score: <span id="chatScore">0</span></div>
        <div>Questions Answered: <span id="questionsAnswered">0</span></div>
    `;
    document.body.appendChild(statsContainer);
};

const GameControl = {
    intervalID: null,
    localStorageTimeKey: "localTimes",
    currentPass: 0,
    currentLevelIndex: 0,
    levelClasses: [],
    path: '',
    npcCollisionCount: 0, // Track the number of NPC collisions
    requiredCollisions: 3, // Set the required collisions to proceed to next level

    start: function(path) {
        GameEnv.create();
        this.levelClasses = [GameLevelDesert, GameLevelWater, GameLevelCity, GameLevelMagic];
        this.currentLevelIndex = 0;
        this.path = path;
        this.addExitKeyListener();
        this.loadLevel();
    },

    loadLevel: function() {
        if (this.currentLevelIndex >= this.levelClasses.length) {
            this.stopTimer();
            return;
        }
        GameEnv.continueLevel = true;
        GameEnv.gameObjects = [];
        this.currentPass = 0;
        this.npcCollisionCount = 0; // Reset the NPC collision count for the new level
        const LevelClass = this.levelClasses[this.currentLevelIndex];
        const levelInstance = new LevelClass(this.path);
        this.loadLevelObjects(levelInstance);
    },

    loadLevelObjects: function(gameInstance) {
        this.initStatsUI();
        // Instantiate the game objects
        for (let object of gameInstance.objects) {
            if (!object.data) object.data = {};
            new object.class(object.data);
        }
        // Start the game loop
        this.gameLoop();
        getStats();
    },

    gameLoop: function() {
        // Base case: leave the game loop 
        if (!GameEnv.continueLevel) {
            this.handleLevelEnd();
            return;
        }

        // Nominal case: update the game objects 
        GameEnv.clear();
        for (let object of GameEnv.gameObjects) {
            object.update();  // Update the game objects
        }
        this.handleLevelStart();

        // Check if the NPC collision condition is met for the City level
        if (this.currentLevelIndex === 2 && this.npcCollisionCount >= this.requiredCollisions) {
            this.handleLevelEnd();
        } else if (this.currentLevelIndex !== 2) {
            this.handleLevelEnd(); // For other levels, handle the level end as normal
        }

        // Recursively call this function at animation frame rate
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    handleLevelStart: function() {
        if (this.currentLevelIndex === 0 && this.currentPass === 10) {
            alert("Start Level.");
        }
        this.currentPass++;
    },

    handleLevelEnd: function() {
        // More levels to play 
        if (this.currentLevelIndex < this.levelClasses.length - 1) {
            alert("Level ended.");
        } else { // All levels completed
            alert("Game over. All levels completed.");
        }
        for (let index = GameEnv.gameObjects.length - 1; index >= 0; index--) {
            GameEnv.gameObjects[index].destroy();
        }
        this.currentLevelIndex++;
        this.loadLevel();
    },

    resize: function() {
        GameEnv.resize();
        for (let object of GameEnv.gameObjects) {
            object.resize();
        }
    },

    addExitKeyListener: function() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                // Prevent progression if the NPC collision count hasn't been reached in the City level
                if (this.currentLevelIndex === 2 && this.npcCollisionCount < this.requiredCollisions) {
                    alert("You must collide with the NPC more times to proceed.");
                    return;
                }
                GameEnv.continueLevel = false;
            }
        });
    },

    updateTimer: function() {
        const time = GameEnv.time;

        if (GameEnv.timerActive) {
            const newTime = time + GameEnv.timerInterval;
            GameEnv.time = newTime;
            if (document.getElementById('timeScore')) {
                document.getElementById('timeScore').textContent = (time / 1000).toFixed(2);
            }
            return newTime;
        }

        if (document.getElementById('timeScore')) {
            document.getElementById('timeScore').textContent = (time / 1000).toFixed(2);
        }
    },

    startTimer: function() {
        if (GameEnv.timerActive) {
            console.warn("TIMER ACTIVE: TRUE, TIMER NOT STARTED");
            return;
        }

        this.intervalId = setInterval(() => this.updateTimer(), GameEnv.timerInterval);
        GameEnv.timerActive = true;
    },

    stopTimer: function() {
        if (!GameEnv.timerActive) return;

        this.saveTime(GameEnv.time, GameEnv.coinScore);

        GameEnv.timerActive = false;
        GameEnv.time = 0;
        GameEnv.coinScore = 0;
        this.updateCoinDisplay();
        clearInterval(this.intervalID);
    },

    saveTime: function() {
        const data = {
            userID: GameEnv.userID,
            time: GameEnv.time - 10,
            coinScore: GameEnv.coinScore
        };

        const currDataList = JSON.parse(localStorage.getItem(this.localStorageTimeKey));

        if (!currDataList || !Array.isArray(currDataList)) {
            localStorage.setItem(this.localStorageTimeKey, JSON.stringify([data]));
            return;
        }

        currDataList.push(data);
        localStorage.setItem(this.localStorageTimeKey, JSON.stringify(currDataList));
    },

    initStatsUI: function() {
        const statsContainer = document.createElement('div');
        statsContainer.id = 'stats-container';
        statsContainer.style.position = 'fixed';
        statsContainer.style.top = '75px';
        statsContainer.style.right = '10px';
        statsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        statsContainer.style.color = 'white';
        statsContainer.style.padding = '10px';
        statsContainer.style.borderRadius = '5px';
        statsContainer.innerHTML = `
            <div>Balance: <span id="balance">0</span></div>
            <div>Chat Score: <span id="chatScore">0</span></div>
            <div>Questions Answered: <span id="questionsAnswered">0</span></div>
        `;
        document.body.appendChild(statsContainer);
    },

    // Function to increment collision count (this should be called when the player collides with an NPC)
    incrementNpcCollisionCount: function() {
        if (this.currentLevelIndex === 2) { // Only track collisions in the City level
            this.npcCollisionCount++;
        }
    },
};

// Detect window resize events and call the resize function.
window.addEventListener('resize', GameControl.resize.bind(GameControl));

export default GameControl;
