🐍 SnakeRush

A simple and clean Snake-style web game built using HTML, CSS, and JavaScript.
The game features smooth grid movement, scoring, time tracking, food generation, and a high-score system with localStorage.

🎮 Features

🟩 Smooth Snake Movement

🍎 Random Food Generation

🏆 High Score Saved in LocalStorage

⏱️ Time Counter

📦 Responsive Grid-Based Board

🔁 Restart / Start Game Modal

🎨 Modern Dark UI Theme

⚡ Lightweight Vanilla JavaScript (no libraries)

📂 Project Structure
SnakeRush/
│── index.html
│── style.css
│── script.js
└── README.md

🚀 How to Play

Click Start Game.

Control the snake using the following keys:

Key	Action
1	Move Left
3	Move Right
2	Move Down
5	Move Up

Eat food to score points.

Avoid hitting the walls — or the game ends.

Press Restart Game to play again.

🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla)

📊 Game Logic Summary

The board is auto-generated using grid blocks.

Snake is represented by an array of {x, y} positions.

Food appears at a random block.

Score increases by 10 per food.

High score is saved using localStorage.

Time increases every second during gameplay.

🧩 Code Highlights
✔ Dynamic grid generation
✔ LocalStorage high score
✔ Interval-based game loop
✔ Custom movement logic
✔ Blur modal for start/end
