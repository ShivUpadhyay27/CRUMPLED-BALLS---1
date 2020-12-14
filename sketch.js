const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  Paper,paperIMG,groundIMG ;
var box1,box2,box3 ;

function preload(){
	paperIMG=loadImage("Paper.png") 
    groundIMG=loadImage("Ground.png") 
}

function setup() {
	createCanvas(800, 700);

    paper = createSprite(50,50) ;
    paper.addImage(paperIMG) ;

    ground = createSprite(50,50) ;
    ground.addImage(groundIMG) ;

	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(650,550,200,20);
    box1.shapeColor = "red" ;

    box2 = createSprite(540,510,20,100) ;
    box2.shapeColor = "red" ;
    
    box3 = createSprite(760,510,20,100) ;
    box3.shapeColor = "red" ;

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(0);
  console.log(box1.body.position.x) ;
  console.log(box1.body.position.y) ;
  ground.display() ;
  paper.display() ;

  drawSprites();
}

function keyPreesed (){
   if(keyCode === UP_ARROW) {
	  Matter.Body.applyEorce(paperObjest.body,paperObjest.body.position,{x : 85 , y : -85}) 
   }
}