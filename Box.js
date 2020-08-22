class Box  {
    constructor(x,y){
      box = new Box(200,200,20,20);
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;

  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
      }
    
    }
  }
  