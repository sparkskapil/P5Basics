create = function(){
	this.maxCost = 0;
	this.walls = 0;
	var invalid=[];
	var cell;
	var i=0;
	var l=0;
	
	this.getPath=function(){
		solve(); 
	}

	this.init = function(){
	    this.getPath();
	    this.start();	
	    console.log(path.length);
	}

	this.start = function(){
		if(invalid.length >= path.length)return "Done";
		
		while(cell==undefined || i == source || i == destination || i in invalid){
			
			i = floor(random(0,path.length));
			i = path[i];
			
			cell = grid[i];
			console.log(cell);
			if(i==source||i==destination){
				invalid[l++] = i;
			}
		}
		if(grid[i]!=undefined){
			grid[i].wall=true;
			
			this.walls++;

			this.getPath();

			this.maxCost=path.length;

			if(noPath == true){
				grid[i].wall = false;
				invalid[l++] = i;
				this.walls--;
				noPath = false;
				this.getPath();

			} 
			grid[i].show();
		}
		
	
	}
}