let Brick;
let gravity;
let force;
let freeze;
let Hurdle;
let hurdleGap;
let score;
let gameOver;
function setup() {
   noStroke();
   createCanvas(340,540).center('horizontal');
   Brick = new brick();
   Hurdle = [];
   Hurdle.push(new hurdle());
   gravity = createVector(0,0.2);
   force = createVector(0,0);
   hurdleGap = 200;
   freeze = true;
   score = 0;
   gameOver = false;

}



function keyPressed() {
  if(gameOver == false)
   freeze = false;
  else
    setup();
  force = createVector(0,-10);
  Brick.applyForce(force);
}

function mousePressed() {
  if(gameOver == false)
   freeze = false;
  else
    setup();
  force = createVector(0,-10);
  Brick.applyForce(force);
}


function draw() {
	background(65);
	Brick.applyForce(gravity);
  if(freeze == false)
	Brick.update();
	Brick.show();

   //Delete Hurdles which are out of Canvas   
  if(Hurdle[0].pos.x<-20)
      Hurdle.splice(0,1);

 	for(var i=0;i<Hurdle.length;i++){
    if(freeze == false)
 		Hurdle[i].update();
 		Hurdle[i].show();
   }
   	
  //Add New Hurdle
  if(Hurdle[Hurdle.length - 1].pos.x < width - hurdleGap){
 		Hurdle.push(new hurdle());
 	}
 
  //Scoring
  if(floor(Hurdle[0].pos.x+Hurdle[0].width+15-width/3) == -2)
    ++score;
 
 	//Game Over
  if(Brick.collide(Hurdle[0])==true || Brick.pos.y > height - 15)
 		{freeze = true;gameOver = true}
  
  if(freeze == true && gameOver == false){
     textSize(32);
     fill(255)
     text("Press Any Key", 10, 32);  
  }
  else{
    textSize(32);
    fill(255)
    text(score, 10, 32);
  }
}
