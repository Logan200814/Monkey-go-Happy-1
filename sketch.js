
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup,obstacleGroup
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);

  ground = createSprite(250,480,900,10);
  ground.velocityX = -3
  
  monkey = createSprite(50,449,10,10);
  monkey.addAnimation ("MonkeyAnimation",monkey_running);
  monkey.scale = 0.1
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
  
  monkey.velocityY = monkey.velocityY +0.5
  
  monkey.collide(ground);
  
  if(keyWentDown("space")){
     monkey.velocityY = -14
  }
  
  if(frameCount % 80 === 0){
     spawnBananas();
  }
  
  if(frameCount % 300 === 0){
     spawnRocks();
  }
  
  if(ground.x < 0){
     ground . x = ground.width/2
  }
  
  textSize(30)
  text("survival time " + round(frameCount/5),10,30)
  
  
  
  drawSprites();
}

function spawnBananas(){
  banana = createSprite(480,Math.round(random(250,320)));
  banana.addImage (bananaImage);
  banana.velocityX = -2
  banana.scale = 0.1
  bananaGroup.add(banana);
  banana.lifetime = 400
}

function spawnRocks(){
  obstacle = createSprite(460,460,10,10);
  obstacle.addImage (obstaceImage);
  obstacle.velocityX = -2
  obstacle.scale = 0.1
  obstacleGroup.add(obstacle);
  obstacle.lifetime = 400
}




