let w=500;
let cX;
let cY;
let bX;
let bY;
function setup() {
  createCanvas(800,600);
  background(65);
  stroke(255);
  noFill();
  rectMode(CENTER);
  rect(width/2,height/2,w,w);
  cX = 150;
  cY = 50;
  bX = width-cX;
  bY = height-cY;

}

function draw() {
  	divide();
}

function divide(){
	var X = bX+cX;
	var Y = bY+cY;
	X/=2;
	Y/=2; 
	line(X,cY,X,Y)
}