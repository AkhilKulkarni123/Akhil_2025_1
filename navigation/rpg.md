---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id="gameCanvas" width="800" height="600"></canvas>

<script type="module">
    import "{{site.baseurl}}/assets/js/rpg/MissileGame.js";

    // Ensure the game starts when the page loads
    window.onload = () => {
        console.log("Missile dodging game loaded.");
    };
</script>
