snake = function(){
	this.pos = createVector(width/2,height/2);
	this.vel = createVector(-10,0);
	this.R=10;
	this.body=[];
	this.dead = false;

	this.show = function(){
		//draw head
		this.drawCell(this.pos);

		//draw body
		for(var i=0;i<this.body.length;i++){
		this.drawCell(this.body[i]);
		}
	}

	this.drawCell=function(pt){
		noStroke();
		fill(255);
		rect(pt.x,pt.y,this.R,this.R);
	}

	this.update = function(){
		if(this.body.length>0){
			for(var i=this.body.length-2;i>=0;i--){
				this.body[i+1]=this.body[i].copy();
			}
			this.body[0]=this.pos.copy();
		}

		this.pos.add(this.vel);
	}
	
	this.eat=function(){
		for(var i=this.body.length-1;i>=0;i--){
				this.body[i+1]=this.body[i];
			}
		this.body[0]=this.pos.copy();

		this.pos.add(this.vel);
	}

	this.eatFood=function(food){
		if(this.pos.x == food.x && this.pos.y == food.y)
		{
			this.eat();
			return true;
		}			
		return false;
	}

   this.isDead=function(){	
   	if(this.pos.x > width || this.pos.x < 0){
   		this.dead = true;
   		this.vel.mult(0);
   	}
   	
   	else if(this.pos.y < 0 || this.pos.y > height){
   		this.dead = true;
   		this.vel.mult(0);
   	}

   	else if(this.inSnake(this.pos)){
   		this.dead = true;
   		this.vel.mult(0);	
   	}
   	return this.dead;
   }

   this.inSnake=function(pos){
   	
   	for(var i=0;i<this.body.length;i++){
   		if(this.body[i].x == pos.x && this.body[i].y == pos.y)
   		return true;
   	}
   	return false;
   }

	this.moveUp = function(){
		if(this.vel.y==0){
			this.vel.x = 0;
			this.vel.y = -10;
			return true;
		}
		return false;
	}
	this.moveDown = function(){
		if(this.vel.y==0){
			this.vel.x = 0;
			this.vel.y = 10;
			return true;
		}
		return false;
	}
	this.moveLeft = function(){
		if(this.vel.x==0){
			this.vel.x = -10;
			this.vel.y = 0;
			return true;
		}
		return false;
	}
	this.moveRight = function(){
		if(this.vel.x==0){
			this.vel.x = 10;
			this.vel.y = 0;
			return true;
		}
		return false;
	}

}