var D=[];
var P=[];
var INF = 65535;
var path = [];
var noPath = false;

function init(grid){
	var k=0;
	for(var i=0;i<rows*cols;i++){
		D[i] = [];
		P[i] = [];
		for(var j=0;j<rows*cols;j++){
			if(i===j){
				D[i][j]=0;
			}
			else {
				D[i][j]=INF;
			}
			P[i][j]=D[i][j];
		}
	}

	for(var i=0;i<rows;i++)
		for(var j=0;j<cols;j++){
			curr = index(i,j);
			if(grid[curr].wall == true) continue;
			
			var top=-1,right=-1,bottom=-1,left=-1;
			if(j-1>=0)
			top = index(i,j-1);
			if(i+1<rows)
			right = index(i+1,j);
			if(j+1<rows)
			bottom = index(i,j+1);
			if(i-1>=0)
			left = index(i-1,j);

			if(grid[top] && !grid[top].wall){
				D[curr][top] = 1;
				P[curr][top] = curr;
				
			}
			if(grid[right] && !grid[right].wall){
				D[curr][right] = 1;
				P[curr][right] = curr;
				
			}
			if(grid[bottom] && !grid[bottom].wall){
				D[curr][bottom] = 1;
				P[curr][bottom] = curr;
				
			}
			if(grid[left] && !grid[left].wall){
				D[curr][left] = 1;	
				P[curr][left] = curr;
				
			}
		}
	
}

function floyds(){
	for(var k=0;k<rows*rows;k++)
		for(var i=0;i<cols*cols;i++)
			for(var j=0;j<rows*cols;j++){
				if(D[i][k]+D[k][j]<D[i][j])
					{
						D[i][j] = D[i][k]+D[k][j];
						P[i][j] = P[k][j];
					}
			}
}

function showPath(i,j){
		if(i==j){
			path.push(i);
		}
		else if(P[i][j] == INF){
			noPath = true;
			console.log("No Path Found");
		}
		else{
			showPath(i,P[i][j]);
			path.push(j);
		}

}



