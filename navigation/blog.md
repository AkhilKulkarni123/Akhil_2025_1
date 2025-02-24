---
layout: blogs 
title: Blogs
search_exclude: true
permalink: /blogs/
---


# 2/3/2025

I added the adventure from the updated portfolio repository, updating the nagvigation, assests/js folder, and adding the game file to the 















# Skills/Goals Table For Adventure Game

| Skill                                         | Mastered (Y/N) | Rank (1-4) | Ratio | Notes                                                   |
|-----------------------------------------------|----------------|------------|-------|---------------------------------------------------------|
| New Level (City) Implemented                 | [Y ]           | 3          | 0.0   | Escape Key Logic                        |
| Smooth Transtition with window alert                                 | [Y ]           | 3.5        | 0.0   | Level Ended Pop up using escape                               |
| Changing current constants in the Player.js File              | [Y ]           | 3.5        | 0.0   | Slightly modified the jumping and height canvas ratio in player.js
| Changed and added more questions in the level quiz, want to add GOOD input if possible  | [Y ]           | 4          | 0.0   | Integrate quiz logic                          |
| Upload and render sprite logic for city background | [Y ]           | 4          | 0.0   | Already found new city background, will upload today/tomorrow                      |
| Transition                                    | [ ]            | 2          | 0.0   | [Smooth transition to next level]                      |
| Game Over                                     | [ ]            | 2          | 0.0   | [Implementations for escape key]                                       |
| Dollar Sprite                            | [ ]            | 2.5        | 0.0   | [Add green dollar sprite] |
| Coin Sprite                    | [ ]            | 3          | 0.0   | Add coin sprite for user to collect     |
| Using greece logic to check if all coins and dollars are collected for enough money, spawn in chest sprite to finsish the city  level (There are already many collision logic methods in the code| [ ]            | 3.5        | 0.0   | Implement logic for Sprite Spawn and Collision/Collection Check |
| Chest Sprite                  | [ ]            | 3          | 0.0   | Upload Chest sprite |
| Implement a real time and displayed tally/Counter of number of coins, dollars sprites, and total money collected so far at the top of the screen, already done in my personal RPG Game with timer display in seconds             | [ ]            | 3.5        | 0.0   | Show users real-time progress on top of the display/screen |
| Add more NPC's to interact with and add on than just a simple message, maybe like another quiz for a chance to earn more money                 | [ ]            | 3          | 0.0   | Increment the Counter accordingly and integrate logic periodically and logically |

























Changes to platformer 4x

-Akhil-
Jumping and Lava speed

-Shay-
Sprites

-William-
Player Sprite

GAME END-
using a key door system you will need to collect
the brief case on the level to unlock the exit of the level

@mrboiisthebest
Owner
Author
mrboiisthebest commented 15 hours ago
Reflection WILLIAM W

My task was to change the sprite and make it fit the new level theme. My team found a sprite that has no jagged edges and was high quality.

-Studied-
While I was tasked with the player sprite I also was tasked to create a new ending to the level. When trying to add the code for a key door system I had to back trace thought the JS files and find where certain function were bein called and how they worked.

-Learned-
When I was doing my tasks I learned how the game, player, and level worked and were they were being ran and called from. I learned how to add new objects, add images, and integrate some of my own code into the pre existing code

-Mistakes/Errors-
When creating the player sprite I was unable to make the animation play correctly. It was always glitching and seemed off. I resolved this error by using math on how many rows and columns there where and divided to get my height and width for the sprite sheet

@mrboiisthebest mrboiisthebest mentioned this issue 3 hours ago
Sprint 4 - CSSE Objectives | Nighthawk Pages nighthawkcoders/portfolio_2025#623
Open
@AkhilKulkarni123
Collaborator
AkhilKulkarni123 commented 20 minutes ago • 
REFLECTION - Akhil Kulkarni

I was tasked with initially playing around with some files in my level including changing some key constants to modify the lava speed, the timer for when the lava starts rising to the user sprite. Additionally, I modified and increased/decreased the jump height of the user sprite to increase the level difficulty and how it interacts with the level. I also added a potential new path for users to end the level a different wa, by learning how to add more already-uploaded sprites in different coordinates to aid for a new path to end the level, along with adding coins to the level for the users to collect advance to the next file.

Learned:

I learned how to spawn in and add more sprites that we uploaded in the images file to implement a new, alternate path for the user sprite to advance to the next level. I learned that I can repeat already existing uploaded sprites. I made a new path using the flag and the flying island sprite, but yet to change the helicopter sprite and fully finish adding coins to progress to the end, although we already started.

Studied:

I studied how to change the coordinates of different spawned sprites on the display screen, how constants can change the speed and factor of the factors in the display. I also studied which filed had which data, and how it reflected on the overall game level, like the lava jump height/speed and the sprite path for the alternate game ending method.

Mistakes/Errors:

One of the major mistakes I made was the lack of commits I made, and to correctly change the coordinates of the required sprites quickly and efficiently.

@AkhilKulkarni123
Collaborator
AkhilKulkarni123 commented 7 minutes ago
Shay: Changed sprites and worked on overall game functionality




Images:
![Change the hitbox and max health for user sprite in game level for Greece](https://github.com/user-attachments/assets/5d5bf6ec-2a9e-4f14-ac8f-abef9fae20c8)
*Change the hitbox and max health for the user sprite in the Greece level.*

![Changing the jump height factor to match game difficulty and according uploaded sprites for new end game method](https://github.com/user-attachments/assets/dcc64927-24bc-43ca-93bc-ccb30265f541)
*Changing the jump height factor to match game difficulty and the uploaded sprites for the new end-game method.*

![Change the sprite and their uploaded width/height, along with spawning more sprites for end game method](https://github.com/user-attachments/assets/247bb3da-65d5-4876-8ee2-40ec5874d0a3)
*Change the sprite dimensions and spawn more sprites for the end game method.*

![Sprite width/height and spawning more sprites](https://github.com/user-attachments/assets/c6666ec2-aa70-4072-97b9-dc989b7ba8fb)
*Sprite width/height adjustment and spawning more sprites for better gameplay experience.*

![Additional sprite for end game level](https://github.com/user-attachments/assets/fea48529-d98d-4eba-a9bc-d6b4cb5d484f)
*Additional sprite for the final level of the game.*

# Skills/Goals Table For Adventure Game

| Skill                                         | Mastered (Y/N) | Rank (1-4) | Ratio | Notes                                                   |
|-----------------------------------------------|----------------|------------|-------|---------------------------------------------------------|
| New Level (City) Implemented                 | [Y ]           | 3          | 0.0   | Escape Key Logic                        |
| Smooth Transtition with window alert                                 | [Y ]           | 3.5        | 0.0   | Level Ended Pop up using escape                               |
| Changing current constants in the Player.js File              | [Y ]           | 3.5        | 0.0   | Slightly modified the jumping and height canvas ratio in player.js
| Changed and added more questions in the level quiz, want to add GOOD input if possible  | [Y ]           | 4          | 0.0   | Integrate quiz logic                          |
| Upload and render sprite logic for city background | [Y ]           | 4          | 0.0   | Already found new city background, will upload today/tomorrow                      |
| Transition                                    | [ ]            | 2          | 0.0   | [Smooth transition to next level]                      |
| Game Over                                     | [ ]            | 2          | 0.0   | [Implementations for escape key]                                       |
| Dollar Sprite                            | [ ]            | 2.5        | 0.0   | [Add green dollar sprite] |
| Coin Sprite                    | [ ]            | 3          | 0.0   | Add coin sprite for user to collect     |
| Using greece logic to check if all coins and dollars are collected for enough money, spawn in chest sprite to finsish the city  level (There are already many collision logic methods in the code| [ ]            | 3.5        | 0.0   | Implement logic for Sprite Spawn and Collision/Collection Check |
| Chest Sprite                  | [ ]            | 3          | 0.0   | Upload Chest sprite |
| Implement a real time and displayed tally/Counter of number of coins, dollars sprites, and total money collected so far at the top of the screen, already done in my personal RPG Game with timer display in seconds             | [ ]            | 3.5        | 0.0   | Show users real-time progress on top of the display/screen |
| Add more NPC's to interact with and add on than just a simple message, maybe like another quiz for a chance to earn more money                 | [ ]            | 3          | 0.0   | Increment the Counter accordingly and integrate logic periodically and logically |


New Level (City) Implemented

Mastered: Yes
Rank: 3
Notes: Escape Key Logic
Smooth Transition with window alert

Mastered: Yes
Rank: 3.5
Notes: Level Ended Pop up using escape
Changing current constants in the Player.js File

Mastered: Yes
Rank: 3.5
Notes: Slightly modified the jumping and height canvas ratio in player.js
Changed and added more questions in the level quiz

Mastered: Yes
Rank: 4
Notes: Integrate quiz logic, want to add GOOD input if possible
Upload and render sprite logic for city background

Mastered: Yes
Rank: 4
Notes: Already found new city background, will upload today/tomorrow
Transition

Mastered: No
Rank: 2
Notes: Smooth transition to next level
Game Over

Mastered: No
Rank: 2
Notes: Implementations for escape key
Dollar Sprite

Mastered: No
Rank: 2.5
Notes: Add green dollar sprite
Coin Sprite

Mastered: Yes
Rank: 3
Notes: Add coin sprite for user to collect
Using Greece logic to check if all coins and dollars are collected for enough money, spawn in chest sprite to finish the city level

Mastered: No
Rank: 3.5
Notes: Implement logic for Sprite Spawn and Collision/Collection Check (many collision logic methods already in the code)
Chest Sprite

Mastered: No
Rank: 3
Notes: Upload Chest sprite
Implement a real-time and displayed tally/Counter of number of coins, dollars sprites, and total money collected so far at the top of the screen

Mastered: No
Rank: 3.5
Notes: Already done in personal RPG Game with timer display in seconds
Add more NPC's to interact with and add more than just a simple message, maybe like another quiz for a chance to earn more money

Mastered: No
Rank: 3
Notes: Increment the Counter accordingly and integrate logic periodically and logically
Let me know if you need any changes!


You said:
Now delete the mastered part of everything 
ChatGPT said:
Here’s the updated checklist with the "Mastered" part removed:

New Level (City) Implemented

Rank: 3
Notes: Escape Key Logic
Smooth Transition with window alert

Rank: 3.5
Notes: Level Ended Pop up using escape
Changing current constants in the Player.js File

Rank: 3.5
Notes: Slightly modified the jumping and height canvas ratio in player.js
Changed and added more questions in the level quiz

Rank: 4
Notes: Integrate quiz logic, want to add GOOD input if possible
Upload and render sprite logic for city background

Rank: 4
Notes: Already found new city background, will upload today/tomorrow
Transition

Rank: 2
Notes: Smooth transition to next level
Game Over

Rank: 2
Notes: Implementations for escape key
Dollar Sprite

Rank: 2.5
Notes: Add green dollar sprite
Coin Sprite

Rank: 3
Notes: Add coin sprite for user to collect
Using Greece logic to check if all coins and dollars are collected for enough money, spawn in chest sprite to finish the city level

Rank: 3.5
Notes: Implement logic for Sprite Spawn and Collision/Collection Check (many collision logic methods already in the code)
Chest Sprite

Rank: 3
Notes: Upload Chest sprite
Implement a real-time and displayed tally/Counter of number of coins, dollars sprites, and total money collected so far at the top of the screen

Rank: 3.5
Notes: Already done in personal RPG Game with timer display in seconds
Add more NPC's to interact with and add more than just a simple message, maybe like another quiz for a chance to earn more money

Rank: 3
Notes: Increment the Counter accordingly and integrate logic periodically and logically
