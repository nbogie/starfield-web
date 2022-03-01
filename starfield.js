//@ts-nocheck

console.log("HELLO FROM JS");

function setup() {
  console.log("SETUP HAS BEEN CALLED");
  createCanvas(600, 400);
}

function draw() {
  background("white");
  fill("green");
  square(frameCount % 500, 200, 100);
}
