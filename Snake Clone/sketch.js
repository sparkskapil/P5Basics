let Snake; 
let food;
function setup() {
  createCanvas(600,600);
  Snake = new snake();
  Snake.eat();
  Snake.eat();
  Snake.eat();
  food = genFood();
  showFood();
}

function showFood(){
  Snake.drawCell(food);
}

function genFood(){
	var f = createVector(floor(random(Snake.R)),floor(random(Snake.R)));
	f.x = map(f.x,0,Snake.R,0,width);
	f.y = map(f.y,0,Snake.R,0,height);
	 while(Snake.inSnake(f)){
  		f = genFood();
  }
    return f.copy();
}

function draw() {
  background(51);
  showFood()
  
  if(frameCount%10==0){
  	Snake.update();
  	if(Snake.isDead()){
  		console.log("GameOver");
  		noLoop();
  	}	
  }
  Snake.show();

  if(Snake.eatFood(food)){
  	food = genFood(); 
  }
  // console.log(Snake.body);
  // console.log(Snake.pos);
  // noLoop();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	    Snake.moveUp();
	    Snake.update();
	}else if (keyCode === DOWN_ARROW) {
	    Snake.moveDown();
	    Snake.update();
	}else if (keyCode === LEFT_ARROW) {
	    Snake.moveLeft();
	    Snake.update();
	}else if (keyCode === RIGHT_ARROW) {
	    Snake.moveRight();
	    Snake.update();
	} 
}

