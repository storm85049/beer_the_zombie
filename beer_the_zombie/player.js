	var playerReady = false;
	var playerImage = new Image();
		playerImage.onload = function(){
		playerReady = true;
	}
	playerImage.src = "images/player_dummy.png";
	
	var player = {
		speed:null,//movement in pixels
		x:null,
		y:null,
		jumping:null,
		velX:null,
		velY:null,
		function create(speed,x,y,jumping,velX,velY){
			this.speed = speed;
			this.x = x;
			this.y = y;
			this.jumping = jumping;
			this.velX = velX; 
			this.velY = velY; 	
		}
	}