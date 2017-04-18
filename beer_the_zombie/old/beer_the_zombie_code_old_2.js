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
	var weaponChoice = 0; 


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
								
								var weaponSpriteReady = false;
								var canSpriteImage = new Image();
								canSpriteImage.onload = function(){
									weaponSpriteReady = true;
								}	
								canSpriteImage.src = "images/Can_Sprite.png";
								
								var weaponGreenSpriteReady = false;
								var weaponGreenSpriteImage = new Image();
								weaponGreenSpriteImage.onload = function(){
									weaponGreenSpriteReady = true;
								}	
								weaponGreenSpriteImage.src = "images/Green_Bottle_Sprite.png";	
								
								var weaponFireSpriteReady = false;
								var weaponFireSpriteImage = new Image();
								weaponFireSpriteImage.onload = function(){
									weaponFireSpriteReady = true;
								}	
								weaponFireSpriteImage.src = "images/Fire_Bottle_Sprite.png";
								
								var weaponBrownSpriteReady = false;
								var weaponBrownSpriteImage = new Image();
								weaponBrownSpriteImage.onload = function(){
									weaponBrownSpriteReady = true;
								}	
								weaponBrownSpriteImage.src = "images/Brown_Bottle_Sprite.png";
								
								var playerDeadReady = false;
								var playerDeadImage = new Image();
								playerDeadImage.onload = function(){
		
									playerDeadReady = true;
								}	
								playerDeadImage.src = "images/player_dummy_dead.png";
	
	
	//////////////////////
	//////OBJECTS/////////
	//////////////////////	
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
	var weapon = {
		spriteX:0,
		weaponXCoord:0,
		weaponYCoord:0,
		weaponVelX:10,	//Bestimmmt, wie weit die Flasche geworfen wird
		grav:3,
		ticker:0,
		weaponSpriteImage:canSpriteImage,
		rotateSpeed:5//Bestimmmt, wie schwer die Flasche ist. 
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
		var keysDown = {};
	

	
		///////////////////////////////////////
		/////////////ALL FUNCTIONS/////////////
		///////////////////////////////////////
		
		var zombieMove = function(speed){
			if(!zombie.dead){
				zombie.x -= speed;
			}
			if (zombie.x + zombieImage.width <= 0){
				zombie.x = canvas.width;
			}
		}
		
		var blink = function(){
			ctx.globalAlpha = 0.4;
			ctx.drawImage(playerImage,player.x,player.y);
			ctx.globalAlpha = 1.0;
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
			
		var resetWeapon = function(){
			weapon.weaponXCoord = player.x;
			weapon.weaponYCoord = player.y;
			zombieHit = false;
	}
	// Weapon Select
		var drawWeaponSelect = function(){
			let place = 48;
			let choice = 1;
			for(let i = 0; i < 4; i++){
				ctx.beginPath();
				ctx.lineWidth="1";
				ctx.fillStyle = "rgba(0,0,0, 0,4)";
				ctx.fillRect(canvas.width - place - 24, 10, 48, 48);
				ctx.stroke();
				if(choice == 4){
					ctx.drawImage(canSpriteImage, 0, 0, 32, 32, canvas.width - place - 15, 17, 32, 32);
				}
				else if(choice == 3){
					ctx.drawImage(weaponGreenSpriteImage, 0, 0, 32, 32, canvas.width - place - 15, 17, 32, 32);
				}
				else if(choice == 2){
					ctx.drawImage(weaponBrownSpriteImage, 0, 0, 32, 32, canvas.width - place - 15, 17, 32, 32);
				}
				else{
					ctx.drawImage(weaponFireSpriteImage, 0, 0, 32, 32, canvas.width - place - 15, 17, 32, 32);
				}					
				place += 48;
				choice ++;
			}
			switch(weaponChoice){
				case 2:
					ctx.beginPath();
					ctx.lineWidth="1";
					ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
					ctx.fillRect(canvas.width - (48*3) - 24, 10, 48, 48);
					break;
				case 3:
					ctx.beginPath();
					ctx.lineWidth="1";
					ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
					ctx.fillRect(canvas.width - (48*2) - 24, 10, 48, 48);
					break;
				case 4:
					ctx.beginPath();
					ctx.lineWidth="1";
					ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
					ctx.fillRect(canvas.width - (48) - 24, 10, 48, 48);
					break;
				default:
					ctx.beginPath();
					ctx.lineWidth="1";
					ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
					ctx.fillRect(canvas.width - (48*4) - 24, 10, 48, 48);
					break;
			}		
		}
	
					//////////////////////////////////////////
					////RENDER FUNCTION DRAWING ALL PICTURES//
					//////////////////////////////////////////
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
						if(weaponSpriteReady && shoot){
							ctx.drawImage(weapon.weaponSpriteImage,weapon.spriteX,0,32,32,weapon.weaponXCoord,weapon.weaponYCoord,32,32);
							weapon.ticker++;
							if(weapon.ticker % weapon.rotateSpeed == 0){
								weapon.spriteX += 32;
								if(weapon.spriteX > 224){
									weapon.spriteX = 0;
								}
							}
						}
						drawWeaponSelect();
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
				ctx.rect(weapon.weaponXCoord,weapon.weaponYCoord,32,32);
				ctx.stroke();
		*/
		

	

			/////////////////////////////////
			////EVENT LISTENER KEYDOWN&UP////
			/////////////////////////////////
			addEventListener("keydown", function(e){
				keysDown[e.keyCode]=true;
				if(!shoot){
				switch(e.which){
					case 49:
						weaponChoice = 1;
						weapon.weaponSpriteImage = canSpriteImage;
						break;
					case 50:
						weaponChoice = 2;	
						weapon.weaponSpriteImage = weaponGreenSpriteImage;
						break;
					case 51:
						weaponChoice = 3;
						weapon.weaponSpriteImage = weaponBrownSpriteImage;

						break;
					case 52:
						weaponChoice = 4;
						weapon.weaponSpriteImage = weaponFireSpriteImage;
						break;
					default:
				}					
						
				}
			}, false);
			
			addEventListener("keyup", function(e){
				delete keysDown[e.keyCode];
			});

			
			
	///////////////////////////////////////////////
	////////////BEGINNING OF GAME LOOP/////////////
	///////////////////////////////////////////////
	
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
		
					//////////////////////////////////
					/////////BottleShooting///////////
					//////////////////////////////////
					if (!shoot){
						weapon.weaponXCoord = player.x;			//Flasche hat stets die gleichen x und y Werte wie der Spieler(wenn nicht geschossen wird),
						weapon.weaponYCoord = player.y; 			// wird jedoch erst in der draw Funktion gemalt, wenn shoot == true ist 
					}
					else{
						if(!zombieHit){
							weapon.weaponXCoord+=weapon.weaponVelX; 	//wenn shoot == true, dann verändert die Flasche ihre x und y Werte, mit normalen physikalischen
							weapon.weaponYCoord-= weapon.grav;			//GLeichungen
							weapon.grav-=0.2 ;
						}
						else{
							weapon.weaponXCoord-=weapon.weaponVelX/3; 	
							weapon.weaponYCoord-= weapon.grav;			
							weapon.grav-=1 ;
						}
					}
					
		if(!player.dead){
			player.velX*=friction;			
			player.velY += gravity;
			player.y += player.velY;
			player.x += player.velX;
			
						///////////////////////////////////////
						////////////Camera FOllowing///////////
						///////////////////////////////////////
						if(player.x < 100){
							if (camera.x < 0){					//Kamera Bewegung x links
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
						if(player.x + playerImage.width > 350){ // Kamera Bewegung X rechts
							player.x = 350 - playerImage.width;
							player.velX = 0;
							camera.x -= camera.camShift;
							zombie.x -= camera.camShift;
						}
						if(player.jumping && !(player.y > canvas.height/2)){	//Kamera Bewegung Y
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
				    

				////////////////////////////////////////
				//checking for hit and remaining lifes//
				////////////////////////////////////////
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
		///////////////////
		//BottleHitCheck///
		///////////////////
		if(weapon.weaponXCoord +32 > zombie.x +60 && weapon.weaponXCoord +32 < zombie.x + zombieImage.width && weapon.weaponYCoord+ 32 >= zombie.y && shoot && !zombie.dead){
			zombie.dead = true;
			zombieDie();
			zombieHit = true;
		}
		
		////////////////////////////
		////player in y pos check///
		////////////////////////////
		if(player.y >= canvas.height/2 && !player.dead){
			player.y = canvas.height/2;
			player.jumping = false;
		}
		////////////////////////////
		//Weapon Ground Hit Check///
		////////////////////////////
		if(weapon.weaponYCoord + 32> canvas.height/2 + playerImage.height){
			weapon.grav = 3;
			shoot = false;	
			resetWeapon();

		}
	zombieMove(2);
	}
	
	////////////////////////////
	////END OF GAME LOOP////////
	////////////////////////////
	
	
	
	
var main = function(){
	update(); 
	render();
	requestAnimationFrame(main);
}
main();