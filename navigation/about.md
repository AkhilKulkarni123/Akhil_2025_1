---
layout: page
title: About
permalink: /about/
---

Creator of Student 2025
<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png", "greeting": "Namaste", "description": "Origins from India"},
        {"flag": "a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg", "greeting": "Hi", "description": "US - 14 years"},
        {"flag": "4/4c/Flag_of_Sweden.svg", "greeting": "Hey", "description": "Cousins in Sweden"},
        {"flag": "e/ef/Flag_of_Hawaii.svg", "greeting": "Aloha", "description": "Uncle lives in Hawaii"},
    ]; 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>
<p>I am Akhil Kulkarni, and have origins in India. I am the Class of 2028, and my favorite color is orange. I code in the python programming language!
    I used to live in Dallas, Texas, and moves to San Diego at the age of 2 years old.
    I don't have any siblings, but have over 20 cousins!
    I play tennis, swimming, and piano for extracurriculars and hobbbies!
    I was born on the exact day my doctor predicted me to be born - What a coincidence!
    My first ever phone was an iPhone 12.
    I have a PC with a terabyte of storage and 32 Gigabytes of RAM!
    I also have a youtube channel that I often post programming videos on for fun! 
    My favorite food is pizza, pasta, and chocolate cake. I love playing tennis daily, and started biking without training wheels at the age of 4.</p>

<p><img src="https://www.teachers-tools.com/media/catalog/product/cache/3154772c9615514b1458c51736cabcb9/t/c/tcr7896_AHM9UoA70B2f4wdQ.jpg" alt="Colorful Math Symbols Poster"/>![image](https://github.com/user-attachments/assets/2d7017d0-c822-429d-860f-1474f6459805)</p>

<!-- from https://github.com/utterance/utterances -->
<script src="https://utteranc.es/client.js"
        repo="{{ site.github_username }}/{{ site.github_repo | default: site.baseurl | remove: "/" }}"
        issue-term="title"
        label="blogpost-comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
