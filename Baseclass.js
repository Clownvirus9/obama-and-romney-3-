class Baseclass {

    constructor(x, y, width, height) {
    
        var options={
          'restitution' : 0.7,
          'friction' : 0.6,
          'isStatic' : false
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/romney.PNG")
        World.add(world, this.body);
        this.Visiblity = 255;
      }
    
      display() {
        if(this.body.speed < 3){
        var angle = this.body.angle;
        var position = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
           }
           else {
            World.remove(world, this.body)
            push();
            this.Visiblity = this.Visiblity - 5;
            image(this.image,this.body.position.x,this.body.position.y,50,10)
            pop();
           }
    
      }
      
    }
    