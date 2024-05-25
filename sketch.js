const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var ball2=[];


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {//configuraciones 


  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
  
  angle = 25;
  
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180,110,130,100,angle);

  //que es und bucle ep 1
  for(var i=300;i<=330;i=i+2){
    console.log(i);
    console.log('no estoy en python y ya se que es un bucle si esto no funciona me reprueban');
    }
    
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
  
  
  rect(ground.position.x, ground.position.y, width * 2, 1);

  push();
  imageMode(CENTER);

  image(towerImage,tower.position.x, tower.position.y, 160, 310);

  pop();  

  for(var i=0;i<ball2.length;i++){
    showCannonBalls(balls[i]);
  }

  cannon.display();

}

function keyReleased(){
  if (keyCode===DOWN_ARROW){
    ball.shoot();
    
    
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var ball = new Ball(cannon.x, cannon.y);
    ball.trajectory=[];
    Matter.Body.setAngle(ball.body,cannon.angle);
    ball2.push(ball);

  }

}

function showCannonBalls(bala){
  if(bala){
    ball.display();
  }

}

 

//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pep//pepee//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe//pepe