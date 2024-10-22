---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id="gameCanvas" width="800" height="600"></canvas>

<script type="module">
    import GameControl from "{{site.baseurl}}/assets/js/rpg/GameControl.js";

    // Background Image Setup
    const image_src = "{{site.baseurl}}/images/rpg/water.png";
    const image_data = { pixels: { height: 580, width: 1038 } };
    const image = { src: image_src, data: image_data };

    // Turtle Sprite Setup
    const sprite_src = "{{site.baseurl}}/images/rpg/turtle.png";
    const sprite_data = {
        SCALE_FACTOR: 10,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        pixels: { height: 280, width: 256 },
        orientation: { rows: 4, columns: 3 },
        up: { row: 0, start: 0, columns: 3 },
        left: { row: 1, start: 0, columns: 3 },
        right: { row: 2, start: 0, columns: 3 },
        down: { row: 3, start: 0, columns: 3 },
    };
    const sprite = { src: sprite_src, data: sprite_data };

    // Game Assets
    const assets = { image: image, sprite: sprite };

    // Start Game Engine
    GameControl.start(assets);

    // Load and run missile-dodging game logic
    import "./MissileGame.js";
</script>
