
function index(i,j){
  if(i<0||j<0) return -1;
  return j*rows + i; 
}


cell = function(i,j){
	this.i = i;
	this.j = j;
  this.wall = false;

  this.clicked =function(){
    
    if(index(this.i,this.j) != source && index(this.i,this.j) != destination){
      if(mouseX > this.i*w && mouseX < this.i*w+w)
        if(mouseY > this.j*w && mouseY < this.j*w+w){
          if(source == -1)
            source = index(this.i,this.j);
          
          else if(destination == -1)
            destination = index(this.i,this.j);
          
          else 
            this.wall = !this.wall;
          
      }
    }
}
	this.show = function(){
		
    if(index(i,j)==source){
      fill(0,0,255,100);
      rect(this.i*w, this.j*w, w, w);
    }
    else if(index(i,j)==destination){
      fill(0,255,0,100);
      rect(this.i*w, this.j*w, w, w);
    }
    else if(current == index(i,j)){
      fill(255,0,255,100);
      rect(this.i*w, this.j*w, w, w);
    }
    else {
      if(this.wall == true)
        fill(255);
      else
        fill(51);  
      rect(this.i*w, this.j*w, w, w);
    }  
	}
  frameRate(fps);
}