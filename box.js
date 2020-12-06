class box{
  constructor(x,y){
  var options={
  isStatic:false,
  restitution : 0.2,
  friction : 1.2,
   density : 0.01
  
  }
  
  this.body=Bodies.rectangle(x,y,45,55,options)
  this.width=45
  this.height=55
  World.add(world,this.body)
 }
  
  display(){
  push()
  rectMode(CENTER)
  stroke("white")
  strokeWeight(4)
  rect(this.body.position.x,this.body.position.y,this.width,this.height)
  pop()
  
    }
  }