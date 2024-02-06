var bg, bgImage, ding, dong1, dong2, dong3, block1, block2;
function preload() {
  bgImage = loadImage("background.png")
}
function setup() {
  createCanvas(400,400)
  
  ding = createSprite(75,200,15,15)
  ding.shapeColor = "green";
  dong1 = createSprite(100,200,10,10)
  dong1.shapeColor = "red";
  dong2 = createSprite(200,200,10,10)
  dong2.shapeColor = "red";
  dong3 = createSprite(300,200,10,10)
  dong3.shapeColor = "red";
  block1 = createSprite(200,110,250,5)
  block2 = createSprite(200,290,250,5)
  
  block3 = createSprite(350,200,10,250)
  
  block3.shapeColor = "green";
  dong1.velocityY = 4;
  dong2.velocityY =-4;
  dong3.velocityY = 4;
}
function draw() {
  background(250)
  dong1.bounceOff(block1)
  dong1.bounceOff(block2)
  dong2.bounceOff(block1)
  dong2.bounceOff(block2)
  dong3.bounceOff(block1)
  dong3.bounceOff(block2)
  if (keyDown("right")) {
    ding.x = ding.x + 0.8;
  }
  if (keyDown("left")) {
    ding.x = ding.x - 0.8;
  }
  if (ding.isTouching(dong1)) {
    ding.x = 75;
    ding.y = 200;
  }
  if (ding.isTouching(dong2)) {
    ding.x = 75;
    ding.y = 200;
  }
  if (ding.isTouching(dong3)) {
    ding.x = 75;
    ding.y = 200;
  }
  if (ding.isTouching(block3)) {
   
text("You Win!!!", 200, 200);
  }
  drawSprites()
}
