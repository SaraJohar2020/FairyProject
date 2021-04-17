var starImg, fairyImg, bgImg;
var star, starBody;
var fairy, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	
}

function setup() {
	createCanvas(800, 750);

	
     fairy = createSprite(130,520);
	 fairy.addAnimation("fairyflying", fairyImg);
	 fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairyVoice.play();

}


function draw() {
  background(bgImg);

 
     if(keyDown("right")) {
	   fairy.x = fairy.x + 5;
   }
 
 
 
  if(keyDown("left")) {
	 fairy.x = fairy.x - 5;
 }
 
 
 
 if(starBody.position.y > 470) {
	 Matter.Body.setStatic(starBody, true);
 }
 
 
 
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  

  

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	
	
}
