const bord = document.querySelector(".bord");
const btn_st = document.querySelector(".btn-st")
const model = document.querySelector(".model")
const st_Game = document.querySelector("strat-game")
const end_Game = document.querySelector("end-game");
const btn_end = document.querySelector(".btn-end")

let high_Score_Box = document.querySelector("#high-score");
let scoreBox = document.querySelector("#score");
let timeBox = document.querySelector("#time");

let highScore = localStorage.getItem("highScore") || 0
let scoreValue = 0;
let timeValue = "00-00";
high_Score_Box.textContent = highScore;

const blockHight = 50;
const blockWight = 50;

const cols = Math.floor(bord.clientWidth / blockWight);
const rows = Math.floor(bord.clientHeight / blockHight);

const blocks = {};

let snack = [
  {
    x: 1,
    y: 3,
  }
];

let direction = "3";

let intr = null;
let timeinterval = null

let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const blo = document.createElement("div");
    blo.classList.add("bolck");
    bord.appendChild(blo);
    blocks[`${row}-${col}`] = blo;
  }
}

function reder() {
  let head = null;

  blocks[`${food.x}-${food.y}`].classList.add("food")

  if (direction === "1") {
    head = { x: snack[0].x, y: snack[0].y - 1 };
  } else if (direction === "3") {
    head = { x: snack[0].x, y: snack[0].y + 1 };
  } else if (direction === "2") {
    head = { x: snack[0].x + 1, y: snack[0].y };
  } else if (direction === "5") {
    head = { x: snack[0].x - 1, y: snack[0].y };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intr);

    model.style.display = "flex"
    st_Game.style.display = "none"
    end_Game.style.display = "flex"

    return;

  }

  if (head.x === food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food")
    food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }
    blocks[`${food.x}-${food.y}`].classList.add("food")

    snack.unshift(head)
    scoreValue += 10;
    scoreBox.textContent = scoreValue;

    if (scoreValue > highScore) {
      highScore = scoreValue
      localStorage.setItem("highScore", highScore)
    }


  }

  snack.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  snack.unshift(head);
  snack.pop();

  snack.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

intr = setInterval(() => {
  reder();
}, 1000);


addEventListener("keydown", (event) => {
  if (event.key === "5") {
    direction = "5";
  } else if (event.key === "3") {
    direction = "3";
  } else if (event.key === "1") {
    direction = "1";
  } else if (event.key === "2") {
    direction = "2";
  }
});


btn_st.addEventListener("click", () => {
  model.style.display = "none";
  clearInterval(intr);
  intr = setInterval(reder, 400);

  timeinterval = setInterval(() => {
    let [min, sec] = timeValue.split("-").map(Number)

    if (sec == 59) {
      min += 1
      sec = 0
    } else {
      sec += 1
    }

    timeValue = `${min}-${sec}`
    timeBox.textContent = timeValue
  }, 1000)


})

btn_end.addEventListener("click", restrat_Game)

function restrat_Game() {
  clearInterval(intr);


  scoreValue = 0
  timeValue = `00-00`

  scoreBox.textContent = scoreValue;
  timeBox.textContent = timeValue
  high_Score_Box.textContent = highScore

  blocks[`${food.x}-${food.y}`].classList.remove("food")
  snack.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });


  model.style.display = "none"
  direction = "2"
  snack = [{ x: 1, y: 3, }]
  food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }
  intr = setInterval(reder, 400);


}

