var paper;
var ground;
var dustbin, dustbin2, dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,600,20);
	ground = new Ground(750,650,1500,20);
	dustbin = new DustBin(1150,630,300,20);
	dustbin2 = new DustBin(1310,565,20,150);
	dustbin3 = new DustBin(1000,565,20,150);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-85});

	}
}



