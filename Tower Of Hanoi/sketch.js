var Source,Destin,Auxil;
var counter;

var diskCount=1;
var Slider;

function setup() {
  createCanvas(900,600);
  stage();
  Slider = createSlider(1, 8, 1);
  Slider.position(20, 20);
  
  var button = createButton('Solve');
  button.position(20,50);
  button.mousePressed(Solve);

}
function stage(){
  Solution=[];
  counter = 0;
  toh(diskCount,"S","A","D");
 
  Source = new Stand(createVector(width/4,height/2 +50),diskCount);
  Destin = new Stand(createVector(3*width/4,height/2 +50),0);
  Auxil = new Stand(createVector(width/2,height/2 +50),0);

}

function Solve(){
	diskCount = floor(Slider.value());

	stage();
}

function draw() {
  background(51);

  var sliderValue = floor(Slider.value());
  fill(255);
  text(sliderValue, Slider.x * 2 + Slider.width, 35);

  Source.show();
  Destin.show();
  Auxil.show();

}

Stand = function(pos,n){
	this.pos = pos.copy();
	this.rings = [];

	for(var i=0;i<n;i++){
		this.rings.push(n-i);
	}

	this.show= function(){
		noStroke();
		fill(255);
		rectMode(CENTER);
		rect(this.pos.x,this.pos.y,10,height-50);
		
		for(var i=0;i<this.rings.length;i++){
			r = this.rings[i]*10;
			sum=0;
			for(var j=0;j<=i;j++){
				sum+=this.rings[j];
			}
			sum*=10;
			stroke(0);
			fill(200-i*30, 100+i*10 , 200-i*20);
			ellipse(this.pos.x,height-sum*1.3,3*r,r);
		}

	}
}

function mousePressed() {
  if(mouseX<Slider.width+10 && mouseY<80);
  else{	
	  var from = Solution[counter][0];
	  var to = Solution[counter][1];
	  if(from == "S" && to =="D"){
	  	Destin.rings.push(Source.rings.splice(Source.rings.length-1)[0]);
	  }
	  if(from == "D" && to =="S"){
	  	Source.rings.push(Destin.rings.splice(Destin.rings.length-1)[0]);
	  }
	  if(from == "S" && to =="A"){
	  	Auxil.rings.push(Source.rings.splice(Source.rings.length-1)[0]);
	  }
	  if(from == "A" && to =="S"){
	  	Source.rings.push(Auxil.rings.splice(Auxil.rings.length-1)[0]);
	  }
	  if(from == "D" && to =="A"){
	  	Auxil.rings.push(Destin.rings.splice(Destin.rings.length-1)[0]);
	  }
	  if(from == "A" && to =="D"){
	  	Destin.rings.push(Auxil.rings.splice(Auxil.rings.length-1)[0]);
	  }

	  if(counter<Solution.length-1)
	   	counter++;
	 }
}