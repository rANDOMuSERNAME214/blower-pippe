class Ball {
  constructor(x, y, width,height) {
    var options = {
      restitution: 0.8,
    };
    
    this.body = Bodies.rectangle(x, y,width,height, options);
    width=this.width
    height=this.height
  
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("yellow");
    ellipseMode(CENTER);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}