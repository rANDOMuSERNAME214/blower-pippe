const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world

 ball = new Ball(40,40,40,40)

  button = createButton("Click to Blow")
  button.position(width/2,height-100)
  button.mousePressed(blow)
}

function draw() {
   background(0,0,0);  
  Engine.update(engine)
  ball.display()
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:0})
  console.log("Button Clicked")
}