var w;
var rows,cols;
var grid = [];
var l;
var source, destination;
var current;
var fps = 5;
var Solving = false;
var HTMLset = false; 
var Creator;

function Randomize(){
  if(Solving == false){
    source = floor(random(0,rows*cols));
    destination = floor(random(0,rows*cols));

    if(abs(source - destination) == 1 || abs(source - destination) == rows)
      Randomize();
    else{
      grid[source].show();
      grid[destination].show();
    }
 }
}

function solve() {
  if(Solving == false){
   Solving = true;
   Clear();
   init(grid);
   floyds();
   showPath(source,destination); 
   Solving = false;
 }
}

function Clear(){
  path=[];
  l=0;
} 

function mousePressed(){
 if(Solving == false)
  for(i=0;i<rows*cols;i++)
  {
      grid[i].clicked();
      grid[i].show();
  }
}



function createBody(){
  var btnStyle = "background-color: #555555;border: none;color: white;padding: 10px 20px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;";
   var Solve = createButton("Solve");
   Solve.position(50,500);
   Solve.mousePressed(solve);   
   Solve.style(btnStyle);
   var Reset = createButton("Reset Canvas");
   Reset.position(150,500);
   Reset.mousePressed(setup);
   Reset.style(btnStyle);

   var RandomPoints = createButton("Random S & D");
   RandomPoints.position(300,500);
   RandomPoints.mousePressed(Randomize);
   RandomPoints.style(btnStyle);

   var Instructions = createElement("h1","Instructions");
   Instructions.position(500,50);

   var N1 = "*Note: You can skip steps 1 & 2 by clicking \"Random S & D\" button.<br>";
   var P1 = "1. Click box to set Source(Blue)<br>";
   var P2 = "2. Click box to set Destination(Green)<br>";
   var P3 = "3. When S & D are set Click a box to change its state from PATH(Grey) to WALL(White)<br>";
   var P4 = "4. When you are done creating maze click Solve Button. The system will solve the maze.<br>";
   var points = createP(N1 + P1+P2+P3+P4);
   points.position(500,150);
}

function setup() {
  // put setup code here
  w=50;
  l=0;
  source = -1;
  destination = -1;
  path = [];
  
  createCanvas(400,400);
  background(51);
  
  cols = floor(width/w);
  rows = floor(height/w);
  
  for(j=0;j<cols;j++)
   for(i=0;i<rows;i++){
    	C = new cell(i,j);
      grid[index(i,j)]=C;
    }

  for(i=0;i<grid.length;i++){
    stroke(255); 
    grid[i].show();   
   }  

   if(HTMLset == false){
    createBody();
    HTMLset = true;
   }
}

function getMaze(){
  Creator = new create();
  Creator.init();
}

function draw() {  
    if(Solving==false){  
      current = path[l++]; 
      if(grid[current] != undefined){
        grid[current].show();
      }
      else{
        Solving = false;
      }
    }

}