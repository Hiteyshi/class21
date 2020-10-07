var fixedRect, movingRect;
var myRect1,myRect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  myRect1=createSprite(100,400,60,60);
  myRect1.shapeColor="red";
  myRect2=createSprite(700,400,60,60);
  myRect2.shapeColor="red";
  myRect1.velocityX=3;
  myRect2.velocityX=-3;

}

function draw() {
  background(0,0,0);  

  mybounce(movingRect,fixedRect);
  mybounce(myRect1,myRect2);
  drawSprites();
}
