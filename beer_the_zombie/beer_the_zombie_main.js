	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 	920;
	canvas.height = 530;
	
	
	var gravity = 0.6; 		
	var friction = 0.8;
	var shoot = false;
	var zombieHit = false;
	var playerImmune = false;
	var blinking = false;


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
								var bottleSpriteReady = false;
								var bottleSpriteImage = new Image();
								bottleSpriteImage.onload = function(){
									bottleSpriteReady = true;
								}
								bottleSpriteImage.src = "images/bottle_sprite.png";
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
		y:-270,	
		camShift:3		//Fixer Wert, der den Background verschiebt, wenn man aus der "freien Bewegungszone herausgeht"

	}
	var bottle = {
		spriteX:0,
		bottleXCoord:0,
		bottleYCoord:0,
		bottleVelX:10,	//Bestimmmt, wie weit die Flasche geworfen wird
		grav:3,
		ticker:0	//Bestimmmt, wie schwer die Flasche ist. 
	}
	var player = {
		speed:3,		//Maximale Geschwindigkeit des Players 
		x:100,			
		y:canvas.height/2,
		jumping:false,
		velX:0,			//aktueller Geschwindigkeitswert -> wird stetig in der Update Funktion verändert
		velY:0,			//GLeiches wie für velX
		dead:false,
		lifes: 3

	}
	
	
	var blink = function(){
		ctx.globalAlpha = 0.4;
		ctx.drawImage(playerImage,player.x,player.y);
		ctx.globalAlpha = 1.0;
	}
	
	var render = function(){
		if(bgReady){
			ctx.drawImage(bgImage,camera.x,camera.y);
		}
		if(zombieReady){
			ctx.drawImage(zombieImage,zombie.x,zombie.y);
		}
		if(playerReady && !playerImmune){
			ctx.drawImage(playerImage,player.x,player.y);
		}
		else if(playerReady && playerImmune){
			if(!blinking){
				blink();
				if(!player.dead){
					blinking = true;
				}
			}
			else{
				ctx.drawImage(playerImage,player.x,player.y);	
				if(!player.dead){
					blinking = false;
				}
			}

			
		}
		if(bottleSpriteReady && shoot){
			ctx.drawImage(bottleSpriteImage,bottle.spriteX,0,32,32,bottle.bottleXCoord,bottle.bottleYCoord,32,32);
			bottle.ticker++;
			if(bottle.ticker % 5 == 0){
				bottle.spriteX += 32;
				if(bottle.spriteX > 224){
					bottle.spriteX = 0;
				}
			}
		}
		
	/*	//Malt die Box, in der sich der Spieler frei bewegen kann.
		ctx.beginPath();
		ctx.globalAlpha = 0.4;
		ctx.fillRect(100,canvas.height/2,250,playerImage.height);
		ctx.globalAlpha = 1.0;
	//Malt die Box um die Flasche herum 
	ctx.beginPath();
	ctx.lineWidth="1";
	ctx.strokeStyle = "black";
	ctx.rect(bottle.bottleXCoord,bottle.bottleYCoord,32,32);
	ctx.stroke();
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
		if (87 in keysDown && !player.jumping){					//KeyUp
			player.jumping = true; 
			player.velY = -player.speed*5;
		}


	
		if(32 in keysDown && !playerImmune){
			shoot = true; 
		}
		if (!shoot){
			bottle.bottleXCoord = player.x;			//Flasche hat stets die gleichen x und y Werte wie der Spieler(wenn nicht geschossen wird),
			bottle.bottleYCoord = player.y; 			// wird jedoch erst in der draw Funktion gemalt, wenn shoot == true ist 
		}
		else{
			if(!zombieHit){
				bottle.bottleXCoord+=bottle.bottleVelX; 	//wenn shoot == true, dann verändert die Flasche ihre x und y Werte, mit normalen physikalischen
				bottle.bottleYCoord-= bottle.grav;			//GLeichungen
				bottle.grav-=0.2 ;
			}
			else{
				bottle.bottleXCoord-=bottle.bottleVelX/3; 	
				bottle.bottleYCoord-= bottle.grav;			
				bottle.grav-=1 ;
			}
		}
		//Zombie Move
		var zombieMove = function(speed){
			if(!zombie.dead){
				zombie.x -= speed;
			}
			if (zombie.x + zombieImage.width <= 0){
				zombie.x = canvas.width;
			}
		}
		zombieMove(2);


		if(!player.dead){
			player.velX*=friction;			
			player.velY += gravity;
			player.y += player.velY;
			player.x += player.velX;
			
			
			if(player.x < 100){
				if (camera.x < 0){
					player.x  = 100;
					player.velX = 0;
					camera.x += camera.camShift;
					zombie.x += camera.camShift;
			}
				else {
					player.x = 100;
					player.velX = 0;
					camera.x =0;
				}
			}
			
			if(player.x + playerImage.width > 350){ // Kamera Bewegung X
				player.x = 350 - playerImage.width;
				player.velX = 0;
				camera.x -= camera.camShift;
				zombie.x -= camera.camShift;
			}
			if(player.jumping && !(player.y > canvas.height/2)){
					if(!zombie.dead){
					camera.y = (-270 - player.y)/2; 
					zombie.y = 270+ canvas.height/2 + camera.y;
				}
				else{
					camera.y = (-270 - player.y)/2; 
					zombie.y = 270+ canvas.height/2 + camera.y + 95;
					}
				}
			}
				    
		var zombieDie = function(){
			zombieImage = zombieDeadImage;
			zombie.y = canvas.height -180;
			zombie.x += 50
		}
		var playerDie = function(){
			playerImage = playerDeadImage;
			player.y = canvas.height-120; 
			
		}
			// Reset bottle
		var resetBottle = function(){
		bottle.bottleXCoord = player.x;
		bottle.bottleYCoord = player.y;
		zombieHit = false;
	}
		
		if(!playerImmune){
		if(player.x + playerImage.width > zombie.x && player.x < zombie.x + zombieImage.width && player.y + playerImage.height >= zombie.y && !zombie.dead){
			player.lifes -= 1;
			playerImmune = true;

			setTimeout(function(){playerImmune = false}, 2000);
			if(player.lifes == 0){
				player.dead = true; 
				playerDie();
			}
		}
			
		}
		if(bottle.bottleXCoord +32 > zombie.x +60 && bottle.bottleXCoord +32 < zombie.x + zombieImage.width && bottle.bottleYCoord+ 32 >= zombie.y && shoot){
			//Hitbox Check
			zombie.dead = true;
			zombieDie();
			zombieHit = true;
		}

		if(player.y >= canvas.height/2 && !player.dead){
			player.y = canvas.height/2;
			player.jumping = false;
		}
		
		if(bottle.bottleYCoord + 32> canvas.height/2 + playerImage.height){
			bottle.grav = 3;
			shoot = false;	
			resetBottle();

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






	
	












