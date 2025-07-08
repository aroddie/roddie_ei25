let bows = [];
let ghosts = [];
let hearts = [];
let moons = [];
let skulls = [];
let sparkles = [];

function preload() {
bows = [
  loadImage("./graphics/bow1.svg"),
  loadImage("./graphics/bow2.svg"),
  loadImage("./graphics/bow3.svg"),
  loadImage("./graphics/bow4.svg"),
  loadImage("./graphics/bow5.svg"),
];
ghosts = [
  loadImage("./graphics/ghost1.svg"),
  loadImage("./graphics/ghost2.svg"),
  loadImage("./graphics/ghost3.svg"),
  loadImage("./graphics/ghost4.svg"),
  loadImage("./graphics/ghost5.svg"),
  loadImage("./graphics/ghost6.svg"),
  loadImage("./graphics/ghost7.svg"),
  loadImage("./graphics/ghost8.svg"),
];
hearts = [
  loadImage("./graphics/heart1.svg"),
  loadImage("./graphics/heart2.svg"),
  loadImage("./graphics/heart3.svg"),
  loadImage("./graphics/heart4.svg"),
  loadImage("./graphics/heart5.svg"),
  loadImage("./graphics/heart6.svg"),
  loadImage("./graphics/heart7.svg"),
  loadImage("./graphics/heart8.svg"),
  loadImage("./graphics/heart9.svg"),
  loadImage("./graphics/heart10.svg"),
];
moons = [
  loadImage("./graphics/moon1.svg"),
  loadImage("./graphics/moon2.svg"),
  loadImage("./graphics/moon3.svg"),
  loadImage("./graphics/moon4.svg"),
  loadImage("./graphics/moon5.svg"),
];
skulls = [
  loadImage("./graphics/skull1.svg"),
  loadImage("./graphics/skull2.svg"),
  loadImage("./graphics/skull3.svg"),
  loadImage("./graphics/skull4.svg"),
  loadImage("./graphics/skull5.svg"),
  loadImage("./graphics/skull6.svg"),
  loadImage("./graphics/skull7.svg"),
];
sparkles = [
  loadImage("./graphics/sparkle1.svg"),
  loadImage("./graphics/sparkle2.svg"),
  loadImage("./graphics/sparkle3.svg"),
  loadImage("./graphics/sparkle4.svg"),
  loadImage("./graphics/sparkle5.svg"),
  loadImage("./graphics/sparkle6.svg"),
  loadImage("./graphics/sparkle7.svg"),
];
}


function setup() {
  createCanvas(600, 400);
  background('#ebc6de');
  createPattern();
  createPattern();
  createPattern();
  createPattern();
  createPattern();
}

function draw() {

}

function randomize(array) {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}

function resizeImages(array) {
   for (let i = 0; i < array.length; i++) {
  array[i].resize(50, 0);
  }
}

function createPattern() {
  resizeImages(bows);
  resizeImages(ghosts);
  resizeImages(hearts);
  resizeImages(moons);
  resizeImages(skulls);
  resizeImages(sparkles);
  image(randomize(bows), random(width), random(height));
  image(randomize(ghosts), random(width), random(height));
  image(randomize(hearts), random(width), random(height));
  image(randomize(moons), random(width), random(height));
  image(randomize(skulls), random(width), random(height));
  image(randomize(sparkles), random(width), random(height));
}