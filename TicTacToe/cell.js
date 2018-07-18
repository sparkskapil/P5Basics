cell = function(i,j){
  this.x = i*cellSize;
  this.y = j*cellSize;
  this.player = 0;
  this.Color;
  this.Stroke=255;

  this.show = function(){
    
    if(this.player == 0){
      this.Color = 65;
    }
    
    fill(this.Color);
    strokeWeight(3);
    stroke(this.Stroke);
    rect(this.x, this.y,cellSize, cellSize);
    
    if(this.player == 1)
    {
      this.drawX();
    }
    
    if(this.player == 2)
    {
      this.drawO();
    }
    
    
  }
  
  
  this.clicked = function(turn){
    if(mouseX>this.x && mouseY>this.y){
      if(mouseX<(this.x+cellSize) && mouseY<(this.y+cellSize))
        {
          if(this.player == 0){
            this.player = turn;
              if(turn == 1)
                turn = 2;
              else
                turn = 1;
            return turn;    
          }
      }
    }
  }
  
  this.drawX=function(){
    stroke(255);
    line(this.x+20,this.y+20,this.x+cellSize-20,this.y+cellSize-20);
    line(this.x+20,this.y+cellSize-20,this.x+cellSize-20,this.y+20);
    
  }
  
  this.drawO=function(){
    let X = this.x+cellSize/2;
    let Y = this.y+cellSize/2;
  
    ellipse(X,Y,cellSize - 40);
  }
  
  
}