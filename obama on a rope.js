class Obama {

    constructor(x, y, width, height) {

        var options={
          'restitution' : 0.7,
          'friction' : 0.6,
          'density' : 1.0
         }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/obamium.jpg")
        World.add(world, this.body);

      }

      display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();

      }
      
}
