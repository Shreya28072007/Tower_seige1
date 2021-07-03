const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
  stoneImage = loadImage("stone.png");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
    world = engine.world;

  ground1 = new Ground(590,500,350,10);
 //level1 1st ground
  box1 = new Box(480,480,40,50);
 box2 = new Box(520,480,40,50);
 box3 = new Box(560,480,40,50);
 box4 = new Box(600,480,40,50);
 box5 = new Box(640,480,40,50);
 box6 = new Box(680,480,40,50);
 box7 = new Box(720,480,40,50);
 //level 2 1st ground
 box8 = new Boxpink(520,480-25,40,50);
 box9 = new Boxpink(560,480-25,40,50);
 box10 = new Boxpink(600,480-25,40,50);
 box11 = new Boxpink(640,480-25,40,50);
 box12 = new Boxpink(680,480-25,40,50);
 //level 3 1st ground
 box13 = new Boxgreen(560,430,40,50);
 box14 = new Boxgreen(600,430,40,50);
 box15 = new Boxgreen(640,430,40,50);
 //level 4 1st ground
 box16 = new Boxgrey(600,401,40,50);

 //ground2
 ground2 = new Ground(1000,340,250,10);
 //1st level
 box17 = new Box(920,310,40,50);
 box18 = new Box(960,310,40,50);
 box19 = new Box(1000,310,40,50);
 box20 = new Box(1040,310,40,50);
 box21 = new Box(1080,310,40,50);
 //2nd level
 box22 = new Boxgreen(960,310-25,40,50);
 box23 = new Boxgreen(1000,310-25,40,50);
 box24 = new Boxgreen(1040,310-25,40,50);
 //3rd level
 box25 = new Boxpink(1000,260,40,50);

Stone = new stone(100,260,50,50,{isStatic:true});


slingshot = new Slingshot(Stone.body,{x:100, y:260});


}

function draw() {
  background(0);  
  text(mouseX+","+mouseY,mouseX,mouseY);
  Engine.update(engine);
  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  ground2.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();
  Stone.display();
  slingshot.display();



}

function mouseDragged(){

  Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

  slingshot.fly();
}