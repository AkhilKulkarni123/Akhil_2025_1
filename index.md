---
layout: base
title: Course Descriptions
description: An overview of Computer Science pathway at Del Norte High School
author: Akhil Kulkarni
image: /images/mario_animation.png
hide: true
---

New Kasm Test

<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Redirect</title>
</head>
<body>
    <button onclick="window.location.href='https://akhilkulkarni123.github.io/Akhil_2025_1/about/'">
        Go to About Page
    </button>
</body>
</html>

---
layout: base
title: Akhil Kulkarni Home 
description: Home Page
hide: true
---

## Home

This blog contains my journey into Coding.

### Development Environment

> Coding starts with tools, explore these tools and procedures with a click.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/actions">
        <img src="https://img.shields.io/badge/GitHub%20Pages-327FC7?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
    </a>
    <a href="https://kasm.nighthawkcodingsociety.com/">
        <img src="https://img.shields.io/badge/KASM-0078D4?style=for-the-badge&logo=kasm&logoColor=white" alt="KASM">
    </a>
    <a href="{{site.baseurl}}/kasm/quick/setup">
        <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt="Ubuntu">
    </a>
    <a href="https://vscode.dev/">
        <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode">
    </a>
</div>

<br>

### Game Progress

> Here is my progress through game coding, click to see these online

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
        <div style="background-color: #00FF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Snake Game
        </div>
    </a>
    <a href="https://akhilkulkarni123.github.io/Akhil_2025_1/rpg0x/" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            RPG
        </div>
    </a>
</div>

<br>

### College Articulation

> Here is my preparation for college topics, click to review my blogs

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/variables" style="text-decoration: none;">
        <div style="background-color: #000000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Variables I/O
        </div>
    </a>
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/data-types/" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Data Types
        </div>
    </a>
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/for-loops/" style="text-decoration: none;">
        <div style="background-color: #00BFFF; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            For Loops and Sprite Hack
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/Sprint2/2023-09-21-game_animations-json-object.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Game Animation
        </div>
    </a>
</div>

> Here are all of my homework notebooks and my own individual java script lesson, homework, and hacks BIG BOY

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/CSSE1_Final/Control_Structures.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Control_Structures
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/CSSE1_Final/Data_Types.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Data_Types
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/CSSE1_Final/Operators.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Operators
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/CSSE2_BLOGS/Adventure_Game.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Adventure_Game
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/CSSE2_BLOGS/Checklists_Changes.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Checklists_Changes_Burndown
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/PBL_Blogs/Input_Output.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Input_Output
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/PBL_Blogs/NATM_Refflection_Improvements.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            NATM_Reflection
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/PBL_Blogs/Software_Developement_Cycle.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Software_Developement_Cycle
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/Five_Things_Learned.ipynb" style="text-decoration: none;">
        <div style="background-color: #8A2BE2; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Five_Things_Learned
        </div>
    </a>
    <a href="https://github.com/AkhilKulkarni123/Akhil_2025_1/blob/main/_notebooks/PBL_Blogs/Retrospective_Reflection.ipynb" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            William's Game Reflection
        </div>
    </a>
</div>
