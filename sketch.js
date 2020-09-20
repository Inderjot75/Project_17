
var monkey , monkey_running, ground;
var banana,banana_image,obstacle,obstacle_image;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkey_running = loadImage("sprite_0.png")
  
  banana_image = loadImage("banana.png");
  
  obstacle_image = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(30,360,10,10);
  monkey.addImage(monkey_running);
  
  monkey.scale = 0.1
  
  ground = createSprite (100,394,1200,10)
  
  ground.velocityX = -2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
  background("lightblue");
  createEdgeSprites();

  if(keyDown("space") && monkey.y >=150) {
      monkey.velocityY = -12;
     
    }
   monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  monkey.collide(ground);
  food()
  stones();
  drawSprites();
}

function food()
{
if (frameCount % 80 === 0) {
    var banana = createSprite(100,100,10,10);
    banana.y = Math.round(random(300,300));
    banana.addImage(banana_image);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = banana.depth;
    banana.depth = banana.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

 function stones()
{
if(frameCount % 300===0)
 {
obstacle = createSprite(600,350,10,10);
  obstacle.addImage(obstacle_image);
  obstacle.scale = 0.20;
  obstacle.velocityX = -3
  obstacle.lifetime = 200;
  obstacleGroup.add(obstacle);
 }

}
 





