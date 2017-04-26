
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
		canvas.width = 	920;
		canvas.height = 530;
	

	var gravity = 0.6,	
		friction = 0.8,
		weaponChoice = 0,
		numOfZombies = 5;
	var shoot = false,
		playerImmune = false,
		onLayerOne = false,
		onLayerTwo = false,
		arr = false,
		wasd = true,
		loaded = false,
		zombieHit =false;
	var zombie = new Array();




	document.body.appendChild(canvas);
	window.onload = function(){loaded=true;}
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
								
								var playerDeadReady = false;
								var playerDeadImage = new Image();
								playerDeadImage.onload = function(){
		
									playerDeadReady = true;
								}	
								playerDeadImage.src = "images/player_dummy_dead.png";								
								
								var playerDeadRightReady = false;
								var playerDeadRightImage = new Image();
								playerDeadRightImage.onload = function(){
		
									playerDeadRightReady = true;
								}	
								playerDeadRightImage.src = "images/player_dummy_dead_right.png";								
								
								var playerLeftReady = false;
								var playerLeftImage = new Image();
									playerLeftImage.onload = function(){
									playerLeftReady = true;
								}	
								playerLeftImage.src = "images/player_dummy_left.png";	
								
								var zombieReady = false;
								var zombieImage = new Image();
								zombieImage.onload = function(){
									zombieReady = true;
								}	
								zombieImage.src = "images/zombie_sprite.png";

								var zombieRightReady = false;
								var zombieRightImage = new Image();
								zombieRightImage.onload = function(){
									zombieRightReady = true;
								}	
								zombieRightImage.src = "images/zombie_sprite_right.png";
								
								var zombieDeadReady = false;
								var zombieDeadImage = new Image();
								zombieDeadImage.onload = function(){
									zombieDeadReady = true;
								}	
								zombieDeadImage.src = "images/enemy_dummy_dead.png";

								var zombieDeadRightReady = false;
								var zombieDeadRightImage = new Image();
								zombieDeadRightImage.onload = function(){
									zombieDeadRightReady = true;
								}	
								zombieDeadRightImage.src = "images/enemy_dummy_dead_left.png";
								
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
								


								var lifeReady = false;
								var lifeImage = new Image();
								lifeImage.onload = function(){
									lifeReady = true;
								}	
								lifeImage.src = "images/life_image.png";
									
								var platformReady = false;
								var platformImage = new Image();
								platformImage.onload = function(){
									platformReady = true;
								}	
								platformImage.src = "images/tonne_1.png";	
	
								var platformSecondReady = false;
								var platformSecondImage = new Image();
								platformSecondImage.onload = function(){
									platformSecondReady = true;
								}	
								platformSecondImage.src = "images/markise_1.png";	
	
	//////////////////////
	
	//////OBJECTS/////////
	//////////////////////	
	for(let i = 0; i < numOfZombies; i++){
		zombie[i] = {		x:Math.floor(Math.random()*canvas.width+canvas.width/2),y:canvas.height/2,
							dead:false,spriteX:0,ticker:0,animSpeed:10,isOnRight:false,
							zombieCurrentImage: zombieImage,lifes:3
		}
	}
	var camera = {
		x:0,
		y:-270,	
		camShift:3		//Fixer Wert, der den Background verschiebt, wenn man aus der "freien Bewegungszone herausgeht"

	}
	
	var platform = {
		x:800,
		y:250,
		initialY:250
	}
	var platform_second = {
		x:1040,
		y:20,
		initialY:20
	}
	var weapon = {
		spriteX:0,
		weaponXCoord:0,
		weaponYCoord:0,
		weaponVelX:10,	//Bestimmmt, wie weit die Flasche geworfen wird
		grav:3,
		ticker:0,
		weaponSpriteImage:canSpriteImage,
		rotateSpeed:5, //Bestimmmt, wie schwer die Flasche ist. 
		direction: true

	}
	var player = {
		speed:3,		//Maximale Geschwindigkeit des Players 
		x:100,			
		y:canvas.height/2,
		jumping:false,
		velX:0,			//aktueller Geschwindigkeitswert -> wird stetig in der Update Funktion verändert
		velY:0,			//GLeiches wie für velX
		dead:false,
		ticker: 0,
		playerCurrentImage:playerImage

	}
	var lifes = {
		amount: 3,
		ticker: 0,
		animationFrame: 0,
		pause: false
	}
		var keysDown = {};
	

	
		///////////////////////////////////////
		/////////////ALL FUNCTIONS/////////////
		///////////////////////////////////////
		
		var zombieMove = function(speed){
			for(i in zombie){
				if (!zombie[i].dead){
					if(zombie[i].isOnRight){
						zombie[i].x-=speed;
						zombie[i].zombieCurrentImage = zombieImage;
						if (zombie[i].x+100<=player.x){
							zombie[i].isOnRight=false;
						}

					}
					if (!zombie[i].isOnRight){
						zombie[i].x+=speed;
						zombie[i].zombieCurrentImage = zombieRightImage;
						if (zombie[i].x-100>player.x){
							zombie[i].isOnRight=true;
							}
						}
				}
			}
		}
		var blink = function(){
			player.ticker++;
			if (player.ticker % 5 > 0 && player.ticker % 5 < 3) {
				ctx.globalAlpha = 0.4;
				ctx.drawImage(player.playerCurrentImage, player.x, player.y);
				ctx.globalAlpha = 1.0;
			}
			else{
				ctx.drawImage(player.playerCurrentImage, player.x, player.y);	
			}
		}
		
		var zombieDie = function(index){
			
				if(zombie[index].isOnRight){
					zombie[index].zombieCurrentImage = zombieDeadImage;
					zombie[index].y = canvas.height -180;
					zombie[index].x += 50
				}
				else{
					zombie[index].zombieCurrentImage = zombieDeadRightImage;
					zombie[index].y = canvas.height -180;
					zombie[index].x -= 50
				}
				if (onLayerOne){
					zombie[index].y = canvas.height/2+152;
				}
				else if (onLayerTwo){
					zombie[index].y= canvas.height-42;
				}
				else{
					zombie[index].y = canvas.height/2+100;
				}
			
		}
		
		var playerDie = function(){
		if (player.playerCurrentImage == playerImage){

			player.playerCurrentImage = playerDeadImage;
			player.y = canvas.height-120; 
		}
		else if (player.playerCurrentImage == playerLeftImage){
			player.playerCurrentImage = playerDeadRightImage;
			player.y = canvas.height-120;
		}
			
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
		var drawLife = function(){
			let place = 0;	
			for (let i = 1; i <= lifes.amount; i++){
				ctx.drawImage(lifeImage, lifes.animationFrame, 0, 32, 32, place + 15 , 17, 32, 32);
				place += 32;
			}
			place = 0;
			for (let i = 0; i < 3; i++){
				ctx.globalAlpha = 0.3;
				ctx.drawImage(lifeImage, 0, 0, 32, 32, place + 15 , 17, 32, 32);
				ctx.globalAlpha = 1;
				place += 32;
			}
		}
		var animationLife = function(){
			if (lifes.pause) {
				lifes.animationFrame = 0;
				lifes.ticker++;
				if (lifes.ticker > 120){
					lifes.pause = false;
					lifes.ticker = 0;
				}
			}
			else{
				lifes.ticker ++;
				if(lifes.ticker % 8 == 0 ){
					lifes.animationFrame += 32;
					if (lifes.animationFrame > 160){
						lifes.ticker = 0;
						lifes.animationFrame = 0;
						lifes.pause = true;
					}
					
					
				}
		}
	}
	
	var trackWeaponDirection = function(){
		if(!shoot && playerImage == player.playerCurrentImage){
			weapon.direction = true;
		}
		else if(!shoot && playerLeftImage == player.playerCurrentImage){
			weapon.direction = false;
		}
					
			
	}
	
					//////////////////////////////////////////
					////RENDER FUNCTION DRAWING ALL PICTURES//
					//////////////////////////////////////////
					var render = function(){
						if(bgReady){
							ctx.drawImage(bgImage,camera.x,camera.y);
						}
						if(platformReady){
							ctx.drawImage(platformImage,platform.x, platform.y);
						}
						if(platformSecondReady){
							ctx.drawImage(platformSecondImage,platform_second.x, platform_second.y);
						}

						
						if(zombieReady){
							for(let i = 0; i < numOfZombies;i++){
									if (zombie[i].dead){
										ctx.drawImage(zombie[i].zombieCurrentImage,zombie[i].x,zombie[i].y);
									}
									else{
										ctx.drawImage(zombie[i].zombieCurrentImage,zombie[i].spriteX,0,81,164,zombie[i].x,zombie[i].y,81,164);
											if(zombie[i].ticker % zombie[i].animSpeed == 0 ){
												zombie[i].spriteX += 81;
												if(zombie[i].spriteX >243){
													zombie[i].spriteX = 0;
												}
											}
									}
									zombie[i].ticker++;
							}
						}
						if(playerReady && !playerImmune){
							ctx.drawImage(player.playerCurrentImage,player.x,player.y);
						}
						else if(playerReady && playerImmune && !player.dead){
							blink();							
						}
						else{
							ctx.drawImage(player.playerCurrentImage,player.x,player.y);
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
						animationLife();
						drawLife();
					}

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
						weapon.weaponVelX = 8
						break;
					case 50:
						weaponChoice = 2;	
						weapon.weaponSpriteImage = weaponGreenSpriteImage;
						weapon.weaponVelX = 15
						break;
					case 51:
						weaponChoice = 3;
						weapon.weaponSpriteImage = weaponBrownSpriteImage;
						weapon.weaponVelX = 6

						break;
					case 52:
						weaponChoice = 4;
						weapon.weaponSpriteImage = weaponFireSpriteImage;
						weapon.weaponVelX = 3
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
		if(!player.dead){
			if(wasd){
				if(65 in keysDown && player.velX > -player.speed){		//KeyLEFT
					player.velX--;
					player.playerCurrentImage = playerLeftImage;
				}
				if(68 in keysDown && player.velX < player.speed){		//KeyRIGHT
					player.velX++;
					player.playerCurrentImage = playerImage;
				}
				if (87 in keysDown && !player.jumping){					//KeyUp
					player.jumping = true; 
					player.velY = -player.speed*5;
				}
				if(32 in keysDown && !playerImmune){
					shoot = true; 
				}
			}
			else if(arr){
				if(37 in keysDown && player.velX > -player.speed){		//KeyLEFT
					player.velX--;
					player.playerCurrentImage = playerLeftImage;
				}
				if(39 in keysDown && player.velX < player.speed){		//KeyRIGHT
					player.velX++;
					player.playerCurrentImage = playerImage;
				}
				if (38 in keysDown && !player.jumping){					//KeyUp
					player.jumping = true; 
					player.velY = -player.speed*5;
				}
				if(32 in keysDown && !playerImmune){
					shoot = true; 
				}
			}
		}
		
					//////////////////////////////////
					/////////BottleShooting///////////
					//////////////////////////////////
					if (!shoot){
						weapon.weaponXCoord = player.x;			//Flasche hat stets die gleichen x und y Werte wie der Spieler(wenn nicht geschossen wird),
						weapon.weaponYCoord = player.y; 			// wird jedoch erst in der draw Funktion gemalt, wenn shoot == true ist 
					}
					else{
					
						if(weapon.direction){
							if(!zombieHit){
								weapon.weaponXCoord+=weapon.weaponVelX;					
								weapon.weaponYCoord-= weapon.grav;			
								weapon.grav-=0.2 ;
						}
							else{			
								weapon.weaponXCoord -= weapon.weaponVelX/3;
								weapon.weaponYCoord -= weapon.grav;			
								weapon.grav -= 1 ;
							}
						}
						else{
							if(!zombieHit){
								weapon.weaponXCoord -= weapon.weaponVelX;					
								weapon.weaponYCoord-= weapon.grav;			
								weapon.grav-=0.2 ;
						}
							else{			
								weapon.weaponXCoord += weapon.weaponVelX/3;
								weapon.weaponYCoord -= weapon.grav;			
								weapon.grav -= 1 ;
							}
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
								for(i in zombie){zombie[i].x += camera.camShift;}
								platform.x += camera.camShift;
								platform_second.x += camera.camShift;
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
							for(i in zombie){zombie[i].x -= camera.camShift;}
							platform.x -= camera.camShift;
							platform_second.x -= camera.camShift;
						}
						if(player.jumping || (!onLayerOne && !onLayerTwo &&!(player.y > canvas.height/2))){	//Kamera Bewegung Y					
									camera.y = (-270 - player.y)/2; 
									platform.y = 270 + platform.initialY + camera.y;
									platform_second.y = 270 + platform_second.initialY + camera.y;
									for(i in zombie){
										if(!zombie[i].dead){
											zombie[i].y = 270+ canvas.height/2 + camera.y
										}	
										else{
											zombie[i].y = 270+ canvas.height/2 + camera.y + 95
										}
											
									}
						}
		}

				////////////////////////////////////////
				//checking for hit and remaining lifes//
				////////////////////////////////////////
				if(!playerImmune){
				for(i in zombie){
					if(player.x + playerImage.width > zombie[i].x && player.x < zombie[i].x + 81 && player.y + playerImage.height >= zombie[i].y && !zombie[i].dead){
						lifes.amount -= 1;
						playerImmune = true;
						setTimeout(function(){playerImmune = false}, 2000);
					}
					if(lifes.amount == 0){
						player.dead = true; 
						playerDie();
					}
					
				}
			
		}
		///////////////////
		//BottleHitCheck///
		///////////////////
		for(i in zombie){
			if(weapon.weaponXCoord +32 > zombie[i].x +60 && weapon.weaponXCoord +32 < zombie[i].x + 81 && weapon.weaponYCoord+ 32 >= zombie[i].y && shoot && !zombie[i].dead){	
				zombie[i].lifes -= 1;
				zombieHit = true;
				if (zombie[i].lifes == 0){
					zombie[i].dead = true;
					zombieDie(i);
				}		
			}
		}
		////////////////////////////
		////player in y pos check///
		////////////////////////////
		if(onLayerOne){
			if(player.y >= 150){
				player.y = 150 ;
				player.jumping = false;
				player.velY = 0;

			}
		}
		else if(onLayerTwo){
				if(player.y >= 15){
				player.y = 15 ;
				player.jumping = false;
				player.velY = 0;		
				}
			
		}
		else if(player.y >= canvas.height/2 && !player.dead){
			player.y = canvas.height/2;
			player.jumping = false;
			player.velY = 0;
		}
		////////////////////////////
		//Weapon Ground Hit Check///
		////////////////////////////
		if(weapon.weaponYCoord + 32> canvas.height/2 + playerImage.height){
			weapon.grav = 3;
			shoot = false;	
			resetWeapon();

		}
		/*First Platform Check*/
		if(camera.x - (player.x+playerImage.width) < -(platform.x +40 - camera.x) && camera.x - player.x >-(platform.x +platformImage.width - 20 -camera.x) &&player.y+playerImage.height < platform.y && player.y+playerImage.height > platform.y -20 && player.velY > 0){
				onLayerOne = true;	
		}
		else if (!(camera.x - (player.x+playerImage.width) < -(platform.x +40 -camera.x) && camera.x - player.x > -(platform.x +platformImage.width - 20 -camera.x))){
			onLayerOne = false;
		}
		/*Second Platform Check*/
		if(camera.x - (player.x+playerImage.width) < -(platform_second.x- camera.x +20) && camera.x - player.x >-(platform_second.x + platformSecondImage.width - 30 -camera.x) && player.y+playerImage.height < platform_second.y && player.y+playerImage.height > platform_second.y -20 && player.velY > 0){
				onLayerTwo = true;	
		}
		else if (!(camera.x - (player.x+playerImage.width) < -(platform_second.x + 20 -camera.x) && camera.x - player.x > -(platform_second.x +platformSecondImage.width - 30 -camera.x))){
			onLayerTwo = false;
		}		
		
	zombieMove(1);
	trackWeaponDirection();
	
		if(loaded){
			document.getElementById('arr').onclick = function(){if(!arr || wasd){arr = true;wasd = false,
				document.getElementById('currentLayout').innerHTML = "currentLayout:ARROWS"
			}}
			document.getElementById('wasd').onclick = function(){if(!wasd || arr){wasd = true;arr = false,
						document.getElementById('currentLayout').innerHTML = "currentLayout:WASD"
			}}
		}
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
		//Malt Bxoxen um den Spieler und die erste Platform herum				
				ctx.beginPath();
				ctx.rect(player.x,player.y,playerImage.width,playerImage.height);
				ctx.stroke();
				ctx.beginPath();
				ctx.rect(platform.x,platform.y,platformImage.width,platformImage.height);
				ctx.stroke();*/
