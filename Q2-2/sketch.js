// チェッカー
function setup() {
  createCanvas(200, 200);
  background(128);

  const size = width / 8; // マスの一辺の長さ
  
  //グレーの四角形
  fill(255);
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2==0){
        rect(size*i,size*j,size,size);
      }
    }
  }
      
fill(255, 0, 0);
for(let j = 0; j < 3; j++){
  for(let i = 0; i < 8; i++){
    if((i + j) % 2 == 1){
      ellipse(size * i + size / 2, size * j + size / 2, size * 0.8, size * 0.8);
    }
  }
}

fill (0);
for(let j = 5; j < 8; j++){
  for(let i = 0; i < 8; i++){
    if((i + j) % 2 == 1){
      ellipse(size * i + size / 2, size * j + size / 2, size * 0.8, size * 0.8);
    }
  }
}
}
