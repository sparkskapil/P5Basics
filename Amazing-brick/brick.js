brick = function(){
  this.pos=createVector(width/3,height/2);
  this.vel=createVector(0,0);
  this.acc=createVector(0,0);

  this.applyForce=function(force){
  	this.acc.add(force);
  }
 

  this.update=function(){

  	this.vel.add(this.acc);
  	this.acc.mult(0);
  	this.pos.add(this.vel);
  	
  	this.pos.x=constrain(this.pos.x,7.5,width-7.5);
  	this.pos.y=constrain(this.pos.y,7.5,height-7.5);

  	this.vel.y = constrain(this.vel.y,-6,6);
  }
  
  this.show=function(){
  	fill(255);
  	rect(this.pos.x,this.pos.y,15,15);
  }
  
  this.collide = function(column){
  	if(column.pos.x <= this.pos.x +15 && abs(this.pos.x-column.pos.x)<=15){
  		if(column.height>this.pos.y)
  			return true;
  		else if(this.pos.y+15 - column.height - column.gap>=0)
  			return true;
  		else
  			return false;
  	}
  	else
  		return false;
  }
}