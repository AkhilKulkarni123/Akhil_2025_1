---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id="gameCanvas" width="800" height="600"></canvas>

<script type="module">
    import "{{site.baseurl}}/assets/js/rpg/MissileGame.js";

    // Ensure the game only starts once the window is fully loaded
    window.onload = () => {
        console.log("Game loaded successfully.");
    };
</script>
