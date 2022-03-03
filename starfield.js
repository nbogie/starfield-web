//@ts-nocheck

console.log("HELLO FROM JS");

function setup() {
  console.log("SETUP HAS BEEN CALLED");
  createCanvas(600, 400);
}

function draw() {
  background("white");
  fill("red");
  if (frameCount < 200) {
    square(frameCount % 500, 200, 100);
  }
}
