const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var santa, santaSprite, santaAnimation;
var k=0;
var backgroundImg;
var land1, land2;
var starImg;

var woods = [];
var stars = [];

var s = 0;
var score = 0;

function preload(){
	santaAnimation = loadAnimation("images/tile000.png", "images/tile001.png", "images/tile002.png", "images/tile003.png",
  "images/tile004.png","images/tile005.png", "images/tile006.png", "images/tile007.png", "images/tile008.png", "images/tile009.png",
  "images/tile010.png", "images/tile011.png", "images/tile012.png", "images/tile013.png", "images/tile014.png", "images/tile015.png");
   
	backgroundImg = loadImage("images/bg.jpg");
	starImg = loadImage("images/star.png");
}

function setup(){
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	for (var j = 290;  j<width-250; j = j+180){
		woods.push(new Wood(j,height/2+70));
		stars.push(createSprite(j,height/2+50));
		stars[s].addImage(starImg);
		stars[s].debug = false;
		stars[s].setCollider("rectangle",0,0,50,50);
		stars[s].scale = 0.25;
		s++;
	}

	santa = new Santa(50,height/2-50,40,50);
	santaSprite = createSprite(20,300,40,50);
	santaSprite.addAnimation("santa",santaAnimation);
	santaSprite.debug= false;
	santaSprite.setCollider("rectangle",0,0,100,110);

	land1 = new Land(100,height/2+50);
	land2 = new Land(width-100,height/2+50);


	
}

function draw(){
	background(backgroundImg);
	
	Engine.update(engine);
	
	textSize(25);
	text("Press 'space' to make the santa move", 100,100);

	textSize(40);
	fill("black");
	text("Score: "+score,width/2+200,100); 
	
	for(var i = 0; i<woods.length; i++){
		woods[i].display();
	}


	if (frameCount%100 === 0 && k<woods.length){
		Matter.Body.setStatic(woods[k].body,false);
		k=k+1;
	}

	santaSprite.x = santa.body.position.x;
	santaSprite.y = santa.body.position.y;

	land1.display();
	land2.display();

	for(var i=0; i<stars.length; i++){
		if(santaSprite.isTouching(stars[i])){
			stars[i].destroy(); 
			score = score+10; 
		}
	}

	if(santa.body.position.y>height && santa.body.position.x<width-250){
		textSize(50);
		fill("green");
		text("YOU LOST",width/2-100,height/2-100);
	}

	if(santa.body.position.x>width-250 && santa.body.position.y<height){
		textSize(50);
		fill("green");
		text("YOU WIN",width/2-100,height/2-100);
	}

	 
	drawSprites();
	
	
}

function keyPressed(){
	
	if(keyCode === 32){		
		Matter.Body.applyForce(santa.body,santa.body.position,{x:20,y:-50});
	}
}

