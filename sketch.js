//Welcome to game of rocket to the moon

//declaring the variables
var rocket,rocketimg;
var backimg,back;
var aleinGroup,alien1,alien2,alien3,alien4;
var gamestate="serve";
var score=0;
var bulletimg,bulletgroup;
var d = 0;
var asteroid,asteroidimg;
var checkPointSound;
var shoot;
var die;
var startbutton;
var background2;
var asteroidgroup,backmilky;
var score1 = 0;
var alienlevel;


function preload(){
  
  //loading the image for the rocket
  rocketimg = loadImage("./Assets/Rocket.png");
  
  //loading the image for the background
  backimg = loadImage("./Assets/Wallpaper.png");
  
  //loading the images for the aliens
  alien1 = loadImage("./Assets/alien 1.png");
  alien2 = loadImage("./Assets/Alien blue.png");
  alien3 = loadImage("./Assets/alienPink.png");
  alien4 = loadImage("./Assets/alienYellow.png");
  
  //loading the image for the bullet
  bulletimg = loadImage("./Assets/bullet.png");
  
  //loading the image for the moon
  asteroidimg = loadImage("./Assets/Asteroid.gif");

  background2 = loadImage("./Assets/Milky-Way.jpg");
  
  //loading the sound
 
  
  
}

function setup() {
  
  //creating the canvas
  createCanvas(600,600);
  
  //adding the background image
  back = createSprite(300,300);
  back.addImage(backimg);
  back.scale=1.2;
  back.velocityY = 10;
  
  
  //creating the rocket
  rocket = createSprite(500,500);
  rocket.addImage(rocketimg); 
  rocket.scale = 0.3;
  
  
 
 
  
  //creating the alien group
  aleinGroup = new Group();
  
  //creating the bullet group 
  bulletgroup = new Group();

  asteroidgroup = new Group();
  
  

}

function draw() {
  background(0);
  
  if(gamestate === "serve"){
    
    fill("lightblue");
    textSize(30);
    text("🚀 Travel To The Andromeda Galaxy 🌙👽",10,50);
    textSize(20);
    text("Instructions :" ,250,100);
    text("Try Your Best To Cross The Milky Way Galaxy🌙",80,150);
    text("You Need To Travel 500 light-years To Cross The Milkyway Galaxy !!",5,200);
    text("Press Space Key To Shoot The Aliens 🔫",100,300);
    text("Navigate Your Rocket With Your Mouse",100,350);
    text("Be Aware Of Aliens.👾👽",200,250);
    text("Get Ready To Play The Game 🎮🎮 !! All The Best",60,400);
    textSize(18)
    text("Press Space To Start Your Journey To Reach The Andromeda Galaxy",20,500);
    
    
    if(keyDown("space") || touches.length > 0){
      
      gamestate = "play";
      touches = [];
    }
  }
  
  
  if(gamestate === "play"){
    score = score + Math.round(getFrameRate()/60);
    
    rocket.x = mouseX;

   
  
  
  if(back.y>400){
    back.y=height/2;
  }
   //if(keyDown("left")){
    //rocket.x= rocket.x -3;
     
  //}
  //if(keyDown("right")){
    //rocket.x= rocket.x +3;
    
  //}
    
   if(keyWentDown("space")||touches.length > 0){
     spawnbullet();
    
     touches = [];
   } 
    
  
  
  
  
  
  aliens();
  spawnasteroid();
  
  
  if(rocket.isTouching(aleinGroup) || rocket.y>600 || rocket.x>600 || rocket.x<0 || rocket.y<0 ){
    gamestate = "end";
    aleinGroup.destroyEach();
    rocket.destroy();
    bulletgroup.destroyEach();
    
  }
  if(bulletgroup.isTouching(asteroidgroup)){
    asteroidgroup.destroyEach();

  }
  if(rocket.isTouching(asteroidgroup)){
    score = score-100;
    asteroidgroup.destroyEach();
  }
  if(score <= 0){
    gamestate = "end"
  }
  
    if(bulletgroup.isTouching(aleinGroup)){
     aleinGroup.destroyEach(); 
      d = d+1;
}
    if(aleinGroup.y>600){
      gamestate = "end";
    }
   
    if(score>=500){
      gamestate = "level1crossed";
    }
    
    
    
    
    
  
  
  
  
 drawSprites();
  stroke("yellow");  
  fill("yellow");  
  textSize(14);
  text("Distance Travelled(in light years) : "+ score, 300,50); 
  text("Aliens Destroyed: "+d,350,70);  
  
  }
  
  
  else if(gamestate === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Oops, Aliens Got You !! Game Over 💥💥",20,300);
    textSize(20);
    text("Distance Travelled : "+score,300,50);
    
  }
  else if(gamestate === "win"){
    stroke("yellow");
    fill("yellow");
    textSize(20);
    text("You Have Reached The Andromeda Galaxy 🚀🌙🏆",75,300);
    textSize(20);
    text("Congratulations on reaching your goal",150,350)
    text("Distance Travelled : "+score1,300,50);
    
  }
  else if(gamestate === "level1crossed"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("You Have Crossed The Milkyway Galaxy 🚀🌙🏆",10,300);
    
    textSize(20);
    text("You Have Unlocked Level 2 - Journey to Andromeda",50,350);
    text("Press Down Arrow Key to Play Level 2",140,400);
    text("You will have to travel 10000 light years to reach the Andromeda",10,450);

    
    if(keyCode === DOWN_ARROW){
      gamestate = "level2"
    }
   

   

    //startbutton = createImg("./Assets/Start.png");
    //startbutton.position(235,500);
    //startbutton.size(150,80);
    //startbutton.mouseClicked(level2progress);



    

    text("Distance Travelled : "+score,300,50);
    
  }
  if(gamestate === "level2"){
    background(background2);
    
    score1 = score1 + Math.round(1*getFrameRate()/60);

    rocket.x = mouseX;

   
  
  
  if(back.y>400){
    back.y=height/2;
  }
   //if(keyDown("left")){
    //rocket.x= rocket.x -3;
     
  //}
  //if(keyDown("right")){
    //rocket.x= rocket.x +3;
    
  //}
    
   if(keyWentDown("space")){
     spawnbullet1();
    
     
   } 
    
  
  
  
  
  
  aliens1();
  spawnasteroid();
  
  
  if(rocket.isTouching(aleinGroup) || rocket.y>600 || rocket.x>600 || rocket.x<0 || rocket.y<0 ){
    gamestate = "end";
    aleinGroup.destroyEach();
    rocket.destroy();
    bulletgroup.destroyEach();
    
  }

  
    if(bulletgroup.isTouching(aleinGroup)){
     aleinGroup.destroyEach(); 
      d = d+1;
    
}
if(bulletgroup.isTouching(asteroidgroup)){
  asteroidgroup.destroyEach();

}
if(rocket.isTouching(asteroidgroup)){
  score1 = score1-10;
  asteroidgroup.destroyEach();
  
}
if(score1 <= 0){
  gamestate = "end"
}
asteroidgroup.collide(rocket);

    if(aleinGroup.y>600){
      gamestate = "end";
    }
    if(score1 === 10000){
      gamestate = "win";
    }
    drawSprites();
    stroke("yellow");  
  fill("yellow");  
  textSize(14);
  text("Distance Travelled(in light years) : "+ score1, 300,50); 
  text("Aliens Destroyed: "+d,350,70);  
    
    
  }
  
  
  
  
  
  
}

function spawnbullet(){
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletimg);
  bullet.y = 460;
  bullet.x=rocket.x;
  bullet.velocityY = -4;
  bullet.lifetime = 100;
  bullet.scale = 0.2;
  bullet.lifetime = 200;
  bulletgroup.add(bullet);
}
function spawnbullet1(){
  var bullet1= createSprite(100, 100, 60, 10);
  bullet1.addImage(bulletimg);
  bullet1.y = 460;
  bullet1.x=rocket.x;
  bullet1.velocityY = -4;
  bullet1.lifetime = 100;
  bullet1.scale = 0.2;
  bullet1.lifetime = 200;
  bulletgroup.add(bullet1);
}

function spawnasteroid(){
  if(frameCount%120 === 0){
  asteroid = createSprite(300,-50,20,20);
  asteroid.addImage(asteroidimg);
  asteroid.rotation = -45;
  asteroid.x = Math.round(random(30,570));
  asteroid.velocityY = (6 + 3*score/100);
  asteroid.lifetime = 200;
  asteroid.scale = 0.3 

  asteroidgroup.add(asteroid);
  }
}

function aliens(){
  if(frameCount%120 === 0){
   var alien = createSprite(600,-50,40,10);
    alien.x = Math.round(random(30,570));
    
    alien.velocityY = (6 + 3*score/100);
    alien.lifetime = 200;
    
    aleinGroup.add(alien);
    
    
  
  var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: alien.addImage(alien1);
              break;
       case 2: alien.addImage(alien2);
              break;
      case 3: alien.addImage(alien3);
              break;
      case 4: alien.addImage(alien4);
              break;
              
      default: break;
    
    
      
    }
    
    
  }
  
}
function aliens1(){
  if(frameCount%120 === 0){
   var alienlevel = createSprite(600,-50,40,10);
    alienlevel.x = Math.round(random(30,570));
    
    alienlevel.velocityY = (6 + 3*score1/100);
    alienlevel.lifetime = 200;
    
    aleinGroup.add(alienlevel);
    
    
  
  var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: alienlevel.addImage(alien1);
              break;
       case 2: alienlevel.addImage(alien2);
              break;
      case 3: alienlevel.addImage(alien3);
              break;
      case 4: alienlevel.addImage(alien4);
              break;
              
      default: break;
    
    
      
    }
    
    
  }
  
}

