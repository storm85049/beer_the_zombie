	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 	920;
	canvas.height = 530;
	
	var gravity = 0.6; 
	var friction = 0.8;
	var shoot = false;


	document.body.appendChild(canvas);


								var bgReady = false;
								var bgImage = new Image();
								bgImage.onload = function(){
									bgReady = true;
								}
								bgImage.src = "images/street_bg.png";
								var playerReady = false;
								var playerImage = new Image();
									playerImage.onload = function(){
									playerReady = true;
								}
								playerImage.src = "images/player_dummy.png";						
								var zombieReady = false;
								var zombieImage = new Image();
								zombieImage.onload = function(){
									zombieReady = true;
								}
								zombieImage.src = "images/enemy_dummy.png";
								var zombieDeadReady = false;
								var zombieDeadImage = new Image();
								zombieDeadImage.onload = function(){
									zombieDeadReady = true;
								}
								zombieDeadImage.src = "images/enemy_dummy_dead.png";							
								var bottleReady = false;
								var bottleImage = new Image();
								bottleImage.onload = function(){
									bottleReady = true;
								}
								bottleImage.src = "images/bottle.png";
								var playerDeadReady = false;
								var playerDeadImage = new Image();
								playerDeadImage.onload = function(){
									playerDeadReady = true;
								}
								playerDeadImage.src = "images/player_dummy_dead.png";
	var zombie = {
		x:canvas.width/2,
		y:canvas.height/2,
		dead:false
		
	}
	var camera = {
		x:0,
		y:0,
		
		camShift:3

	}
	var bottle = {
		x:0,
		y:0,
		bottleVelX:10,
		grav:3
	}
		var player = {
		speed:3,//movement in pixels
		x:100,
		y:canvas.height/2,
		jumping:false,
		velX:0,
		velY:0,
		dead:false

	}
	
	
	
	
	var render = function(){
		if(bgReady){
			ctx.drawImage(bgImage,camera.x,camera.y);
		}
		if(zombieReady){
			ctx.drawImage(zombieImage,zombie.x,zombie.y);
		}
		if(playerReady){
			ctx.drawImage(playerImage,player.x,player.y);
		}
		if(bottleReady && shoot){
			ctx.drawImage(bottleImage, bottle.x, bottle.y);
		}
		/*ctx.beginPath();
		ctx.globalAlpha = 0.2;
		ctx.fillRect(100,canvas.height/2,250,playerImage.height);
		ctx.globalAlpha = 1.0;
		*/
		

	}
	var keysDown = {};
	
	addEventListener("keydown", function(e){
		keysDown[e.keyCode]=true;
	}, false);
	
	addEventListener("keyup", function(e){
		delete keysDown[e.keyCode];
	});

	var update = function(){
		
		if(65 in keysDown && player.velX > -player.speed){		//KeyLEFT
			player.velX--;
		}
		if(68 in keysDown && player.velX < player.speed){		//KeyRIGHT
			player.velX++;
		}
		if (87 in keysDown && !player.jumping){
			player.jumping = true; 
			player.velY = -player.speed*5;
		}

		
		if(32 in keysDown){
			shoot = true; 
		
		}
		if (!shoot){
			bottle.x = player.x;
			bottle.y = player.y;		
		}
		else{
			bottle.x+=bottle.bottleVelX; 
			bottle.y-= bottle.grav;
			bottle.grav-=0.2 ;
		}
		if(!player.dead){
			player.velX*=friction;
			player.velY += gravity;
			player.y += player.velY;
			player.x += player.velX;
			
			
			if(player.x < 100){
				player.x  = 100;
				player.velX = 0;
				camera.x += camera.camShift;
				zombie.x += camera.camShift;
			}
			
			if(player.x + playerImage.width > 350){
				player.x = 350 - playerImage.width;
				player.velX = 0;
				camera.x -= camera.camShift;
				zombie.x -= camera.camShift;
			}
		}
		//camera.x -= camera.camVelX;
		//camVelX = player.velX;
		

				    
		var zombieDie = function(){
			zombieImage = zombieDeadImage;
			zombie.y = canvas.height -120;	
		}
		var playerDie = function(){
			playerImage = playerDeadImage;
			player.y = canvas.height-120; 
			
		}
		
	
		if(player.x + playerImage.width > zombie.x && player.x < zombie.x + zombieImage.width && player.y + playerImage.height >= zombie.y && !zombie.dead){
			player.dead = true; 
			playerDie();
			
		}
		if(bottle.x + bottleImage.width > zombie.x && bottle.x < zombie.x + bottleImage.width && bottle.y + bottleImage.height >= zombie.y){
			zombie.dead = true;
			zombieDie();
		}

		if(player.y >= canvas.height/2 && !player.dead){
			player.y = canvas.height/2;
			player.jumping = false;
		}
		
		if(bottle.y + bottleImage.height > canvas.height/2 + playerImage.height){
			bottle.grav = 3;
			shoot = false;		
		}

		
		
	}
	
	
var main = function(){
	var now = Date.now();
	var delta = now - then;
	update(); //pixel per second 
	render();
	then = now;
	requestAnimationFrame(main);
}

var then = Date.now();
main();





	
	












		/*ctx.fillStyle ="rgba(250,250,250,0.4)";
		ctx.font = "20px Helvetica";
		ctx.textAlign ="left";
		ctx.textBaseline="top";
		ctx.fillText("zombie gefangen: " +zombiesCaught, 32, 32);
		ctx.fillText("[R]: Zurücksetzen" , 32,425);
*/