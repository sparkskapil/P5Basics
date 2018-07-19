let Solution=[];

function toh(n,S,A,D){
	if(n==1){
		var Ans = [S,D];
		Solution.push(Ans);
	}

	else{
		toh(n-1,S,D,A);
		var Ans = [S,D];
		Solution.push(Ans);
		toh(n-1,A,S,D)
	}
}

function Sol(){
	console.table(Solution);
}