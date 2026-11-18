// 最終課題を制作しよう

let catX = 0;
let catY = 0;
let catSize = 40;
let score = 0;
let gameState = "PLAY";
let highscore = 0;

let stars = [];
let debrisList = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  catX = width / 2;
}

function draw(){
  background(20, 20, 50);

  drawPlanet();

  if(gameState === "PLAY"){
    moveCat();
    catY = getGroundY(catX) - (catSize / 2);

    drawCat(catX, catY);

    manageStars();
    manageDebris();

    fill(255);
    noStroke();
    textSize(24);
    textAlign(LEFT,TOP);
    text("Score: " + score, 20, 20);

  } 
  
  else if (gameState === "GAMEOVER") {
    fill(255, 50, 50);
    noStroke();
    textSize(width * 0.08);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2 - 40);
    fill(255);
    textSize(width * 0.04);
    text("Score: " + score, width / 2, height / 2 + height * 0.1);

    textSize(width * 0.03);
    text("Click to Restart", width / 2, height / 2 + height * 0.2);

    if (highscore < score) {highscore = score;}
      textSize(24);
      textAlign(LEFT, TOP);
      text("High Score: " + highscore, 20, 20)
  }
    
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  catX = constrain(catX, 0, width - catSize);
}

function moveCat() {
  if (keyIsDown(LEFT_ARROW)) {
    catX -= 6;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    catX += 6;
  }
  if (keyIsDown(SHIFT)) {
    catX += 10;
  }
  catX = constrain(catX, 0, width - catSize);
}

function drawCat(x, y){
  push();
  translate(x, y);

  noStroke();
  fill(255);
  ellipse(0, 0, catSize, catSize);

  stroke(20, 20, 50);
  strokeWeight(2);
  noFill();

  let w = catSize;

  fill(20, 20, 50);
  noStroke();
  ellipse(-w * 0.15, -w * 0.05, w * 0.12, w * 0.12);
  ellipse(w * 0.15, -w * 0.05, w * 0.12, w * 0.12);

  stroke(20, 20, 50);
  strokeWeight(2);
  noFill();
  line(-w * 0.08, w * 0.1, w * 0.08, w * 0.1);

  pop();
}

function manageStars(){
  if (random(50) < 3){
    stars.push({ x: random(width), y: -20});
  }

  for(let i = stars.length - 1; i >= 0; i--) {
    let s = stars[i];
    s.y += 4;

    noStroke();
    fill(255, 255, 0);
    ellipse(s.x, s.y, 15, 15);

    let d = dist(catX, catY, s.x, s.y);
    if (d < (catSize / 2) + 7.5){
      score += 10;
      stars.splice(i, 1);
    } else if(s.y > height) {
      stars.splice(i, 1);
    }
  }
}

function manageDebris() {
  if(score < 50){
  if (random(100) < 2.3) {
    debrisList.push({ x: random(width), y: -20});
  }
}
 if(score >= 50 && score <= 100){if (random(100) < 3.1) {
    debrisList.push({ x: random(width), y: -20});
  }
}
if(score > 100 && score <= 200){if (random(100) < 3.8) {
    debrisList.push({ x: random(width), y: -20});
  }
}
if(score > 200){if (random(100) < 5.5) {
    debrisList.push({ x: random(width), y: -20});
  }}

  

  for (let i = debrisList.length - 1; i >= 0; i--) {
    let d0bj = debrisList[i];
    if(score < 50){d0bj.y += 5};
    if(score >= 50 && score <= 100){d0bj.y += 7}
    if(score > 100 && score <= 200){d0bj.y += 9}
    if(score > 200){d0bj.y += 11}


    noStroke();
    fill(100, 100, 100);
    rect(d0bj.x - 10, d0bj.y - 10, 20, 20);

    let d = dist(catX, catY, d0bj.x, d0bj.y);
    if(d < (catSize / 2) + 10) {
      gameState = "GAMEOVER";
    } else if (d0bj.y > height) {
      debrisList.splice(i, 1);
    }
  }
}

function drawPlanet() {
  let groundY = height * 0.8;

  fill(200, 200, 210);
  noStroke();
  rect(0, groundY, width, height - groundY);
}

function getGroundY(currentX) {
  return height * 0.8;
}

function resetGame() {
    gameState = "PLAY";
    score = 0;
    stars = [];
    debrisList = [];
    catX = width / 2;
  }

function mousePressed() {
  if (gameState === "GAMEOVER") {
    resetGame();
  }
}