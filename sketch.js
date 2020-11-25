var PLAY=1;
var END=0;
var gameState=PLAY;

var tower,backgroundImg;
  var ghost,ghostImg;
  var door,doorImg;
var climber,climberImg;
var invisibleobj,invisibleobjgroup;
var doorsgroup;
var climbergroup;
var sound;


  function preload(){
    backgroundImg=loadImage("tower.png");
    ghostImg=loadImage("ghost-standing.png");

    doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
    
    sound=loadSound("spooky.wav");
    
  }
  function setup(){
    createCanvas(600,600);
    tower=createSprite(300,300);
    tower.addImage("tower",backgroundImg);
    tower.velocityY=5;

    ghost=createSprite(300,300);
    ghost.addImage("ghost",ghostImg);
    ghost.scale=0.5;


    
    
doorsgroup=createGroup();
climbergroup=createGroup();
invisibleobjgroup=createGroup();
sound.loop(); 
  }
  function draw(){
  background("white");
    
    
    if(gameState===PLAY){

    
    

   if(tower.y>400){
     tower.y=300;


   }
    doormaking();

if(keyDown("right_arrow")){
  ghost.x=ghost.x+3;
  
}
    if(keyDown("left_arrow")){
      ghost.x=ghost.x-3;
    }
    if (keyDown("space")){
     ghost.velocityY=-5;      
      
      
    }
    
    if(ghost.isTouching(climbergroup)){
      ghost.velocityY=0;
      
    }
    if(ghost.isTouching(invisibleobjgroup)||ghost.y>600){
      ghost.destroy();
      gameState=END;
      
    }
   // ghost.collide(climber)
//ghost.velocityY=ghost.veloctiyY+0.8;
    ghost.velocityY=ghost.velocityY+0.8;
    
   
    
    drawSprites();
  }

 else if(gameState===END){
     
   background("black");
    textSize(30);
   fill("black");
      stroke("yellow");
      text("GameOver",250,250)
      
    }}
  function doormaking(){

    if(frameCount%240===0){

      door=createSprite(200,-50);
       climber=createSprite(200,10);
      invisibleobj=createSprite(200,15);
       invisibleobj.width=climber.width;
       invisibleobj.height=2;
       door.x=Math.round(random(150,350)) ;
         climber.x=door.x;
      invisibleobj.x=door.x;
      door.addImage("door",doorImg);
      climber.addImage("climber",climberImg);
      door.velocityY=1;
      climber.velocityY=1;
      invisibleobj.velocityY=1;
  
    
      
door.lifetime=600;
      climber.lifetime=600;
      invisibleobj.lifetime=600;

     
      

      
      climbergroup.add(climber);
      doorsgroup.add(door);
      invisibleobjgroup.add(invisibleobj);
      
      door.depth=ghost.depth;
      ghost.depth+=1;
      
    
      //invisibleobj.debug=true;
      
      invisibleobj.visible=false;
      }





  }


  
  
 
