const Engine = Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies

var engine,world,obj1;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
 box1 = new Box(200,10,50,50)
 box2 = new Box(350,50,30,30);

console.log(obj1);
  
}

function draw() {
  Engine.update(engine);
  background(255,255,255); 
  background("orange");  

  box1.display();
  box2.display();
  



}