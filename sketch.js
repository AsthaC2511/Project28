
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,stone,ground,tree;
var slingshot,mongo1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload()
{
  boy=loadImage("Plucking_mangoes/boy.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone=new Stone(150,520,50);
    ground=new Ground(700,690,1400,10);
	tree=new Tree(1000,350,700,700);
	mango1=new Mango(1000,200,50,50);
	mango2=new Mango(800,280,60,60);
	mango3=new Mango(1100,150,70,70);
	mango4=new Mango(880,240,40,40);
	mango5=new Mango(950,120,80,80);
	mango6=new Mango(1150,250,60,60);
	mango7=new Mango(1250,270,70,70);

  slingshot= new Slingshot(stone.body,{x:150,y:520});

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(225);

  image(boy,100,460,300,300);

  
  
  

 
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  slingshot.display(); 
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  
  drawSprites();
 
}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

    slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      Matter.Body.setPosition(stone.body,{x:150,y:520})
     slingshot.attach(stone.body);
  }
}

function detectCollision(stone,mango){
  mangoBodyPosition=mango.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     if(distance<=mango.r+stone.r)
     {
       Matter.Body.setStatic(mango.body,false);
     }
}


