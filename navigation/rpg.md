---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id="gameCanvas"></canvas>

<script type="module">
    import GameControl from "{{site.baseurl}}/assets/js/rpg/GameControl.js";

    // Initialize the canvas and game logic
    const canvas = document.getElementById("gameCanvas");
    canvas.width = 800;
    canvas.height = 600;

    // Import and start the missile dodging game logic
    import './MissileGame.js';
</script>
