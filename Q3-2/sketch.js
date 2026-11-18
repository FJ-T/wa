// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1  ;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.02; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  let speed = 25;
  if (keyIsDown(SHIFT)){
    speed = 100;
  }
  if(keyIsDown(LEFT_ARROW)){ x -= speed; }
  if(keyIsDown(RIGHT_ARROW)){ x += speed; }

  // BLANK[2] 重力とジャンプ
vy += g;

  if (keyIsPressed && key == ' ' && y >= groundY - size / 2 ) 
    {
    vy = -100;
  }

  // 速くなりすぎないように制限
  vx = constrain(vx, -100, 100);
  vy = constrain(vy, -100, 100);

  // 位置を更新
  x += vx;
  y += vy;
  vx = 0;
  if (y > groundY - size / 2)
  {
    y = groundY - size / 2;
    vy = 0;
  }
  x = constrain(x, size / 2, width - size / 2);
  // キャラクターを描く
  fill(255);
  ellipse(x, y, size, size);
}