//Global Declarations
let cellSize = 100; // size of a cell;
let grid;           // array to store 9 cells of the game
let player;         // stores the current turn
let winner;     // stores winner number
let countTurns;     // sores number of turns done


//Other UI Elements
var Heading;        // stores H1 element that displays Turn/Winner/Draw
let anim; 
//Global Scope Ends


function setup(){
//Initialization    
  countTurns = 0;
  anim =50;
  grid = [];
  player = 1;
  winner = 0;
//Initialization Ends  
  
  clear(); // Clear Canvas
  
  if(Heading == undefined){
    createElement("h1","TIC-TAC-TOE").position(cellSize/2 + 25,0);
    Heading = createElement("h1","Turn of Player " + player);
    var  myCanvas = createCanvas(cellSize*3,cellSize*3).position(cellSize/2, cellSize*1.5);
    Heading.position(cellSize/2 + 25,cellSize*0.6);
  }
 
  //Create Cells
  for(i=0;i<3;i++){
   grid[i] = [];
    for(j=0; j<3;j++){
      grid[i][j] = new cell(i,j);
    }
  }

  //Button To restart the game
   var btnStyle = "background-color: #555555;border: none;color: white;padding: 10px 20px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;";
  createButton("Reset Board").position(cellSize*1.3,5*cellSize).mousePressed(setup).style(btnStyle);
  
}


function Win(){
    if(winner === 0){
      //Vertical Check
        for(i=0;i<3;i++)
         {
           if(grid[i][0].player == grid[i][1].player && grid[i][1].player == grid[i][2].player)
           {
             winner = grid[i][0].player;
             break;
           }
         }
      //Horizontal Check   
        for(i=0;i<3;i++)
         {
           if(grid[0][i].player == grid[1][i].player && grid[1][i].player == grid[2][i].player)
           {
             winner = grid[0][i].player;
             break;
           }
         } 
      //Diagonal Check
      if(grid[0][0].player == grid[1][1].player && grid[1][1].player == grid[2][2].player)
        winner = grid[0][0].player;
      
      
      else if(grid[0][2].player == grid[1][1].player && grid[1][1].player == grid[2][0].player)
        winner = grid[0][2].player;
      
    }
  }

function mousePressed(){
  if(winner === 0)
  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      var temp = grid[i][j].clicked(player);
      if(temp!==undefined){
        player = temp;
        countTurns+=1;
        break;
      }
     }
  }
}

function draw(){
  Win();
  
  if(winner == 2)
  {
    clear();
    Heading.html("Player " + winner + " Is the Winner");
    Heading.position(cellSize/2,cellSize*0.6);
    background(65);
    var X = width/2;
    var Y = height/2;
    strokeWeight(5);
    ellipse(X,Y,anim);
    
    if(anim<width-50)anim+=10;
  }

  else if(winner == 1){
    clear();
    Heading.html("Player " + winner + " Is the Winner");
    Heading.position(cellSize/2,cellSize*0.6);
     background(65);
    strokeWeight(5);
    var X = (width - anim)/2;
    var Y = (height - anim)/2;
    
    line(X, Y, X+anim, Y+anim);
    line(X, Y+anim, X+anim, Y);
      if(anim<width-50)anim+=10;
  }

  else{
    Heading.html("Turn of Player " + player);   
    Heading.position(cellSize/2 + 25,cellSize*0.6);
    
      for(i=0;i<3;i++)
      {
        for(j=0;j<3;j++)
        {
          grid[i][j].show();
        }
      }
    
  }

  
  if(countTurns === 9 && winner === 0){
    Heading.html("Its A Draw");
    Heading.position(cellSize/2 + 40,cellSize*0.6)  
  }
}