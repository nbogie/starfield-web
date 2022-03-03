//@ts-nocheck
let stars;
let shouldMove = true;

console.log("HELLO FROM JS");

function setup() {
  console.log("SETUP HAS BEEN CALLED");
  createCanvas(600, 400);
  stars = createStars();
  console.log("NUM STARS: " + stars.length);
  console.log(stars);
}

function draw() {
  background(60);
  fill("white");
  noStroke();

  drawStars();

  if (shouldMove) {
    moveStars();
  }
}

function createStars() {
  const starsLocal = [];
  for (let i = 0; i < 100; i++) {
    const star = createStar();
    starsLocal.push(star);
  }
  return starsLocal;
}

function createStar() {
  return {
    pos: {
      x: random(0, width),
      y: random(0, height),
    },
    speed: random(1, 6),
    colour: generateColour(),
    size: random(2, 7),
    name: random(["zahra", "fola", "mat", "saj"]),
  };
}

function drawStars() {
  for (let star of stars) {
    drawStar(star);
  }
}

function drawStar(s) {
  fill(s.colour);
  circle(s.pos.x, s.pos.y, s.size);
}

function moveStars() {
  for (let star of stars) {
    moveStar(star);
  }
}

function mousePressed() {
  shouldMove = !shouldMove;
}

function moveStar(star) {
  const multiplier = mouseY / height;
  star.pos.x = star.pos.x + star.speed * multiplier;
  if (star.pos.x > width) {
    star.pos.x = 0;
    star.pos.y = random(0, height);
    star.colour = generateColour();
  }
}

function generateColour() {
  return random([
    "white",
    "red",
    "lime",
    "purple",
    "magenta",
    "orange",
    "yellow",
    "skyblue",
  ]);
}
