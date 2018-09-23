const Possiblities=[[11,12,13],
					[21,22,23],
					[31,32,33],
					[11,21,31],
					[12,22,32],
					[13,23,33],
					[11,22,33],
					[13,22,31]];
					
 const CpuFirstMove=22;
 var map=[[8,8,8],[8,8,8],[8,8,8]];
 var Player_1_log=[0,0,0,0,0];
 var Player_2_log=[0,0,0,0,0];
 var c=0;
var  winner=2;

 function desicion(){

	 var PossibleMoves=Possiblities.slice();
	 var j=0;
	 var flag=0;
	 var temp=[];
	 var attack=1;

	 if(c==4 && winner==2){
		//desicion();
		alert("!مساوی شدیم");
		window.location.reload(1);
		return true;
	}



     //////////////////////////////
	 ///search for defence situation
	 for(i=0;i<PossibleMoves.length;i++){

		possible=PossibleMoves[i]; 
			j=0;flag=0;
			temp=possible.slice();
			while(Player_1_log[j]!=0){
				
				if(temp.includes(Player_1_log[j])){
					temp.splice(temp.indexOf(Player_1_log[j]),1);
					flag++;
				}
				if(flag==2){
					//alert("third:"+temp);
				//	marker(temp[0],0);
				   attack=0;
				   break;
				}
				j++;
			}
			if(flag==2){
				if(marker(temp[0],0)){
				   break;
				}}
		////////////////
	 }

	 ////////////////////////////////////////////
	 ///if not need to defence and have to attack
	 if (attack==1){

		PossibleMoves.forEach(function(arr,ind){
			j=0;
			while(Player_1_log[j]!=0){
				if(arr.includes(Player_1_log[j]))
				PossibleMoves.splice(ind,1);
		   j++;	 
			}
		})
   

		for(i=0;i<PossibleMoves.length;i++){

			
		possible=PossibleMoves[i]; 
		j=0;flag=0;
		temp=possible.slice();

		while(Player_2_log[j]!=0){
		
			if(temp.includes(Player_2_log[j])){
				temp.splice(temp.indexOf(Player_2_log[j]),1);
				flag++;
			}
			if(flag==2){
				//alert("third:"+temp);
			   attack=0;
			   break;
			}
		
			j++;
		}
		if(flag==2){
			if(marker(temp[0],0)){
			   break;
			}}
			/////////////

			}
	   if(attack==1){

		var CpuMove=0;
		do{
			
			CpuMove=Math.floor(Math.random()*2+1)*10+Math.floor(Math.random()*2+1);
			console.log(CpuMove);

		}while(Player_1_log.includes(CpuMove) || Player_2_log.includes(CpuMove));

		marker(CpuMove,0);
	   }
	   
	 }
 }
 


 function marker(move,player){

	var PossibleMoves=Possiblities.slice();
	var j=0;
	var flag=0;
	var temp=[];

		
		switch (player){
			case -1:
////   
      alert("-1");
			break;
			/////////////////
			case 1:

			if(Player_1_log.includes(move) || Player_2_log.includes(move)){
				console.log(Player_1_log.includes(move)+" "+Player_2_log.includes(move)+"  "+move);
				alert("wrong move");
				return false;
			}else{
		
				
					Player_1_log[c]=move;
					c++;
					console.log("player 1: "+Player_1_log+" move:"+c);
					document.getElementById(move).style.backgroundImage="url('./img/cross.svg')";
					
					for(i=0;i<8;i++){

						possible=PossibleMoves[i]; 
						j=0;flag=0;
						temp=possible.slice();
						while(Player_1_log[j]!=0){
							
							if(temp.includes(Player_1_log[j])){
								temp.splice(temp.indexOf(Player_1_log[j]),1);
								flag++;
							}
							if(flag==3){
							   alert("!برنده شدی");
							   winner=1;
							   window.location.reload(1);
							   return true;
							}
							j++;
						}
						}

				  return true;
			}
      
			/////////////////////
			case 0:

			if(Player_2_log.includes(move)){
				return false
			}else{

			Player_2_log[c-1]=move;
			console.log("player 2: "+Player_2_log+" move"+c);
			document.getElementById(move).style.backgroundImage="url('./img/circle.svg')";

			for(i=0;i<8;i++){

				possible=PossibleMoves[i]; 
				j=0;flag=0;
				temp=possible.slice();
				while(Player_2_log[j]!=0){
					
					if(temp.includes(Player_2_log[j])){
						temp.splice(temp.indexOf(Player_2_log[j]),1);
						flag++;
					}
					if(flag==3){
					   alert("!باختی");
					   winner=0;
					   window.location.reload(1);
					   break;
					}
					j++;
				}
				}

			return true;
			}
		}
	

 }


 function UserMove(place){
	 
	if (c==0){
		
		var PlayerFirstMove=place;
			//	marker(PlayerFirstMove,1);
        if(place!=22){
			        marker(place,1);
					marker(22,0);
					
				}else{

					marker(22,1);
					var CpuMove=0;
					do{
						
						CpuMove=Math.floor(Math.random()*2+1)*10+Math.floor(Math.random()*2+1);
						console.log(CpuMove);
	
					}while(CpuMove==22);
					marker(CpuMove,0);
				}

	 }else{

  if(marker(place,1))
  desicion();
             

	 }
	 
 }