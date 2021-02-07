const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var rom1, rom2, rom3,rom4, rom5, rom6, rom7;
var rom8, rom9,rom10, rom11, rom12, rom13, rom14;
var rom15, rom16, rom17, rom18, rom19, rom20, rom21, rom22;

var ground1, ground2, ground3;

var chain;
var obama;
var ball;
var obamaIMG;
var seal;
var bg;
var backgroundImg;

function preload() {
obamaIMG = loadImage("images/obamium.jpg");
}

function setup() {

  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world

  
  strokeWeight(2);

  rom1 = new Romney(600, 260, 30, 40);
  rom2 = new Romney(570, 260, 30, 40);
  rom3 = new Romney(540, 260, 30, 40);
  rom4 = new Romney(630, 260, 30, 40);
  rom5 = new Romney(660, 260, 30, 40);


  rom6 = new Romney(585, 220, 30, 40);
  rom7 = new Romney(555, 220, 30, 40);
  rom8 = new Romney(615, 220, 30, 40);
  rom9 = new Romney(645, 220, 30, 40);


  rom10 = new Romney(600, 170, 30, 40);
  rom11 = new Romney(570, 180, 30, 40);
  rom12 = new Romney(630, 180, 30, 40);


  rom13 = new Romney(600, 140, 30, 40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 600, 1500, 20);


  rom14 = new Romney(900, 170, 30, 40);
  rom15 = new Romney(930, 170, 30, 40);
  rom16 = new Romney(870, 170, 30, 40);
  rom17 = new Romney(840, 170, 30, 40);
  rom18 = new Romney(960, 170, 30, 40);


  rom19= new Romney(900, 140, 30, 40);
  rom20 = new Romney(930, 140, 30, 40);
  rom21 = new Romney(870, 140, 30, 40);
  rom22 = new Romney(900, 110, 30, 40);

  obama = new Obama(150, 160, 30, 30);


  chain = new Chain(obama.body,{x:150, y:160});

}

function draw() {

  if(backgroundImg){
    background(backgroundImg);
}

  Engine.update(engine);

  push();
  stroke("beige");
  strokeWeight(4);
  textSize(30);
  text("Drag Obama and release him to mitt romneys clones and ensure democratic victory", 80, 50);
  pop();

  
  rom1.display();
  rom2.display();
  rom3.display();
  rom4.display();
  rom5.display();

  
  rom6.display();
  rom7.display();
  rom8.display();
  rom9.display();

  
  rom10.display();
  rom11.display();
  rom12.display();

  
  rom13.display();

  
  rom14.display();
  rom15.display();
  rom16.display();
  rom17.display();
  rom18.display();

 
  rom19.display();
  rom20.display();
  rom21.display();

  
  rom22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  chain.display();

  obama.display();
}


function mouseDragged() {

  Matter.Body.setPosition(obama.body, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}


function keyPressed() {

	if(keyCode === 32) {
		chain.attach(obama.body);
  }
  
}

async function getBackgroundImg (){

  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(responseJSON);
    if(hour>= 06 && hour<= 18){
      bg = "images/Presidential-seal-631.jpg";
    }

    else{
       bg = "images/nationalseal_large.jpg";
    }

    backgroundImg = loadImage(bg);

    
}