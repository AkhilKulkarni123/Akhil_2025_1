---
layout: base
title: Course Descriptions
description: An overview of Computer Science pathway at Del Norte High School
author: Akhil Kulkarni
image: /images/mario_animation.png
hide: true
---

<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

Markdown samples markdown cheatsheet
Using markdown form index.md. We are learning markdown.

This text below is something called Markdown. This is a heading, inside of code scaffolding.
## Investing in Your Technical Future XXXYYY
This is emphasis
> Explore the Computer Science Pathway at Del Norte High School and invest in your technical skills. All Del Norte CompSci classes are designed to provide a real-world development experience. Class time includes tech talks (lectures), peer collaboration, communication with teachers, critical thinking while coding, and creativity in projects. Grading is focused on time invested, participation with peers, and engagement in learning.
Sample of bullets
- Introduction to concepts and requirements by the teacher
- Project-based learning with teacher support, performing Agile/Scrum development
- Coding, frontend, backend, devops, version control and algorithmic thinking
- Creativity, research, design, data structures, and utilizing ChatGPT
- Performing team work, team communication and collaboration, peer reviews/grading
- Focus on tehnical communications through project presentations and student led teaching
- Grades are on projects, learnt concepts, and live reviews between student(s) and teacher
Jelly Fish Fun

<img src="data:image/jpeg;base64,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" alt="Jellyfish - Wikipedia"/>![image](https://github.com/user-attachments/assets/0205bd1d-cf8e-4cf5-a004-73cebceb7b2b)
