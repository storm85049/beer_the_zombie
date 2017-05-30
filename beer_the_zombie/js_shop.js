//shop to upgrade weaponons and lifes 
var shopCanvas = document.getElementById("shopCanvas");
var ctx = shopCanvas.getContext("2d");
	shopCanvas.width = 880;
	shopCanvas.height = 470;
	
var rStage = 0;


	var keysDown = {};
	window.addEventListener("keydown", function(e){
					keysDown[e.keyCode]=true;
					if(82 in keysDown){
						rStage = 1 ;
					}
					if(32 in keysDown && e.target == document.body){
						e.preventDefault();
					}
	});
	window.addEventListener("keyup", function(e){
			if(rStage == 1 ){
				rStage = 2;
				if(shopCanvas.style.visibility == "hidden"){
					sessionStorage.setItem("shopOpen",true);
					shopCanvas.style.visibility = "visible";
					document.getElementById('ctx').style.visibility = "hidden";				
				}
				else{
					sessionStorage.setItem("shopOpen",false);
					shopCanvas.style.visibility = "hidden";
					document.getElementById('ctx').style.visibility = "visible";
					shopCanvas.style.visibility = "hidden";
				}

			}
			
	});
	
	