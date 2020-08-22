var box, rectangle; 
var ground, ground2;
var slingshot;
function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(1,1,1);  
  drawSprites();
}


function mouseDragged(){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}