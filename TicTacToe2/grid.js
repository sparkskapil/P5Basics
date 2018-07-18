
grid = function(a,b){
	this.x = a*3;
	this.y = b*3;
	this.winner = 0;//-1 for Draw 1 for Player1 winning and 2 for Player2 winning 
	this.block = [];
	this.active = true;

	this.color;
	this.anim = cellSize/2;
	this.chance = 0;

	for(var i=0;i<3;i++){
		this.block[i] = [];
		for(var j=0;j<3;j++){
			this.block[i][j] = new cell(this.x+i,this.y+j);
    	}
	
	}

	this.clicked = function(turn){
		var temp;
		if(this.active == true)
		if(mouseX>this.x*cellSize && mouseY>this.y*cellSize)
			if(mouseX<(this.x+3)*cellSize && mouseY<(this.y+3)*cellSize)
				for (var i=0; i<3; i++) {
					for(var j=0; j<3; j++)
					{
						temp = this.block[i][j].clicked(turn);
						if(temp !=undefined){
							this.win();
							this.chance++;
							if(this.chance == 0 && this.winner==0)this.winner = -1;
							activeGrid = i*3+j;
							return temp;
						}
					}
				}
	}



	this.show = function(){
	//If the grid is already won or drawn it is default inactive
		if(this.winner==-1){
			this.active = false;
		}
 
 	//Coloring inactive blocks to gray
			
			if(this.active == false && (this.winner != 1 && this.winner!=2)){
				this.color = 65;
			}
			else if((this.x+this.y)%2 == 0){
			this.color = color(126, 87, 194);
			}
			else{
				this.color = color(239, 83, 80);
			}
	//Coloring Complete

		var Width = 3*cellSize;
		var Height = 3*cellSize;
		var xOffset = this.x * cellSize;
		var yOffset = this.y * cellSize;
		if(this.winner==1)
		{
			var X = xOffset + (Width-this.anim)/2;
		    var Y = yOffset + (Height-this.anim)/2;
		    fill(this.color);
		    rect(xOffset,yOffset,Width,Height);
		    strokeWeight(5);
		    
		    line(X,Y,X+this.anim,Y+this.anim);
		    line(X,Y+this.anim,X+this.anim,Y);
		    if(this.anim<Width-this.anim/2)this.anim+=this.anim/10;
		}
		else if(this.winner == 2){
		    var X = xOffset + Width/2;
		    var Y = yOffset + Height/2;
		    fill(this.color);
		    rect(xOffset,yOffset,Width,Height);
		    strokeWeight(5);
		    ellipse(X,Y,this.anim);
		    if(this.anim<Width-this.anim/2)this.anim+=this.anim/10;

		}
		else
			for(var i=0;i<3;i++)
				for(var j=0;j<3;j++){
					this.block[i][j].Color = this.color;
					this.block[i][j].show();
				}
	}





	this.win = function(){

    if(this.winner == 0){
      //Vertical Check
        for(var i=0;i<3;i++)
         {
           if(this.block[i][0].player!=0)
           if(this.block[i][0].player == this.block[i][1].player && this.block[i][1].player == this.block[i][2].player)
           {
             this.winner = this.block[i][0].player;
             break;
           }
         }
      //Horizontal Check   
        for(var i=0;i<3;i++)
         {
         	
           if(this.block[0][i].player!=0)
           if(this.block[0][i].player == this.block[1][i].player && this.block[1][i].player == this.block[2][i].player)
           {
             this.winner = this.block[0][i].player; 
             break;
           }
         } 
      //Diagonal Check
      if(this.block[0][0].player == this.block[1][1].player && this.block[1][1].player == this.block[2][2].player)
        this.winner = this.block[0][0].player;  
      else if(this.block[0][2].player == this.block[1][1].player && this.block[1][1].player == this.block[2][0].player)
        this.winner = this.block[0][2].player;
      
    }
  }



}