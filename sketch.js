const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=0
var wedge2

function setup() {
  createCanvas(600,600);

   engine = Engine.create();
   world = engine.world;
   
   var ball_options = {
    restitution: 0.80,
    frictionAir:0,
	
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(300,390,1000,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(50,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  wedge = Bodies.rectangle(50,200,100,20,ground_options)

  World.add(world,wedge)

  ground2 = Bodies.rectangle(480,200,2,400,ground_options);
  World.add(world,ground2);

  ground3 = Bodies.rectangle(520,200,2,400,ground_options);
  World.add(world,ground3);
}

function draw() 
{
  background(0);
  Engine.update(engine);
  fill("red")
  ellipse(ball.position.x,ball.position.y,10);
  fill("yellow")
  rect(ground.position.x,ground.position.y,600,20);
  fill("yellow")
  rect(ground2.position.x,ground2.position.y,600,20);
  fill("yellow")
  rect(ground3.position.x,ground3.position.y,600,20);

  Matter.Body.rotate(wedge,angle)
  angle=angle+6.6
   push()
    translate(wedge.position.x,wedge.position.y)
     rotate(angle)
      rect(0,0,100,20)
       pop()






}


