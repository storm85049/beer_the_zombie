	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 	920;
	canvas.height = 530;
	
	
	var gravity = 0.6; 		
	var friction = 0.8;
	var shoot = false;
	var zombieHit = false;
	var playerInmune = false;
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
		camShift:3		//Fixer Wert, der den Background verschiebt, wenn man aus der "freien Bewegungszone herausgeht"

	}
	var bottle = {
		x:0,
		y:0,
		bottleVelX:10,	//Bestimmmt, wie weit die Flasche geworfen wird
		grav:3	//Bestimmmt, wie schwer die Flasche ist. 
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
		if(playerReady && !playerInmune){
			ctx.drawImage(playerImage,player.x,player.y);
		}
		else if(playerReady && playerInmune){
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
		if(bottleReady && shoot){
			ctx.drawImage(bottleImage, bottle.x, bottle.y);
		}
		
		//Malt die Box, in der sich der Spieler frei bewegen kann.
		/*ctx.beginPath();
		ctx.globalAlpha = 0.4;
		ctx.fillRect(100,canvas.height/2,250,playerImage.height);
		ctx.globalAlpha = 1.0;*/
		
		

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
			player.velY = -player.speed*5.5;
		}

		
		if(32 in keysDown){
			shoot = true; 
		
		}
		if (!shoot){
			bottle.x = player.x;			//Flasche hat stets die gleichen x und y Werte wie der Spieler(wenn nicht geschossen wird),
			bottle.y = player.y; 			// wird jedoch erst in der draw Funktion gemalt, wenn shoot == true ist 
		}
		else{
			if(!zombieHit){
				bottle.x+=bottle.bottleVelX; 	//wenn shoot == true, dann verändert die Flasche ihre x und y Werte, mit normalen physikalischen
				bottle.y-= bottle.grav;			//GLeichungen
				bottle.grav-=0.2 ;
			}
			else{
				bottle.x-=bottle.bottleVelX/3; 	
				bottle.y-= bottle.grav;			
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
				console.log(player.y);
				if(zombie.dead == false){
					camera.y = .4*(canvas.height/2 - player.y);
					zombie.y = canvas.height/2+camera.y;
				}
				else{
					camera.y = .4*(canvas.height/2 - player.y);
					zombie.y = canvas.height/2+camera.y + 140;	
					}
				}
			}
	

				    
		var zombieDie = function(){
			zombieImage = zombieDeadImage;
			zombie.y = canvas.height -120;	
		}
		var playerDie = function(){
			playerImage = playerDeadImage;
			player.y = canvas.height-120; 
			
		}
			// Reset bottle
		var resetBottle = function(){
		bottle.x = player.x;
		bottle.y = player.y;
		zombieHit = false;
	}
		
		if(!playerInmune){
		if(player.x + playerImage.width > zombie.x && player.x < zombie.x + zombieImage.width && player.y + playerImage.height >= zombie.y && !zombie.dead){
			player.lifes -= 1;
			playerInmune = true;

			setTimeout(function(){playerInmune = false}, 2000);
			if(player.lifes == 0){
				player.dead = true; 
				playerDie();
			}
		}
			
		}
		if(bottle.x + bottleImage.width > zombie.x +10 && bottle.x < zombie.x + bottleImage.width && bottle.y + bottleImage.height >= zombie.y && shoot){
			//Hitbox Check
			zombie.dead = true;
			zombieDie();
			zombieHit = true;
		}

		if(player.y >= canvas.height/2 && !player.dead){
			player.y = canvas.height/2;
			player.jumping = false;
		}
		
		if(bottle.y + bottleImage.height > canvas.height/2 + playerImage.height){
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
if(!blinking){
	setTimeout(function(){blinking = true, 500});
	}
else{
	setTimeout(function(){blinking = false, 500});
}





	
	












		/*ctx.fillStyle ="rgba(250,250,250,0.4)";
		ctx.font = "20px Helvetica";
		ctx.textAlign ="left";
		ctx.textBaseline="top";
		ctx.fillText("zombie gefangen: " +zombiesCaught, 32, 32);
		ctx.fillText("[R]: Zurücksetzen" , 32,425);
*/