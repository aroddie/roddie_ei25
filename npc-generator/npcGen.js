// Character Options Setup
let species = [
  "A human",
  "A gnome",
  "An elf",
  "An orc",
  "A tiefling",
  "A bugbear"
];
let profession = [
  "baker",
  "blacksmith",
  "tavernkeep",
  "fighter",
  "wizard",
  "ranger",
  "bard"
];
let hairColor = [
  "brown",
  "blonde",
  "red",
  "black",
  "grey",
  "purple"
];
let eyeColor = [
  "brown",
  "blue",
  "green",
  "grey",
  "black",
  "hazel"
];
let pronouns = [
  {
    objective: "He",
    possessive: "his"
  },
  {
    objective: "She",
    possessive: "her"
  },
  {
    objective: "They",
    possessive: "their"
  }
];
let mood = [
  "happy",
  "sad",
  "disgusted",
  "grumpy",
  "frightened",
  "cryptic"
];
let weapon = [
  "greatsword",
  "bow and arrow",
  "lute",
  "greataxe",
  "warhammer",
  "sword and shield",
  "spellbook",
  "rolling pin",
];

// Global Variables
let saveChar;
let frameSlider;

// Canvas Setup
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("canvas-wrap")
  // Make a save button
  saveChar = createButton('Save Character');
  saveChar.mousePressed(download);
  saveChar.parent("canvas-wrap");
  saveChar.position(50, 220);
  // Make a slider to control the frame rate
  frameSlider = createSlider(0.5, 30, 10, 0);
  frameSlider.parent("canvas-wrap");
  frameSlider.position(50, 20);
  frameSlider.size(500);
}

function draw() {
  background('#cfecec');
  // Allow slider to control frame rate
  let speed = frameSlider.value();
  frameRate(speed);
  // Show character
  character();
}

// Create Functionality to Save Image
function download() {
  saveCanvas('NPC.png');
}

//Character Setup
function character() {
  textSize(20);
  text(randomize(species) + " " + randomize(profession) + " with " + randomize(hairColor) + " hair and " + randomize(eyeColor) + " eyes.", 50, 100);
  // Keep pronouns consistent by randomizing before the text function
  let gender = randomize(pronouns);
  // Allow for proper grammar
  if (gender.objective !== "They") {
  text(gender.objective + " has a " + randomize(mood) + " look on " + gender.possessive + " face.", 50, 140);
  text(gender.objective + " carries a " + randomize(weapon) + ".", 50, 180);
  } else {
    text(gender.objective + " have a " + randomize(mood) + " look on " + gender.possessive + " face.", 50, 140);
    text(gender.objective + " carry a " + randomize(weapon) + ".", 50, 180);
  }
}

// Create Randomize Function
function randomize(array) {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}
