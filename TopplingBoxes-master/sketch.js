const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var slingShot;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1600,20)

    box1 = new Box(700,730,70,70);
    box2 = new Box(920,730,70,70);
    pig1 = new Pig(810,750,50,50)
    log1 = new Log(810,660,300,PI/2)
    box3 = new Box(700,640,70,70);
    box4 = new Box(920,640,70,70);
    pig2 = new Pig(810,620,50,50)
    log2 = new Log(810,580,300,PI/2)
    box5 = new Box(810,560,70,70)
    log3 = new Log(740,520,150,PI/7)
    log4 = new Log(870,520,150,-PI/7)
    bird = new Bird(200,0,70);
    slingShot = new Rope(bird.body,{x:800, y:15});
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    slingShot.display()
}