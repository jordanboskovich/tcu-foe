const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const singleBtn = document.getElementById('singleBtn');
const ok1 = document.getElementById('ok1');
const ok2 = document.getElementById('ok2');
const okInt = document.getElementById('okInt');
const instructions = document.getElementById('instructions');
const bag = document.getElementById('bag');
const xBtn = document.getElementById('xBtn');
const redX = document.getElementById('redX');

const battlePikachu = document.getElementById("battlePikachu");
const battleEevee = document.getElementById("battleEevee");
const battleCharmander = document.getElementById("battleCharmander");
const battleSquirtle = document.getElementById("battleSquirtle");
const battleMagikarp = document.getElementById("battleMagikarp");

const kabutops = document.getElementById("kabutops");
const bulbasaur = document.getElementById("bulbasaur");
const steelix = document.getElementById("steelix");

const attackBtnDiv = document.getElementById("attackBtnDiv");
const attackInst = document.getElementById("attackInst");
const attackCounter = document.getElementById("attackCounter");
const spamBtn = document.getElementById("spamBtn");
const attackBtnGrey = document.getElementById("attackBtnGrey");

const goToBI = document.getElementById("goToBI");
const battleBtn = document.getElementById("battleBtn");
const typeChart = document.getElementById("typeChart");
const typeChartImg = document.getElementById("typeChartImg");

const endIntro = document.getElementById("endIntro");
const yesBattle = document.getElementById("yesBattle");
const noBattle = document.getElementById("noBattle");
const arrowLS = document.getElementById("arrowLS");
const sBubbleText = document.getElementById("sBubbleText");
const youLost = document.getElementById("youLost");
const enterA = document.getElementById("enterA");
const enterArenaBtn = document.getElementById("enterArenaBtn");
const enterArena = document.getElementById("enterArena");

const Sslot1 = document.getElementById('Sslot1');
const Sslot2 = document.getElementById('Sslot2');
const Sslot3 = document.getElementById('Sslot3');
const Sslot4 = document.getElementById('Sslot4');
const Sslot5 = document.getElementById('Sslot5');

const SslotBtn1 = document.getElementById("SslotBtn1");
const SslotBtn2 = document.getElementById("SslotBtn2");
const SslotBtn3 = document.getElementById("SslotBtn3");
const SslotBtn4 = document.getElementById("SslotBtn4");
const SslotBtn5 = document.getElementById("SslotBtn5");

const pikaIc = document.getElementById('pikaIc');
const eevIc = document.getElementById('eevIc');
const charIc = document.getElementById('charIc');
const squirtIc = document.getElementById('squirtIc');
const magiIc = document.getElementById('magiIc');


const math1 = document.getElementById('math1');
const math2 = document.getElementById('math2');
const math3 = document.getElementById('math3');
const math4 = document.getElementById('math4');

const pokeball = document.getElementById("pokeball");
const greatball = document.getElementById("greatball");
const ultraball = document.getElementById("ultraball");
const masterball = document.getElementById("masterball");

const healthBar1 = document.getElementById("healthBar1");
const healthBar2 = document.getElementById("healthBar2");
const namePlate1 = document.getElementById("namePlate1");
const namePlate2 = document.getElementById("namePlate2");
const typePlate1 = document.getElementById("typePlate1");
const typePlate2 = document.getElementById("typePlate2");
const healthPlate1 = document.getElementById("healthPlate1");
const healthPlate2 = document.getElementById("healthPlate2");
const fullHealth1 = document.getElementById("fullHealth1");
const fullHealth2 = document.getElementById("fullHealth2");
const halfHealth1 = document.getElementById("halfHealth1");
const halfHealth2 = document.getElementById("halfHealth2");
const emptyHealth1 = document.getElementById("emptyHealth1");
const emptyHealth2 = document.getElementById("emptyHealth2");
const attackBtn = document.getElementById("attackBtn");
const nextAttackBtn = document.getElementById("nextAttackBtn");
const abtToWin = document.getElementById("abtToWin");
const abtToLose = document.getElementById("abtToLose");
const abtToTie = document.getElementById("abtToTie");
const yoursFainted = document.getElementById("yoursFainted");
const hisFainted = document.getElementById("hisFainted");
const bothFainted = document.getElementById("bothFainted");
const goWinScreen = document.getElementById("goWinScreen");
const goLoseScreen = document.getElementById("goLoseScreen");
const goTieScreen = document.getElementById("goTieScreen");
const youWin = document.getElementById("youWin");
const youLose = document.getElementById("youLose");
const youTie = document.getElementById("youTie");

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const bushOne = document.getElementById("bush1");
bushOne.width = 40;
bushOne.height = 40;

const bushTwo = document.getElementById("bush2");
bushTwo.width = 40;
bushTwo.height = 40;

const bushThree = document.getElementById("bush3");
bushThree.width = 40;
bushThree.height = 40;

const bushFour = document.getElementById("bush4");
bushFour.width = 40;
bushFour.height = 40;

const bushFive = document.getElementById("bush5");
bushFive.width = 40;
bushFive.height = 40;

const houses = document.getElementById("houses");
houses.width = 130;
houses.height = 500;

const pikachu = document.getElementById("pikachu");
pikachu.width = 100;
pikachu.height = 70;

const eevee = document.getElementById("eevee");
eevee.width = 70;
eevee.height = 50;

const charmander = document.getElementById("charmander");
charmander.width = 50;
charmander.height = 50;

const squirtle = document.getElementById("squirtle");
squirtle.width = 70;
squirtle.height = 40;

const magikarp = document.getElementById("magikarp");
magikarp.width = 70;
magikarp.height = 50;

class Pokemons {
  name;
  type;
  health;
  move1;
  move2;
  move3;
  image;

  constructor(name, type, health, move1, move2, move3, image) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.image = image;
  }

  loseHealth(damage){
    this.health -= damage;
  }

  compareTypes(otherType){
    if (this.type === "electric"){
      if (otherType === "ground"){
        return [1, 2];
      }
      if (otherType === "grass"){
        return [0.5, 1];
      }
      if (otherType === "steel"){
        return [2, 0.5];
      }
    }
    if (this.type === "normal"){
      if (otherType === "ground"){
        return [2, 1];
      }
      if (otherType === "grass"){
        return [1, 1];
      }
      if (otherType === "steel"){
        return [0.5, 1];
      }
    }
    if (this.type === "fire"){
      if (otherType === "ground"){
        return [1, 2];
      }
      if (otherType === "grass"){
        return [2, 0.5];
      }
      if (otherType === "steel"){
        return [2, 0.5];
      }
    }
    if (this.type === "water"){
      if (otherType === "ground"){
        return [2, 1];
      }
      if (otherType === "grass"){
        return [0.5, 2];
      }
      if (otherType === "steel"){
        return [1, 0.5];
      }
    }
  }
}

var pokemonOrder = [];

var classPikachu = new Pokemons("Pikachu", "electric", 50, "Volt Tackle", "Electro Ball", "Iron Tail", battlePikachu);
var classEevee = new Pokemons("Eevee", "normal", 50, "Swift", "Quick Attack", "Bite", battleEevee);
var classCharmander = new Pokemons("Charmander", "fire", 50, "Ember", "Flamethrower", "Dragon Rage", battleCharmander);
var classSquirtle = new Pokemons("Squirtle", "water", 50, "Tail Whip", "Water Gun", "Rapid Spin", battleSquirtle);
var classMagikarp = new Pokemons("Magikarp", "water", 50, "Flail", "Splash", "Tackle", battleMagikarp);
var classKabutops = new Pokemons("Kabutops", "ground", 50, "Scratch", "Stone Edge", "Rock Smash", kabutops);
var classBulbasaur = new Pokemons("Bulbasaur", "grass", 50, "Razor Leaf", "Vine Whip", "Poison Power", bulbasaur);
var classSteelix = new Pokemons("Steelix", "steel", 50, "Crunch", "Dragon Tail", "Heavy Slam", steelix);

var villainPokemon = [classKabutops, classBulbasaur, classSteelix];

okInt.addEventListener('click', () => {
  instructions.style.display = "none";
});

bag.addEventListener('click', () => {
  bagScreen.style.display = "block";
});

xBtn.addEventListener('click', () => {
  bagScreen.style.display = "none";
});

const keys = [];

const player = {
    x: 200,
    y: 200,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 10, 
    moving: false
};

var visBush1 = 0;
var visBush2 = 0;
var visBush3 = 0;
var visBush4 = 0;
var visBush5 = 0;

const playerSprite = new Image();
playerSprite.src = "player.png";

const background = new Image();
background.src = "background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

var pika = 0;
var eev = 0;
var char = 0;
var squirt = 0;
var mag = 0;

var pokeGoneP = false;
var pokeGoneC = false;
var pokeGoneE = false;
var pokeGoneM = false;
var pokeGoneS = false;

var slotFill1 = 0;
var slotFill2 = 0;
var slotFill3 = 0;
var slotFill4 = 0;
var slotFill5 = 0;

setInterval(function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    if (visBush1 === 0) {
        ctx.drawImage(bushOne, 430, 40, 40, 40);
    };
    if (visBush2 === 0) {
        ctx.drawImage(bushTwo, 700, 390, 40, 40);
    };
    if (visBush3 === 0) {
        ctx.drawImage(bushThree, 620, 80, 40, 40);
    };
    if (visBush4 === 0) {
        ctx.drawImage(bushFour, 390, 400, 40, 40);
    };
    if (visBush5 === 0) {
        ctx.drawImage(bushFive, 540, 240, 40, 40);
    };

    if (visBush1 === 1 && pokeGoneP === false) {
        ctx.drawImage(pikachu, 430, 40, 120, 90);
        pika = catchPokemon("pikachu", 0);
        if (pika === 1 || pika === 2){
          visBush1 = 3;
          pokeGoneP = true;
        }
    }
    if (visBush2 === 1 && pokeGoneE === false) {
        ctx.drawImage(eevee, 700, 390, 70, 60);
        eev = catchPokemon("eevee", 1);
        if (eev === 1 || eev === 2){
          visBush2 = 3;
          pokeGoneE = true;
        }
    }
    if (visBush3 === 1 && pokeGoneC === false) {
        ctx.drawImage(charmander, 620, 80, 50, 50);
        char = catchPokemon("charmander", 2);
        if (char === 1 || char === 2){
          visBush3 = 3;
          pokeGoneC = true;
        }
    }
    if (visBush4 === 1 && pokeGoneS === false) {
        ctx.drawImage(squirtle, 390, 400, 70, 70);
        squirt = catchPokemon("squirtle", 3);
        if (squirt === 1 || squirt === 2){
          visBush4 = 3;
          pokeGoneS = true;
        }
    }
    if (visBush5 === 1 && pokeGoneM === false) {
        ctx.drawImage(magikarp, 540, 240, 70, 50);
        mag = catchPokemon("magikarp", 4);
        if (mag === 1 || mag === 2){
          visBush5 = 3;
          pokeGoneM = true;
        }
    }

    if (visBush1 === 3){
      if (pika === 1){
        Sslot1.innerHTML = "Pikachu";
        pikaIc.style.display = "block";
        slotFill1 = 1;
      }
      if (pika === 2){
        console.log("the pikachu is gone")//pokemon flee
      }
    }
    if (visBush2 === 3){
      if (eev === 1){
        Sslot2.innerHTML = "Eevee";
        eevIc.style.display = "block";
        slotFill2 = 1;
      }
      if (eev === 2){
        console.log("the eevee is gone")//pokemon flee
      }
    }
    if (visBush3 === 3){
      if (char === 1){
         Sslot3.innerHTML = "Charmander";
         charIc.style.display = "block";
         slotFill3 = 1;
      }
      if (char === 2){
        console.log("the charmander is gone")//pokemon flee
      }
    }
    if (visBush4 === 3){
      if (squirt === 1){
         Sslot4.innerHTML = "Squirtle";
         squirtIc.style.display = "block";
         slotFill4 = 1;
      }
      if (squirt === 2){
        console.log("the squirtle is gone")//pokemon flee
      }
    }
    if (visBush5 === 3){
      if (mag === 1){
         Sslot5.innerHTML = "Magikarp";
         magiIc.style.display = "block";
         slotFill5 = 1;
      }
      if (mag === 2){
        console.log("the magikarp is gone")//pokemon flee
      }
    }

  function villainApp(){
    endIntro.style.display = "block";
  }

  if (visBush1 === 3 && visBush2 === 3 && visBush3 === 3 && visBush4 === 3 && visBush5 === 3){
    setTimeout(villainApp, 500);
  }
  
    ctx.drawImage(houses, -15, 0, 130, 500);
    movePlayer();
    handlePlayerFrame();
    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            if (player.x > 410 && player.x < 450 && player.y > 10 && player.y < 70) {
                visBush1 = 1;
            }
            if (player.x > 680 && player.x < 720 && player.y > 360 && player.y < 410) {
                visBush2 = 1;
            }
            if (player.x > 600 && player.x < 640 && player.y > 50 && player.y < 110) {
                visBush3 = 1;
            }
            if (player.x > 370 && player.x < 410 && player.y > 370 && player.y < 430) {
                visBush4 = 1;
            }
            if (player.x > 520 && player.x < 560 && player.y > 210 && player.y < 270) {
                visBush5 = 1;
            }
        }
    });
}, 100)

window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
    player.moving = true;
});
window.addEventListener("keyup", function(e) {
    delete keys[e.keyCode];
    player.moving = false;
});

function movePlayer() {
    if (keys[38] && player.y > 0) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys[37] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
    }
}


function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) player.frameX++
    else player.frameX = 0;
}

var boxText = 0;
var pickedBall = "";

var pokeballQs = ["37 + 50", "20 + 88", "11 + 67", "5 + 83", "126 + 34"];
var pokeballAs = [
    ["537", "87", "97", "13"],
    ["98", "68", "108", "118"],
    ["78", "56", "76", "58"],
    ["85", "89", "78", "88"],
    ["150", "160", "170", "180"]
];
var pokeballAI = [1, 2, 0, 3, 1];
var greatballQs = ["6 * 12", "16 * 3", "7 * 13", "11 * 11", "14 * 8"];
var greatballAs = [
    ["72", "68", "54", "74"],
    ["38", "48", "54", "60"],
    ["84", "74", "78", "91"],
    ["111", "112", "121", "211"],
    ["104", "112", "122", "108"]
];
var greatballAI = [0, 1, 3, 2, 1];
var ultraballQs = ["(124/4) + 7", "(9 * 12) - 35", "9³", "√169 - 14", "-67 - (8 * 2)"];
var ultraballAs = [
    ["31", "28", "38", "29"],
    ["73", "89", "76", "82"],
    ["898", "318", "639", "729"],
    ["5", "-3", "8", "-1"],
    ["-51", "-83", "-125", "14"]
];
var ultraballAI = [2, 0, 3, 3, 1];
var masterballQs = ["2√6(4√2)", "8³/√16", "4³ * 60/15", "√(8 * 128)", "³√343"];
var masterballAs = [
    ["8√8", "32√3", "8√3", "16√3"],
    ["152", "128", "264", "256"],
    ["256", "424", "188", "312"],
    ["46", "28", "12", "32"],
    ["6", "13", "7", "9"]
];
var masterballAI = [3, 1, 0, 3, 2];

function pokeballsDisappear() {
    pokeball.style.display = "none";
    greatball.style.display = "none";
    ultraball.style.display = "none";
    masterball.style.display = "none";
    math1.style.display = "block";
    math2.style.display = "block";
    math3.style.display = "block";
    math4.style.display = "block";
    boxText = 2;
}

var arg1 = [];
var arg2 = 0;
var arg3 = [];
var AI = [];
var ansClicked = -1;
var correctAns = -2;
var bsArg = 0;

function displayMath(ballQs, bushInd) {
    return ballQs[bushInd];
}
function displayAns(ballAs, bushInd) {
    return ballAs[bushInd];
}

function catchChance(ballStrength){
  var randNum = Math.floor(Math.random() * 4) + 1;
  if (randNum > ballStrength){
    return false;
  }
  else {
    return true;
  }
}

var caughtYN = 0;
function catchPokemon(pokemonName, bushIndex) {
    rectangle.style.display = "block";
    if (boxText === 0) {
        btn1.style.display = "block";
        btn2.style.display = "block";
        singleBtn.style.display = "none";
        ok1.style.display = "none";
        ok2.style.display = "none";
        topRec.innerHTML = "You found a wild " + pokemonName + "! Do you want to catch it?";
        topRec.style.fontSize = "20px";
    }
    if (boxText === 1) {
        topRec.innerHTML = "Pick a pokeball! The stronger the pokeball, the greater your chance of catching the pokemon, but the harder your math question will be.";
        topRec.style.fontSize = "15px";
    }
    if (boxText === 2) {
        var mathQ = displayMath(arg1, arg2);
        var mathA = displayAns(arg3, arg2);
        topRec.innerHTML = "You chose the " + pickedBall + "! Solve this math problem to throw it: " + mathQ;
        topRec.style.fontSize = "15px";
        math1.innerHTML = mathA[0];
        math2.innerHTML = mathA[1];
        math3.innerHTML = mathA[2];
        math4.innerHTML = mathA[3];
        correctAns = AI[bushIndex];
        if (ansClicked === correctAns){
          boxText = 3; 
        }
        if (ansClicked != correctAns && ansClicked > -1) {
          boxText = 5; 
        }
    }
    if (boxText === 3){
      ansClicked = -1;
      correctAns = -2;
      math1.style.display = "none";
      math2.style.display = "none";
      math3.style.display = "none";
      math4.style.display = "none";
      topRec.innerHTML = "That's right! Throw the " + pickedBall + " to try and catch the " + pokemonName + "!";
      topRec.style.fontSize = "20px";
      singleBtn.style.display = "block";
    }
    if (boxText === 4){
      topRec.innerHTML = "Wow! You caught " + pokemonName + "!"
      ok1.style.display = "block";
      caughtYN = 1;
    }
    if (boxText === 5){
      ansClicked = -1;
      correctAns = -2;
      math1.style.display = "none";
      math2.style.display = "none";
      math3.style.display = "none";
      math4.style.display = "none";
      topRec.innerHTML = "Sorry, that's incorrect. The wild " + pokemonName + " ran away."
      topRec.style.fontSize = "20px";
      ok2.style.display = "block"; 
      caughtYN = 2;
    }
    if (boxText === 6){
      rectangle.style.display = "none";
      boxText = 0;
      return caughtYN;
    }
    if (boxText === 7){
      topRec.innerHTML = "Oh no! You missed. The wild " + pokemonName + " ran away.";
      topRec.style.fontSize = "20px";
      ok2.style.display = "block";
      caughtYN = 2;
    }
    btn1.addEventListener('click', () => {
        btn1.style.display = "none";
        btn2.style.display = "none";
        pokeball.style.display = "block";
        greatball.style.display = "block";
        ultraball.style.display = "block";
        masterball.style.display = "block";
        boxText = 1;
    });
    btn2.addEventListener('click', () => {
        boxText = 6;
        caughtYN = 2;
    });
    pokeball.addEventListener('click', () => {
        pokeballsDisappear();
        pickedBall = "pokeball";
        arg1 = pokeballQs;
        arg2 = bushIndex;
        arg3 = pokeballAs;
        AI = pokeballAI;
    });
    greatball.addEventListener('click', () => {
        pokeballsDisappear();
        pickedBall = "great ball";
        arg1 = greatballQs;
        arg2 = bushIndex;
        arg3 = greatballAs;
        AI = greatballAI;
    });
    ultraball.addEventListener('click', () => {
        pokeballsDisappear();
        pickedBall = "ultra ball";
        arg1 = ultraballQs;
        arg2 = bushIndex;
        arg3 = ultraballAs;
        AI = ultraballAI;
    });
    masterball.addEventListener('click', () => {
        pokeballsDisappear();
        pickedBall = "master ball";
        arg1 = masterballQs
        arg2 = bushIndex;
        arg3 = masterballAs;
        AI = masterballAI;
    });
      math1.addEventListener('click', () => {
        ansClicked = 0;
    });
      math2.addEventListener('click', () => {
        ansClicked = 1;
    });
      math3.addEventListener('click', () => {
        ansClicked = 2;
    });
      math4.addEventListener('click', () => {
        ansClicked = 3;
    });
      singleBtn.addEventListener('click', () => {
        if (pickedBall === "pokeball"){
          bsArg = 1;
        }
        if (pickedBall === "great ball"){
          bsArg = 2;
        }
        if (pickedBall === "ultra ball"){
          bsArg = 3;
        }
        if (pickedBall === "master ball"){
          bsArg = 4;
        }
        var catchPM = catchChance(bsArg);
        if (catchPM === true){
          singleBtn.style.display = "none";
          boxText = 4;
        }
        if (catchPM === false){
          boxText = 7; 
        }
    });
      ok1.addEventListener('click', () => {
        boxText = 6;
    });
      ok2.addEventListener('click', () => {
        boxText = 6;
    });
}

yesBattle.addEventListener('click', () => {
  if (pika === 2 && eev === 2 && char === 2 && squirt === 2 && mag === 2){
    sBubbleText.innerHTML = "Nice try, but I can see that you caught no Pokémon. You can't defeat me!";
    sBubbleText.style.fontSize = "14px";
    yesBattle.style.display = "none";
    noBattle.style.display = "none";
    arrowLS.style.display = "block";
  }
  else{
    sBubbleText.innerHTML = "Finally, a worthy opponent! Chose your Pokémon and enter the arena."
    sBubbleText.style.fontSize = "15px";
    yesBattle.style.display = "none";
    noBattle.style.display = "none";
    enterA.style.display = "block";
    visBush1 = 4;
    visBush2 = 4;
    visBush3 = 4;
    visBush4 = 4;
    visBush5 = 4;
  }
});

noBattle.addEventListener('click', () => {
  sBubbleText.innerHTML = "HAHA! No one can defeat me! I will rule the world.";
  sBubbleText.style.fontSize = "17px";
  yesBattle.style.display = "none";
  noBattle.style.display = "none";
  arrowLS.style.display = "block"; 
});

arrowLS.addEventListener('click', () => {
  arrowLS.style.display = "none";
  sBubbleText.style.display = "none";
  document.getElementById("villainLarge").style.display = "none";
  document.getElementById("sBubbleLeft").style.display = "none";
  endIntro.style.borderColor = "red";
  youLost.style.display = "block";
});

enterA.addEventListener('click', () => {
  endIntro.style.display = "none";
  bagScreen.style.display = "block";
  enterArena.style.display = "block";
  xBtn.style.display = "none";
  bagText.innerHTML = "Click your Pokémon in the order you want them to battle:"; 
  bagText.style.fontSize = "20px";
  bagText.style.textAlign = "center";
  var totalPokemon = slotFill1 + slotFill2 + slotFill3 + slotFill4 + slotFill5;
  if (slotFill1 === 1){
    Sslot1.style.display = "none";
    SslotBtn1.style.display = "block";
    SslotBtn1.innerHTML = "Pikachu";
  }
  if (slotFill2 === 1){
    Sslot2.style.display = "none";
    SslotBtn2.style.display = "block";
    SslotBtn2.innerHTML = "Eevee";
  }
  if (slotFill3 === 1){
    Sslot3.style.display = "none";
    SslotBtn3.style.display = "block";
    SslotBtn3.innerHTML = "Charmander";
  }
  if (slotFill4 === 1){
    Sslot4.style.display = "none";
    SslotBtn4.style.display = "block";
    SslotBtn4.innerHTML = "Squirtle";
  }
  if (slotFill5 === 1){
    Sslot5.style.display = "none";
    SslotBtn5.style.display = "block";
    SslotBtn5.innerHTML = "Magikarp";
  }
  var order = 1;
  SslotBtn1.addEventListener('click', () => {
    SslotBtn1.style.display = "none";
    Sslot1.style.display = "block";
    Sslot1.innerHTML = order + ". Pikachu";
    order++;
    pokemonOrder.push(classPikachu);
    if (order > totalPokemon){
      enterArena.style.display = "none";
      enterArenaBtn.style.display = "block";
    }
  });
  SslotBtn2.addEventListener('click', () => {
    SslotBtn2.style.display = "none";
    Sslot2.style.display = "block";
    Sslot2.innerHTML = order + ". Eevee";
    order++;
    pokemonOrder.push(classEevee);
    if (order > totalPokemon){
      enterArena.style.display = "none";
      enterArenaBtn.style.display = "block";
    }
  });
  SslotBtn3.addEventListener('click', () => {
    SslotBtn3.style.display = "none";
    Sslot3.style.display = "block";
    Sslot3.innerHTML = order + ". Charmander";
    order++;
    pokemonOrder.push(classCharmander);
    if (order > totalPokemon){
      enterArena.style.display = "none";
      enterArenaBtn.style.display = "block";
    }
  });
  SslotBtn4.addEventListener('click', () => {
    SslotBtn4.style.display = "none";
    Sslot4.style.display = "block";
    Sslot4.innerHTML = order + ". Squirtle";
    order++;
    pokemonOrder.push(classSquirtle);
    if (order > totalPokemon){
      enterArena.style.display = "none";
      enterArenaBtn.style.display = "block";
    }
  });
  SslotBtn5.addEventListener('click', () => {
    SslotBtn5.style.display = "none";
    Sslot5.style.display = "block";
    Sslot5.innerHTML = order + ". Magikarp";
    order++;
    pokemonOrder.push(classMagikarp);
    if (order > totalPokemon){
      enterArena.style.display = "none";
      enterArenaBtn.style.display = "block";
    }
  });
});

function battleStart(){
  endIntro.style.display = "block";
  sBubbleText.innerHTML = "You’ve got some strong Pokémon, but mine are better! Let’s see if you can take them.";
  sBubbleText.style.fontSize = "14px";
  enterA.style.display = "none";
  goToBI.style.display = "block";
}

enterArenaBtn.addEventListener('click', () => {
  bagScreen.style.display = "none";
  canvas.style.display = "none";
  bag.style.display = "none";
  document.getElementById("arena").style.display = "block"; 
  setTimeout(battleStart, 1000);
});

goToBI.addEventListener('click', () => {
  endIntro.style.display = "none";
  document.getElementById("battleInst").style.display = "block";
});

typeChart.addEventListener('click', () => {
  document.getElementById("battleInst").style.display = "none";
  typeChartImg.style.display = "block";
  redX.style.display = "block";
});

redX.addEventListener('click', () => {
  typeChartImg.style.display = "none";
  redX.style.display = "none";
  document.getElementById("battleInst").style.display = "block";
});

var yourCounter = 0;
var villCounter = 0;

function arenaStatsSet(yourIndex, villIndex){
  namePlate1.innerHTML = pokemonOrder[yourIndex].name;
  namePlate2.innerHTML = villainPokemon[villIndex].name;
  healthPlate1.innerHTML = pokemonOrder[yourIndex].health + "/50";
  healthPlate2.innerHTML = villainPokemon[villIndex].health + "/50";
  typePlate1.innerHTML = pokemonOrder[yourIndex].type;
  typePlate2.innerHTML = villainPokemon[villIndex].type;
  pokemonOrder[yourIndex].image.style.display = "block";
  villainPokemon[villIndex].image.style.display = "block";
  attackBtn.style.display = "block";
  attackBtnGrey.style.display = "none";
  if (pokemonOrder[yourCounter].health > 40){
        fullHealth1.style.display = "block";
        halfHealth1.style.display = "none";
        emptyHealth1.style.display = "none";
  }
  else if (pokemonOrder[yourCounter].health > 20){
        halfHealth1.style.display = "block";
        fullHealth1.style.display = "none";
        emptyHealth1.style.display = "none";
  }
  else {
        emptyHealth1.style.display = "block";
        fullHealth1.style.display = "none";
        halfHealth1.style.display = "none";
  }
  if (villainPokemon[villCounter].health > 40){
        fullHealth2.style.display = "block";
        halfHealth2.style.display = "none";
        emptyHealth2.style.display = "none";
  }
  else if (villainPokemon[villCounter].health > 20){
        halfHealth2.style.display = "block";
        fullHealth2.style.display = "none";
        emptyHealth2.style.display = "none";
  }
  else {
        emptyHealth2.style.display = "block";
        fullHealth2.style.display = "none";
        halfHealth2.style.display = "none";
  }
}

battleBtn.addEventListener('click', () => {
  document.getElementById("battleInst").style.display = "none";
  healthBar1.style.display = "block";
  healthBar2.style.display = "block";
  arenaStatsSet(yourCounter, villCounter);
});

var clicks = 0;

function countDown(){
  clicks = 0;
  attackInst.style.display = "block";
  attackCounter.innerHTML = "3";
  attackInst.innerHTML = "Spam click in...";
  spamBtn.style.display = "none";
  attackCounter.style.display = "block";
  setTimeout(countTwo, 1000);
  setTimeout(countOne, 2000);
  setTimeout(countZero, 3000);
  setTimeout(btnAppears, 4000);
  setTimeout(btnDisappear, 8500);
  setTimeout(attackRes, 9000); 
}

function countTwo(){
  attackCounter.innerHTML = "2";
}

function countOne(){
  attackCounter.innerHTML = "1";
}

function countZero(){
  attackCounter.innerHTML = "GO!";
}

function btnAppears(){
  attackInst.innerHTML = "CLICK!"
  attackCounter.style.display = "none";
  spamBtn.style.display = "block";
}

function btnDisappear(){
  spamBtn.style.display = "none";
}

function attackRes(){
  if (yourCounter < pokemonOrder.length && villCounter < villainPokemon.length){
    var effect = pokemonOrder[yourCounter].compareTypes(villainPokemon[villCounter].type); 
    var effective = "";
    var damage = Math.floor(clicks * effect[0]);
    if (effect[0] === 0.5){
      effective = "not very effective";
    }
    else if (effect[0] === 1){
      effective = "effective";
    }
    else if (effect[0] === 2){
      effective = "very effective";
    }
    var villainDamage = Math.floor(Math.random()* 45) + 1;
    var villEffective = "";
    var villDamage = Math.floor(villainDamage * effect[1]);
    if (effect[1] === 0.5){
      villEffective = "not very effective";
    }
    else if (effect[1] === 1){
      villEffective = "effective";
    }
    else if (effect[1] === 2){
      villEffective = "very effective";
    }
    attackInst.innerHTML = "Your attack was " + effective + ". You did " + damage + " damage! Your enemies' attack was " + villEffective + ". He did " + villDamage + " damage.";
    //show which move the pokemon used??? 
    pokemonOrder[yourCounter].loseHealth(villDamage);
    villainPokemon[villCounter].loseHealth(damage);
    if (pokemonOrder[yourCounter].health > 0){
    }
    else {
      pokemonOrder[yourCounter].image.style.display = "none";
      yourCounter++;
    }
    if (villainPokemon[villCounter].health > 0){
    }
    else {
      villainPokemon[villCounter].image.style.display = "none";
      villCounter++;
    }

    nextAttackBtn.style.display = "block";
  }
  if (yourCounter === pokemonOrder.length && villCounter === villainPokemon.length){
    nextAttackBtn.style.display = "none";
    abtToTie.style.display = "block";
  }
  else if (yourCounter === pokemonOrder.length){
    nextAttackBtn.style.display = "none";
    abtToLose.style.display = "block";
  }
  else if (villCounter === villainPokemon.length){
    nextAttackBtn.style.display = "none";
    abtToWin.style.display = "block";
  }
}

attackBtn.addEventListener('click', () => {
  attackBtnDiv.style.display = "block";
  attackBtn.style.display = "none";
  attackBtnGrey.style.display = "block";
  countDown();
});

spamBtn.addEventListener('click', () => {
  clicks++;
});

nextAttackBtn.addEventListener('click', () => {
  nextAttackBtn.style.display = "none";
  attackBtnDiv.style.display = "none";
  arenaStatsSet(yourCounter, villCounter);
});

abtToLose.addEventListener('click', () => {
  attackBtnDiv.style.display = "none";
  attackBtn.style.display = "none";
  attackBtnGrey.style.display = "none";
  healthBar1.style.display = "none";
  healthBar2.style.display = "none";
  villainPokemon[villCounter].image.style.display = "none";
  yoursFainted.style.display = "block";
});

abtToWin.addEventListener('click', () => {
  attackBtnDiv.style.display = "none";
  attackBtn.style.display = "none";
  attackBtnGrey.style.display = "none";
  healthBar1.style.display = "none";
  healthBar2.style.display = "none";
  pokemonOrder[yourCounter].image.style.display = "none";
  hisFainted.style.display = "block";
});

abtToTie.addEventListener('click', () => {
  attackBtnDiv.style.display = "none";
  attackBtn.style.display = "none";
  attackBtnGrey.style.display = "none";
  healthBar1.style.display = "none";
  healthBar2.style.display = "none";
  bothFainted.style.display = "block";
});

goWinScreen.addEventListener('click', () => {
  hisFainted.style.display = "none";
  youWin.style.display = "block";
});

goLoseScreen.addEventListener('click', () => {
  yoursFainted.style.display = "none";
  youLose.style.display = "block";
});

goTieScreen.addEventListener('click', () => {
  bothFainted.style.display = "none";
  youTie.style.display = "block";
});


/* 
POSSIBLE ADDITIONS:

- easter egg: find a pokemon inside the house and auto win
- pokemon flee animation if the user doesn't catch it
- pokemon moves: depending on how much damage, the pokemon will use move1, 2, or 3 

*/
