var ship,ship_running,seaImg,sea
function preload(){
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200,40.10)
  sea.addImage(seaImg)
  sea.scale = 0.6;
  ship = createSprite(130,200,30,30);
  ship.addAnimation("running",ship_running);
  ship.scale = 0.3;
}

function draw() {
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  if(keyDown("right")){
    ship.velocityX = +10;
   }
   if(keyDown("left")){
    ship.velocityX = -10;
   }
  
   background("blue");
    drawSprites();

 
}
