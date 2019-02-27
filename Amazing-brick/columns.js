
hurdle = function(){

    this.width = 20;
	this.pos = createVector(width-this.width,0);
	this.vel = createVector(-1.5,0);
    this.height = floor(random(1,8))*50;
    this.gap = 140;
	this.update=function(){
		this.pos.add(this.vel);
		
	}

	this.show=function(){
		fill(0,200,0);
		rect(this.pos.x,this.pos.y,this.width,this.height);
		fill(0,200,0);
		rect(this.pos.x, this.height+this.gap, this.width ,height-this.height - this.gap);
	}
}