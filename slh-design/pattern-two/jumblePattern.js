
let bows = [];
let ghosts = [];
let hearts = [];
let moons = [];
let skulls = [];
let sparkles = [];
let colors = [
  "#ebc6de",
  "#c1a7e2",
  "#b6e0d7"
]

let icons = []
let iconMix;

function preload() {
bows = [
  loadImage("../graphics/bow1.svg"),
  loadImage("../graphics/bow2.svg"),
  loadImage("../graphics/bow3.svg"),
  loadImage("../graphics/bow4.svg"),
  loadImage("../graphics/bow5.svg"),
];
ghosts = [
  loadImage("../graphics/ghost1.svg"),
  loadImage("../graphics/ghost2.svg"),
  loadImage("../graphics/ghost3.svg"),
  loadImage("../graphics/ghost4.svg"),
  loadImage("../graphics/ghost5.svg"),
  loadImage("../graphics/ghost6.svg"),
  loadImage("../graphics/ghost7.svg"),
  loadImage("../graphics/ghost8.svg"),
];
hearts = [
  loadImage("../graphics/heart1.svg"),
  loadImage("../graphics/heart2.svg"),
  loadImage("../graphics/heart3.svg"),
  loadImage("../graphics/heart4.svg"),
  loadImage("../graphics/heart5.svg"),
  loadImage("../graphics/heart6.svg"),
  loadImage("../graphics/heart7.svg"),
  loadImage("../graphics/heart8.svg"),
  loadImage("../graphics/heart9.svg"),
  loadImage("../graphics/heart10.svg"),
];
moons = [
  loadImage("../graphics/moon1.svg"),
  loadImage("../graphics/moon2.svg"),
  loadImage("../graphics/moon3.svg"),
  loadImage("../graphics/moon4.svg"),
  loadImage("../graphics/moon5.svg"),
];
skulls = [
  loadImage("../graphics/skull1.svg"),
  loadImage("../graphics/skull2.svg"),
  loadImage("../graphics/skull3.svg"),
  loadImage("../graphics/skull4.svg"),
  loadImage("../graphics/skull5.svg"),
  loadImage("../graphics/skull6.svg"),
  loadImage("../graphics/skull7.svg"),
];
sparkles = [
  loadImage("../graphics/sparkle1.svg"),
  loadImage("../graphics/sparkle2.svg"),
  loadImage("../graphics/sparkle3.svg"),
  loadImage("../graphics/sparkle4.svg"),
  loadImage("../graphics/sparkle5.svg"),
  loadImage("../graphics/sparkle6.svg"),
  loadImage("../graphics/sparkle7.svg"),
];
}

function setup() {
let jumblePattern = createCanvas(windowWidth, 400);
jumblePattern.parent('canvas2');
mixIcons();

}

function draw() {
  frameRate(3);
  background('#222223');
  createPattern();
}


function randomize(array) {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}
function mixIcons() {
    icons = [
        bows,
        ghosts,
        hearts,
        moons,
        skulls,
        sparkles
    ]
    iconMix = icons.flat();
}

function resizeImages(array) {
   for (let i = 0; i < array.length; i++) {
  array[i].resize(30, 0);
  }
}

function createPattern() {
    resizeImages(iconMix);
  let space = 125;
  for ( x = 0; x < width + 50; x += space){
    for ( y = 0; y < height + 50; y += space){
      tint(randomize(colors));
      image(randomize(iconMix), x, y);
      image(randomize(iconMix), x + space/1.5, y + space/2);
      image(randomize(iconMix), x + space/3, y + space/3);
      image(randomize(iconMix), x + space, y + space/2.5);
      image(randomize(iconMix), x + space/2, y);
      image(randomize(iconMix), x + (space-space/1.25), y + space/1.5);
    }
  }
}