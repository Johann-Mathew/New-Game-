var space, space1;
var meteor, meteor1;
var rocket, rocket1;
var rocketImg;
var spaceImg;
var meteorImg;
var obstaclesGroup;
var gameState = PLAY;
var END = 0;
var PLAY = 1;
var frameCount = 110



function preload(){
rocketImg = loadImage("Rocket.png");
spaceImg  = loadImage("Space1.jpg");
meteorImg = loadImage("Meteor.jpg");
}

function setup() {
    createCanvas(600,400);
    
    space = createSprite(300,200,10,800);
    space.addImage(spaceImg);
    space.scale = 5;
    space.velocityY = 1.5;

    rocket = createSprite(300,300,20,50);
    rocket.addImage(rocketImg);
    rocket.scale = 0.06;



    obstaclesGroup = createGroup();
}

function draw() {
 background(180)

 if(space.y > 400){
    space.y = 300
  }
  
    if(keyDown("right")){
      rocket.x = rocket.x +3;
    }
    if(keyDown("left")){
      rocket.x = rocket.x -3;
    }
  
    if(keyDown("up")){
      rocket.velocityY = -6;
    }
    rocket.velocityY = rocket.velocityY + 0.8
    
    if (rocket.isTouching(obstaclesGroup)){
        obstaclesGroup.destroyEach();
        
    }

    spawnObstacles();
    
    drawSprites();
    
}




function spawnObstacles(){
    if(frameCount%110===0){
      meteor = createSprite(300,0,30,30)
      meteor.addImage(meteorImg);
      meteor.x = (Math.round(random(50,550)))
      meteor.velocityY = +3.5
      meteor.lifetime=300;
      obstaclesGroup.add(meteor);
      meteor.scale = 0.35
    } 
    
}



