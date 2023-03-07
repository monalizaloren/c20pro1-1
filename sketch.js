// Engine é usado para criar o motor de física.
//● World é usado para criar o mundo físico e adicionar
//objetos a ele.
//● Bodies é usado para criar os objetos físicos que
//habitam o mundo
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  //crie uma tela, um motor e um mundo
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    // restituição significa o quão saltitante (ou elástica) a bola
//é, quanto maior a restituição, mais saltitante a bola será.
//Considerando que frictionAir é o atrito do ar, quanto
//maior o atrito, mais lento será o movimento da bola no
//mundo.

    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  var ops={
    isStatic:true
  };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall = Bodies.rectangle(300, 150, 70, 10, ground_options);
  World.add(world,wall);
  
  wedge = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  //função draw() está executando todos os quadros,
  //portanto, precisamos atualizar o motor para refletir as
  //alterações, bem como todos os quadros.
  //Para fazer isso, vamos escrever Engine.update(engine).
  Engine.update(engine);
  
  Matter.Body.rotate(wedge,angle)
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 


  rect(wall.position.x,wall.position.y,70,20);

  
  
}

