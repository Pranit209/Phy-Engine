const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,ball
function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world=engine.world;
   var ground_options={
     isStatic:true
   }
  ground=Bodies.rectangle(400,390,800,50,ground_options);
  World.add(world,ground)
  var ballOptions={
    restitution:1.0
  }
  ball=Bodies.circle(400,100,30,ballOptions)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30)
}