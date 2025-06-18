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

// Character Repository
let repo = [];
let charList;
let listItem;
let saveChar;

// Global Variables
let character;
let saveImg;
let pause;
let frameSlider;
let isLooping = true;
let desc;

// Canvas Setup
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("canvas-wrap") 

  // Make a slider to control the frame rate
  frameSlider = createSlider(0.5, 30, 10, 0);
  frameSlider.parent("canvas-wrap");
  frameSlider.position(50, -20);
  frameSlider.size(500);

  // Make a pause button
  pause = createButton('Stop');
  pause.mousePressed(togglePause);
  pause.parent("canvas-wrap");
  // Make a save button
  saveChar = createButton('Save');
  saveChar.parent("canvas-wrap");
  //Make a download button
  saveImg = createButton('Download');
  saveImg.parent("canvas-wrap");
  saveImg.mousePressed(download);

  // Make the list of saved characters
  charList = createDiv();
  charList.parent("canvas-wrap");
  charList.addClass("character-list");
}

function draw() {
  background('aliceblue');
  // Allow slider to control frame rate
  let speed = frameSlider.value();
  frameRate(speed);
  // Show NPC
  character = new NPC (species, profession, hairColor, eyeColor, pronouns, mood, weapon);
  character.show();
  saveChar.mousePressed(character.save);
}

// Create Functionality to Save Image
function download() {
  saveCanvas('NPC.png');
}


// Pause Functionality
function togglePause() {
  if ( isLooping === true) {
        noLoop();
        isLooping = false;
        pause.html('Go!');
  } else {
      loop();
      isLooping = true;
      pause.html('Stop');
  }
}

//Character Setup
class NPC {
  constructor(species, profession, hair, eyes, gender, mood, weapon) {
    this.species = randomize(species);
    this.profession = randomize(profession);
    this.hair = randomize(hair);
    this.eyes = randomize(eyes);
    this.gender = randomize(gender);
    this.mood = randomize(mood);
    this.weapon = randomize(weapon);
  }

  show() {    
    desc = [
    `${this.species} ${this.profession} with ${this.hair} hair and ${this.eyes} eyes.`,
    this.gender.objective !== 'They' ? `${this.gender.objective} has a ${this.mood} look on ${this.gender.possessive} face.` :  `${this.gender.objective} have a ${this.mood} look on ${this.gender.possessive} face.`,
    this.gender.objective !=='They' ? `${this.gender.objective} carries a ${this.weapon}.` : `${this.gender.objective} carry a ${this.weapon}.`
    ]
    textSize(18);
    textAlign(CENTER);
    text(desc[0], random(210, width - 210), random(15, 130));
    text(desc[1], random(160, width - 160), random(145, 260));
    text(desc[2], random(160, width - 160), random(270, 385));
  }

  save() {
    let npc = join(desc, " ");
    repo.push(npc);  
    listItem = createP(repo[repo.length -1]);
    listItem.parent(charList);
  }
}

// Create Randomize Function
function randomize(array) {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}
