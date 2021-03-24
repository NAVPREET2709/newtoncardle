
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ball1, ball2 , ball3 , ball4 , ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ball1=new ball(370,450,60);

  roof = new roofy(490,150,350,30)

  ball2=new ball(430,450,60);

  ball3=new ball(490,450,60);

  ball4=new ball(550,450,60);

  ball5=new ball(610,450,60);
 ball1Diameter=40;
 ball2Diameter=40;
 ball3Diameter=40;
 ball5Diameter=40;
 ball4Diameter=40;
  rope1=new rope(ball1.body,roof.body,-ball1Diameter*2, 0)
  rope2=new rope(ball2.body,roof.body,-ball2Diameter*1, 0)
  rope3=new rope(ball3.body,roof.body,-ball3Diameter*0, 0)
  rope4=new rope(ball4.body,roof.body,ball4Diameter*1, 0)
  rope5=new rope(ball5.body,roof.body,ball5Diameter*2, 0)



    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    });
  

	Engine.run(engine);
  
}


function draw() {
  background("yellow")
  rectMode(CENTER);
  ball1.display();
  roof.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

  }
}



