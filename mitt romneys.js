class Romney {

    constructor(x, y, width, height) {
    
        var options={
          'restitution' : 0.7,
          'friction' : 0.6,
          'density':1.0
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("images/romney.PNG")
        World.add(world, this.body);
        
      }
    
      display() {
        push()
        if(this.body.speed < 3){
        
        var angle = this.body.angle;
        var pos = this.body.position;

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        
        pop()
      }
           else {
            World.remove(world, this.body)
            push();
            this.Visiblity = this.Visiblity - 5;
            image(this.image,0,0,this.width,this.height)
            pop();
           }
    
      }
      
    }