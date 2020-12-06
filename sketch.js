const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
 createCanvas(1800, 700);

 engine = Engine.create();
 world = engine.world;

 ground1=new ground(700,550,400,20)

 polygon1=new polygon(200,500,30)

 chain1=new chain(polygon1.body,{x:200,y:500})
//level 1
 b1=new box(550,475)
 b2=new box(600,475)
 b3=new box(650,475)
 b4=new box(700,475)
 b5=new box(750,475)
 b6=new box(800,475)
 b7=new box(850,475)
//level 2
 b8=new box(600,360)
 b9=new box(650,360)
 b10=new box(700,360)
 b11=new box(750,360)
 b12=new box(800,360)
//level 3
 b13=new box(650,250)
 b14=new box(700,250)
 b15=new box(750,250)
//top block
 b16=new box(700,150)

 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  push()
  textSize(30)
  fill("cyan")
  stroke("white")
  strokeWeight(3)
  text("DRAG THE HEXAGONAL STONE AND RELEASE IT, TO LAUNCH IT TOWARDS THE BLOCKS",50,200)
  pop()

  ground1.display()

  fill(255, 0, 110)
  b1.display();
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  
  fill(255, 114, 182)
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  
  fill(255, 161, 226)
  b15.display()
  b13.display()
  b14.display()
  
  fill(255, 219, 235)
  b16.display()
  
  polygon1.display()
  chain1.display()

  drawSprites();
}

 function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
    }

 function mouseReleased(){
 chain1.fly()
   }

 function keyPressed(){
 if (keyCode==="space"){
  chain1.attach()
    }
  }