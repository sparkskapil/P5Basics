//Global Scope

let cellSize;
let Grid;
let player;
let activeGrid;
let gameWinner;
let len;
function gameWin(){
  if(gameWinner == 0)
  for(var i=0;i<3;i++)
         {
           if(Grid[i][0].winner!=0)
           if(Grid[i][0].winner == Grid[i][1].winner && Grid[i][1].winner == Grid[i][2].winner)
           {
             gameWinner = Grid[i][0].winner;
             break;
           }
         }
      //Horizontal Check   
        for(var i=0;i<3;i++)
         {
          
           if(Grid[0][i].winner!=0)
           if(Grid[0][i].winner == Grid[1][i].winner && Grid[1][i].winner == Grid[2][i].winner)
           {
             gameWinner = Grid[0][i].winner; 
             break;
           }
         } 
      //Diagonal Check
      if(Grid[0][0].winner == Grid[1][1].winner && Grid[1][1].winner == Grid[2][2].winner)
        gameWinner = Grid[0][0].winner;  
      else if(Grid[0][2].winner == Grid[1][1].winner && Grid[1][1].winner == Grid[2][0].winner)
        gameWinner = Grid[0][2].winner;
}


function mousePressed(){
	//To Check Dor All Large Grids

	for(var i=0;i<3;i++)
		for(var j=0;j<3;j++){
			if(Grid[i][j].winner == 0){
				var temp = Grid[i][j].clicked(player);
				if(temp != undefined)
				{	
					player = temp;
          gameWin();
					break;
				}	
		  }
		}
}


function setup() {
  cellSize = 70;
  Grid = [];
  player = 1;
  activeGrid = -1;// -1 means all Grids are active;
  gameWinner = 0;
  len = 50;
  createCanvas(cellSize*9,cellSize*9).center('horizontal');
  
  for(var i=0;i<3;i++){
  	Grid[i] = [];
  	for(var j=0;j<3;j++){
  		Grid[i][j] = new grid(i,j);
  	}
  }
}

function draw() {
  
  if(gameWinner ==1 ){
   maindrawX();
  }
  else if(gameWinner == 2){
    maindrawO();
  }
else{
    for(var i=0;i<3;i++)
      for(var j=0;j<3;j++){
        if(i*3+j == activeGrid){
          if(Grid[i][j].winner == 0){
            activeGrid = i*3+j;
            Grid[i][j].active = true;
          }
          else{
            activeGrid = -1;
          }
        }
        else
          Grid[i][j].active = false;
      }
    for(var i=0;i<3;i++)
    	for(var j=0;j<3;j++){
        if(activeGrid == -1){
          Grid[i][j].active = true;
        }
    		Grid[i][j].show();
      }
  }
}


function maindrawX(){
  var offsetX = width/2;
  var offsetY = height/2;
    fill(color(126, 87, 194));
    noStroke();
    rect(0,0,width,height);

    stroke(255);
    strokeWeight(5);
    line(offsetX - len,offsetY - len,offsetX + len, offsetY + len);
    line(offsetX - len,offsetY + len,offsetX + len, offsetY - len);
    if(len<width-2*len)len+=len/10;
}

function maindrawO(){
    var X = width/2;
    var Y = height/2;
    fill(color(239, 83, 80));
    noStroke();
    rect(0,0,width,height);

    stroke(255);
    strokeWeight(5);
    ellipse(X,Y,len);
    
    if(len<width-50)len+=10;
}