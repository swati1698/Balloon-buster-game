var background,bow,arrow;
var score;
var backgroundimage, bowimage,blueballoon,greenballoon,redballoon,pinkballoon,arrowimage,redgroup,pinkgroup,arrowgroup,greengroup,bluegroup,blue_balloon,green_balloon,red_balloon,pink_balloon;

function preload(){
  
      //loading images
      backgroundimage=loadImage("background0.png");
      bowimage=loadImage("bow0.png");
      blueballoon=loadImage("blue_balloon0.png");
      greenballoon=loadImage("green_balloon0.png");
      redballoon=loadImage("red_balloon0.png");
      pinkballoon=loadImage("pink_balloon0.png");
      arrowimage=loadImage("arrow0.png");

}

function setup() {

      //create a canvas
      createCanvas(600, 600);

      //creating a background
      background=createSprite(0,0,600,600);
      background.addImage("background",backgroundimage);
      background.scale=2.5;

      //creating a bow
      bow=createSprite(480,250,20,50);
      bow.addImage("bow",bowimage);
      bow.scale=1.2;
    
      redgroup=new Group();
      greengroup=new Group();
      bluegroup=new Group();
      pinkgroup=new Group();
      arrowgroup=new Group();
  
      score=0;
  
}

function draw() {
  
      //background velocity
      background.velocityX=-3;

      //resetting the background
      if(background.x<0)
        {
            background.x=background.width/2;
        }

      if(keyDown("space"))
      {
          
          arrow_func();
          
      }
      //moving the bow with the help of mouse
      bow.y=World.mouseY;
  
      if(arrowgroup.isTouching(redgroup))
      {
        redgroup.destroyEach();
        arrowgroup.destroyEach();
        score=score+1;
      }    
  
      if(arrowgroup.isTouching(greengroup))
      {
        greengroup.destroyEach();
        arrowgroup.destroyEach();
        score=score+2;
      }    
        
     if(arrowgroup.isTouching(bluegroup))
      {
        bluegroup.destroyEach();
        arrowgroup.destroyEach();
        score=score+3;
      }    
  
    if(arrowgroup.isTouching(pinkgroup))
      {
        pinkgroup.destroyEach();
        arrowgroup.destroyEach();
        score=score+4;
      }  
  
  
      var rand=Math.round(random(1,4));
  
      if(frameCount%70===0)
      {

          if(rand===1) {
                red1();
          }
          else if(rand===2) {
                blue1();
          }
          else if(rand===3) {
                pink1();
          }
          else if(rand===4) {
                green1();
          }
      }
      //displaying the sprites
      drawSprites();
      
      fill("black");  
      textSize(20);
      text("score: "+score,50,50);
}

function arrow_func()
{
      arrow=createSprite(480,250,50,20);
      arrow.addImage(arrowimage);
      arrow.scale=0.3;
      arrow.velocityX=-6;
      arrow.lifetime=130;
      arrow.y=bow.y;
      arrowgroup.add(arrow);
}

function red1()
{
      red_balloon=createSprite(0,Math.round(random(50,500)),1,1);
      red_balloon.addImage(redballoon);
      red_balloon.scale=0.1;
      red_balloon.velocityX=4;
      red_balloon.lifetime=150;
      redgroup.add(red_balloon);
  
}

function green1()
{
      green_balloon=createSprite(0,Math.round(random(50,500)),1,1);
      green_balloon.addImage(greenballoon);
      green_balloon.scale=0.1;
      green_balloon.velocityX=4;
      green_balloon.lifetime=150;
      greengroup.add(green_balloon);
}

function pink1()
{
      pink_balloon=createSprite(0,Math.round(random(50,500)),1,1);
      pink_balloon.addImage(pinkballoon);
      pink_balloon.scale=1.3;
      pink_balloon.velocityX=4;
      pink_balloon.lifetime=150;
      pinkgroup.add(pink_balloon);

}

function blue1()
{
  
      blue_balloon=createSprite(0,Math.round(random(50,500)),1,1);
      blue_balloon.addImage(blueballoon);
      blue_balloon.scale=0.1;
      blue_balloon.velocityX=4;
      blue_balloon.lifetime=150;
      bluegroup.add(blue_balloon);

}