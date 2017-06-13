

		var canvas = document.getElementById('ctx');
		var ctx = canvas.getContext("2d");
		canvas.width = 	920;
		canvas.height = 530;
		
		var gravity = 0.6,	
			friction = 0.8,
			weaponChoice = 1,
			numOfZombies = 15,
			coinsCollected = 0,
			textAnimationTicker = 0,
			textCounter = 0;
		var shoot = false,
			playerImmune = false,
			arr = false,
			wasd = true,
			loaded = false,
			zombieHit =false,
			interaction = false,
			shopIsOpen = false,
			startAnimation = true,
			startText = true,
			nextText = false,
			canPressNext = false;
		var loading = "loading",
			loadingTicker = 0;
			dot = ".";

		var zombie = new Array();
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
									playerImage.src = "images/player_sprite.png";
											
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
									playerLeftImage.src = "images/player_sprite_left.png";	
									
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
										
									var tonneReady = false;
									var tonneImage = new Image();
									tonneImage.onload = function(){
										tonneReady = true;
									}	
									tonneImage.src = "images/tonne.png";	
		
									var markiseReady = false;
									var markiseImage = new Image();
									markiseImage.onload = function(){
										markiseReady = true;
									}	
									markiseImage.src = "images/markise_red.png";
									var markiseGreenReady = false;
									var markiseGreenImage = new Image();
									markiseGreenImage.onload = function(){
										markiseGreenReady = true;
									}	
									markiseGreenImage.src = "images/markise_green.png";
									var markiseBlueReady = false;
									var markiseBlueImage = new Image();
									markiseBlueImage.onload = function(){
										markiseBlueReady = true;
									}	
									markiseBlueImage.src = "images/markise_blue.png";
									var markiseGreyReady = false;
									var markiseGreyImage = new Image();
									markiseGreyImage.onload = function(){
										markiseGreyReady = true;
									}	
									markiseGreyImage.src = "images/markise_grey.png";
									var markiseYellowReady = false;
									var markiseYellowImage = new Image();
									markiseYellowImage.onload = function(){
										markiseYellowReady = true;
									}	
									markiseYellowImage.src = "images/markise_yellow.png";
									var markiseOrangeReady = false;
									var markiseOrangeImage = new Image();
									markiseOrangeImage.onload = function(){
										markiseOrangeReady = true;
									}	
									markiseOrangeImage.src = "images/markise_orange.png";
									var coinReady = false;
									var coinImage = new Image();
									coinImage.onload = function(){
										coinReady = true;
									}	
									coinImage.src = "images/coin_image.png";
									var explosionReady = false;
									var explosionImage = new Image();
									explosionImage.onload = function(){
										explosionReady = true;
									}	
									explosionImage.src = "images/explo.png";
									
										var zombieSpriteHitReady = false;
									var zombieSpriteHitImage = new Image();
									zombieSpriteHitImage.onload = function(){
										zombieSpriteHitReady = true;
									}	
									zombieSpriteHitImage.src = "images/zombie_sprite_hit.png";		
									
									var zombieSpriteRightHitReady = false;
									var zombieSpriteRightHitImage = new Image();
									zombieSpriteRightHitImage.onload = function(){
										zombieSpriteRightHitReady = true;
									}	
									zombieSpriteRightHitImage.src = "images/zombie_sprite_right_hit.png";	
										
									var armReady = false;
									var armImage = new Image();
									armImage.onload = function(){
										armReady = true;
									}	
									armImage.src = "images/arm_sprite.png";										
									
									var armLeftReady = false;
									var armLeftImage = new Image();
									armLeftImage.onload = function(){
										armLeftReady = true;
									}	
									armLeftImage.src = "images/arm_sprite_left.png";										
									
									var armCanReady = false;
									var armCanImage = new Image();
									armCanImage.onload = function(){
										armCanReady = true;
									}	
									armCanImage.src = "images/arm_sprite_bier.png";										
									
									var armCanLeftReady = false;
									var armCanLeftImage = new Image();
									armCanLeftImage.onload = function(){
										armLeftReady = true;
									}	
									armCanLeftImage.src = "images/arm_sprite_bier_left.png";	

									var armBrownReady = false;
									var armBrownImage = new Image();
									armBrownImage.onload = function(){
										armBrownReady = true;
									}	
									armBrownImage.src = "images/arm_sprite_brown.png";										
									
									var armBrownLeftReady = false;
									var armBrownLeftImage = new Image();
									armBrownLeftImage.onload = function(){
										armBrownLeftReady = true;
									}	
									armBrownLeftImage.src = "images/arm_sprite_brown_left.png";									

									var armFireReady = false;
									var armFireImage = new Image();
									armFireImage.onload = function(){
										armFireReady = true;
									}	
									armFireImage.src = "images/arm_sprite_fire.png";										
									
									var armFireLeftReady = false;
									var armFireLeftImage = new Image();
									armFireLeftImage.onload = function(){
										armFireLeftReady = true;
									}	
									armFireLeftImage.src = "images/arm_sprite_fire_left.png";									
									
									var shopBGReady = false;
									var shopBGImage = new Image();
									shopBGImage.onload = function(){
										shopBGReady = true;
									}
									shopBGImage.src = "images/shop_bottles.png";
									
									var crunchReady = false;
									var crunchImage = new Image();
									crunchImage.onload = function(){
										crunchReady = true;
									}
									crunchImage.src = "images/player_crunch.png";	
									
									var crunchLeftReady = false;
									var crunchLeftImage = new Image();
									crunchLeftImage.onload = function(){
										crunchLeftReady = true;
									}
									crunchLeftImage.src = "images/player_crunch_left.png";

									var textBoxReady = false;
									var textBoxImage = new Image();
									textBoxImage.onload = function(){
										textBoxImageReady = true;
									}
									textBoxImage.src = "images/text.png";


		//////////////////////
		////////SOUNDS////////
		//////////////////////		
		
		var shot = new Audio("sounds/Woosh.wav");
		var song = new Audio("sounds/song.mp3");
		var coinSound = new Audio("sounds/coin_pickup.wav")
		//song.play();
		
		//////////////////////
		//////OBJECTS/////////
		//////////////////////	
		for(let i = 0; i < numOfZombies; i++){
			zombie[i] = {		//x:Math.floor(Math.random()*canvas.width+canvas.width/2)
								x: Math.floor(Math.random()*(4000) + 900), newSpawnX: Math.floor(Math.random()*(1000) + 1000), y:canvas.height/2,
								dead:false,spriteX:0,ticker:0,animSpeed:10,isOnRight:false,
								zombieCurrentImage: zombieImage,lifes:5, gotHit: false, blinkTicker:0
			}
		}
		var camera = {
			x:0,
			y:-270,	
			camShift:3		//Fixer Wert, der den Background verschiebt, wenn man aus der "freien Bewegungszone herausgeht"

		}
		
		var platformGround = new Array();
			platformGround[0] = {x:camera.x+300,y:250,initialY:250,platformImage:tonneImage,onLayerOne:false};
			platformGround[1] = {x:camera.x+1200,y:250,initialY:250,platformImage:tonneImage,onLayerOne:false};
			platformGround[2] = {x:camera.x+3000,y:250,initialY:250,platformImage:tonneImage,onLayerOne:false};
		var platformLevelOne = new Array(); 
			platformLevelOne[0] = {x:camera.x+110,y:30,initialY:30,platformImage:markiseImage,onLayerTwo:false};
			platformLevelOne[1] = {x:camera.x+1035,y:30,initialY:30,platformImage:markiseGreenImage,onLayerTwo:false};
			platformLevelOne[2] = {x:camera.x+1370,y:-155,initialY:-155,platformImage:markiseBlueImage,onLayerTwo:false};
			platformLevelOne[3] = {x:camera.x+1200,y:-155,initialY:-155,platformImage:markiseOrangeImage,onLayerTwo:false};
			platformLevelOne[4] = {x:camera.x+870,y:-155,initialY:-155,platformImage:markiseYellowImage,onLayerTwo:false};
			platformLevelOne[5] = {x:camera.x+1600,y:-100,initialY:-100,platformImage:markiseGreyImage,onLayerTwo:false};
			platformLevelOne[6] = {x:camera.x+1800,y:-100,initialY:-100,platformImage:markiseBlueImage,onLayerTwo:false};
			platformLevelOne[7] = {x:camera.x+3160,y:30,initialY:30,platformImage:markiseImage,onLayerTwo:false};
			platformLevelOne[8] = {x:camera.x+3330,y:-155,initialY:-155,platformImage:markiseImage,onLayerTwo:false};
			platformLevelOne[9] = {x:camera.x+2985,y:-155,initialY:-155,platformImage:markiseImage,onLayerTwo:false};
			
		var coins = new Array();
		
		for(i in platformLevelOne){
				coins[i] = {x: platformLevelOne[i].x + +60, 
							y: platformLevelOne[i].y -50,ticker:0, spriteX:0, initialY:platformLevelOne[i].y - 50};
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
			direction: true,
			onGround:false,
			hitX:0,
			hitY:0,
			hitYfirst:0

		}
		var player = {
			speed:3,		//Maximale Geschwindigkeit des Players 
			x:550,			
			y: 75, //canvas.height/2,
			jumping:false,
			velX:0,			//aktueller Geschwindigkeitswert -> wird stetig in der Update Funktion verÃ¤ndert
			velY:0,			//GLeiches wie fÃ¼r velX
			dead:false,
			ticker: 0,
			playerCurrentImage:playerImage,
			spriteTicker:0,
			animSpeed:10,
			spriteX:0,
			moving:false,
			onLeftWall:false,
			onRightWall:false,
			inAir:false,
			crouching:false

		}
		var lifes = {
			totalAmount: 3,
			amount: 3,
			ticker: 0,
			animationFrame: 0,
			pause: false
		}
		var explosion = {
			spriteX:0,
			spriteY:0,
			ticker:0,
			animating:false
	
		}
		
		var arm = {
			spriteX:0,
			ticker:0,
			x:player.x+15,
			y:player.y,
			animating:false,
			armCurrentImage: armCanImage
		}
			var keysDown = {};
		

		
			///////////////////////////////////////
			/////////////ALL FUNCTIONS/////////////
			///////////////////////////////////////
			var startAnim = function(){
				if(startText){
					ctx.textAlign = "center";
					let text = ["*BURP*", "What!?", "Ah?", "I´m too drunk...", "What the hell is going on?", "I´ll ask these people if they know something"];
					let textBoxHeight = 100;
					ctx.globalAlpha = 1;
					ctx.fillStyle = "grey";
					ctx.drawImage(textBoxImage,50, 350);
					ctx.fill();
					ctx.font = "12px Viner Hand ITC";
					ctx.fillText("Press the Space bar to continue...", 750,455)
					ctx.font = "35px Viner Hand ITC";
					ctx.fillStyle = "white";	
					ctx.fillText(text[textCounter], canvas.width/2, 425);
					textAnimationTicker += 1;
					if (textAnimationTicker <= textBoxHeight){
						ctx.globalAlpha = 1;
						ctx.drawImage(textBoxImage, 0, 15, 810, 100, 50, 365 + textAnimationTicker, 810, textBoxHeight - textAnimationTicker); 
					}
					if (textAnimationTicker % textBoxHeight == 0){
						canPressNext = true;
					}
					if(nextText){
						textCounter ++;
						if(textCounter == text.length){
							startText = false;
						}
						textAnimationTicker = 0;
						nextText = false;
					}
				}
				else{
					let moveSpeedX = -1;
					let moveSpeedY = 2;
					player.playerCurrentImage = playerLeftImage;
					if (player.y >= canvas.height/2 && player.x > 100){
						moveSpeedX = 2;
						arm.x = player.x - 10;
						player.x -= moveSpeedX;
						arm.armCurrentImage = armCanLeftImage;
					}
					else if(player.x <= 100){
						startAnimation = false;
						player.playerCurrentImage = playerImage;
						arm.armCurrentImage = armCanImage;
					}
					else{
						arm.armCurrentImage = armCanLeftImage;
						player.y += moveSpeedY;
						player.x += moveSpeedX;
						arm.x = player.x - 10;
						arm.y = player.y;
				 }
				}
			}
			var checkInFire = function(){
				for(i in zombie){
					if(weapon.hitX > zombie[i].x -100 && weapon.hitX < zombie[i].x +100 && !player.dead){
						zombie[i].lifes -= 5;
						if (zombie[i].lifes <= 0){
							zombie[i].dead = true;
							zombieDie(i);
						}	
					}
				}
			}
			var spawnZombieleft = function(){
				for (i in zombie){
					if(i % (numOfZombies/5) == 0){
						zombie[i].x = Math.floor(Math.random()*(-500 + 100) - 100);
					}
				}
			}			

			var openShop = function(){
				shopIsOpen = true;
				//canvas.setAttribute("style","-webkit-filter:blur(10px)");
				//while(shopIsOpen){
					ctx.drawImage(shopBGImage,50,50);				
				//}
				
			}
			
			var zombieMove = function(speed){
			for(i in zombie){
				if(zombie[i].x < -500 && !zombie[i].dead && i % (numOfZombies/5) != 0){
					zombie[i].x = zombie[i].newSpawnX;
				}
				if (!zombie[i].dead){
					if(zombie[i].isOnRight){
						if(!zombie[i].gotHit){
							zombie[i].zombieCurrentImage = zombieImage;
							zombie[i].x-=speed;
						}
						else{
							zombie[i].zombieCurrentImage = zombieSpriteHitImage
							zombie[i].x+=speed;
						}
						
						if (zombie[i].x+100<=player.x){
							zombie[i].isOnRight=false;
						}
					}

					else if (!zombie[i].isOnRight){
							if(!zombie[i].gotHit){								
							zombie[i].x+=speed;
							zombie[i].zombieCurrentImage = zombieRightImage;
						}
						else{
							console.log("now");
							zombie[i].zombieCurrentImage = zombieSpriteRightHitImage ;
							zombie[i].x-=speed;
						}						
						}
						if (zombie[i].x-100>player.x){
							zombie[i].isOnRight=true;
							}
						}
				}
			}
			var zombieBlink = function(index){
								 if(!zombie[index].dead && zombie[index].gotHit){
											if(zombie[index].blinkTicker >= 10){
												zombie[index].gotHit = false;
												zombie[index].blinkTicker = 0;
											}						
											if (zombie[index].blinkTicker % 5 > 0 && zombie[index].blinkTicker % 5 < 3) {
												ctx.globalAlpha = 0.4;	
												ctx.drawImage(zombie[index].zombieCurrentImage, zombie[index].spriteX, 0,81,164,zombie[index].x,zombie[index].y, 81, 164);
												ctx.globalAlpha = 1.0;
											}												
										else {
											ctx.drawImage(zombie[index].zombieCurrentImage, zombie[index].spriteX, 0,81,164,zombie[index].x,zombie[index].y, 81, 164);
												if(zombie[index].ticker % zombie[index].animSpeed == 0 ){
														zombie[index].spriteX += 81;
											}
										}
											if(zombie[index].ticker % zombie[index].animSpeed == 0){
														zombie[index].spriteX += 81;
															if(zombie[index].spriteX > 81*3){
																zombie[index].spriteX = 0;
																}
															}
											zombie[index].blinkTicker ++;
											zombie[index].ticker++;		
								}
								}
			var blink = function(){
				player.ticker++;
				if (player.ticker % 5 > 0 && player.ticker % 5 < 3) {
					ctx.globalAlpha = 0.4;
					if(!player.crouching){
						ctx.drawImage(player.playerCurrentImage,player.spriteX,0,64,164,player.x,player.y,64,164);
					}
					else{
						ctx.drawImage(player.playerCurrentImage,player.x,player.y+55);
					}				
					if((player.moving ||player.onLeftWall || player.onRightWall) && !player.inAir){
							if(player.spriteTicker % player.animSpeed == 0 ){
									player.spriteX += 64;
										if(player.spriteX >192){
												player.spriteX = 0;
												}
											}
									player.spriteTicker++;
	
								}								
					else{player.spriteX = 0;}
					ctx.globalAlpha = 1.0;
				}
				else{
					if(!player.crouching){
						ctx.drawImage(player.playerCurrentImage,player.spriteX,0,64,164,player.x,player.y,64,164);
					}
					else{
						ctx.drawImage(player.playerCurrentImage,player.x, player.y+55);
					}
					if((player.moving ||player.onLeftWall || player.onRightWall) && !player.inAir){
							if(player.spriteTicker % player.animSpeed == 0 ){
									player.spriteX += 64;
										if(player.spriteX >192){
												player.spriteX = 0;
												}
											}
									player.spriteTicker++;
								}
											
					else{player.spriteX = 0;}	
				}
			}
			
			var zombieDie = function(index){
				
					if(zombie[index].isOnRight){
						zombie[index].zombieCurrentImage = zombieDeadImage;

					}
					else{
						zombie[index].zombieCurrentImage = zombieDeadRightImage;
					}
					if (checkOnPlatformGround(0)){
						zombie[index].y = canvas.height/2+185;
					}
					else if (checkOnPlatformLevelOne(0)){
						zombie[index].y= canvas.height-20;
					}
					else{
						zombie[index].y = canvas.height/2+130;
					}
				
			}
			
			var playerDie = function(){
					player.dead = true;
				if (player.playerCurrentImage == playerImage || player.playerCurrentImage == crunchImage){
					player.y = camera.y +canvas.height+150; 				
					player.playerCurrentImage = playerDeadImage;
					
				}
				else if (player.playerCurrentImage == playerLeftImage || player.playerCurrentImage == crunchLeftImage){
					player.y = camera.y +canvas.height+150; 		
					player.playerCurrentImage = playerDeadRightImage;
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
					ctx.fillStyle = "rgba(255,255,255, 0.4)";
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
				for (let i = 0; i < lifes.totalAmount; i++){
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
			if(!shoot && playerImage == player.playerCurrentImage || player.playerCurrentImage == crunchImage){
				weapon.direction = true;
			}
			else if(!shoot && playerLeftImage == player.playerCurrentImage || player.playerCurrentImage == crunchLeftImage){
				weapon.direction = false;
			}
						
				
		}
			function checkOnPlatformGround(x){
				if(x==0){for (i in platformGround ){if(platformGround[i].onLayerOne){return true;}}}
				else{for (i in platformGround ){if(platformGround[i].onLayerOne){return platformGround[i].y;}}}
			}
			function checkOnPlatformLevelOne(x){
				if(x==0){for (i in platformLevelOne ){if(platformLevelOne[i].onLayerTwo){return true;}}}
				else{for (i in platformLevelOne ){if(platformLevelOne[i].onLayerTwo){return platformLevelOne[i].y;}}}					
			}
		
						//////////////////////////////////////////
						////RENDER FUNCTION DRAWING ALL PICTURES//
						//////////////////////////////////////////
							var render = function(){
							if(loaded){
							if(bgReady){
								ctx.drawImage(bgImage,camera.x,camera.y);
							}

							if(tonneReady){
								for(i in platformGround){
									ctx.drawImage(platformGround[i].platformImage,platformGround[i].x, platformGround[i].y);
								}
							}
							if(markiseReady){
								for(i in platformLevelOne){
									ctx.drawImage(platformLevelOne[i].platformImage,platformLevelOne[i].x, platformLevelOne[i].y);
								}
							}

							if(zombieReady){
								for(i in zombie){
										if (zombie[i].dead){
											ctx.drawImage(zombie[i].zombieCurrentImage,zombie[i].x,zombie[i].y);

										}
										else if (!zombie[i].dead && !zombie[i].gotHit){
											ctx.drawImage(zombie[i].zombieCurrentImage,zombie[i].spriteX,0,81,164,zombie[i].x,zombie[i].y,81,164);
												if(zombie[i].ticker % zombie[i].animSpeed == 0){
													zombie[i].spriteX += 81;
													if(zombie[i].spriteX >243) {
														zombie[i].spriteX = 0;
													}
												}
											zombie[i].ticker++;											
											}
										else if (zombie[i].gotHit){
											
											zombieBlink(i);
										}
								}
							}
							if(coinReady){
								ctx.drawImage(coinImage,0,0,43,46,15,50,32,32);
								for(i in coins){
									ctx.drawImage(coinImage,coins[i].spriteX,0,43,46,coins[i].x,coins[i].y,43,46);
									if(coins[i].ticker % 5 == 0 ){
										coins[i].spriteX += 43;
										if(coins[i].spriteX > 301){
											coins[i].spriteX = 0;
										}
									}
									coins[i].ticker++;
								}
							}
							if(armReady && !player.dead){
								if(!player.crouching){
									ctx.drawImage(arm.armCurrentImage,arm.spriteX,0,54,84,arm.x,arm.y,54,84);									
								}
								else{
									ctx.drawImage(arm.armCurrentImage,arm.spriteX,0,54,84,arm.x,arm.y+ 55,54,84);								
								}
								if(arm.animating){
										if(arm.ticker % 3 == 0){
										arm.spriteX += 54;
										if (arm.spriteX > 216){
											arm.spriteX = 0;
											arm.animating = false;
										}
									}
									
								}
								arm.ticker++;						
							}
							if(weaponSpriteReady && shoot ){
								ctx.drawImage(weapon.weaponSpriteImage,weapon.spriteX,0,32,32,weapon.weaponXCoord,weapon.weaponYCoord,32,32);
								weapon.ticker++;
								if(weapon.ticker % weapon.rotateSpeed == 0){
									weapon.spriteX += 32;
									if(weapon.spriteX > 224){
										weapon.spriteX = 0;
									}
								}
							}			
							if(playerReady && !playerImmune && !player.crouching && !player.dead){
								ctx.drawImage(player.playerCurrentImage,player.spriteX,0,64,164,player.x,player.y,64,164);
												if((player.moving ||player.onLeftWall || player.onRightWall || startAnimation) && !player.inAir){
													if(player.spriteTicker % player.animSpeed == 0 ){
														player.spriteX += 64;
														if(player.spriteX >192){
															player.spriteX = 0;
														}
													}
													player.spriteTicker++;
												}
											
												else{player.spriteX = 0;}
														
										}
										
							
							else if(playerReady && playerImmune && !player.dead){
								blink();							
							}
							if(playerReady && player.crouching && !playerImmune && !player.dead){
								ctx.drawImage(player.playerCurrentImage, player.x,(player.y+55));
							}
							if(player.dead){
								ctx.drawImage(player.playerCurrentImage,player.x,player.y);
							}
							

							if(explosionReady && weaponChoice == 4 && (weapon.onGround || explosion.animating) && !player.dead ){
										explosion.animating = true;
										ctx.drawImage(explosionImage,explosion.spriteX,explosion.spriteY,200,200,weapon.hitX,weapon.hitY,200,200);
										explosion.ticker++;
										if(explosion.ticker % 3 == 0){
											explosion.spriteX += 200;
											if(explosion.spriteX > 800){
												explosion.spriteX = 0;
												explosion.spriteY += 200;
											}
											if(explosion.spriteY > 600){
												explosion.spriteY = 0;
												explosion.animating = false;
											}
										}
									}

							
							drawWeaponSelect();
							animationLife();
							drawLife();
							
							if((camera.x-player.x) < -4360 && (camera.x-player.x) > - 4560){
								ctx.beginPath();
								ctx.font ="20px Helvetica";
								ctx.fillStyle = "rgba(125,125,125,.9)";
								ctx.fillText("press[E]  to enter",315,camera.y +270+ canvas.height/2 -50);
								ctx.fillStyle = "rgba(0,0,0,0.3)";
								interaction = true;
							}
							else{interaction = false;}
							
								ctx.beginPath();
								ctx.font ="25px Helvetica";
								ctx.fillStyle = "rgba(20,20,20)";
								ctx.fillText("x "+ coinsCollected,50,77);
								ctx.fillStyle = "rgba(0,0,0,0.3)";
							}	
						
						else{
							ctx.font = "50px Helvetica";
							loading += dot;
							ctx.fillText(loading, canvas.width/2-90,canvas.height/2);
							}
						}

				/////////////////////////////////
				////EVENT LISTENER KEYDOWN&UP////
				/////////////////////////////////
				addEventListener("keydown", function(e){
					keysDown[e.keyCode]=true;
					if(e.keyCode == 32 && e.target == document.body) {
						e.preventDefault();									//Disable Scrolling when space is pressed
					}
					if(82 in keysDown){
						if(shopIsOpen){
							shopIsOpen = false;
							//canvas.setAttribute("style","-webkit-filter:blur(0px)");
						}
						else{
							openShop();
						}
					}
					if (32 in keysDown && startAnimation && !nextText && canPressNext){
						nextText = true;
						canPressNext = false;
					}
					if(!shoot){
					switch(e.which){
						case 49:
							weaponChoice = 1;
							weapon.weaponSpriteImage = canSpriteImage;
							weapon.weaponVelX = 8,
							player.playerCurrentImage == playerImage ? arm.armCurrentImage = armCanImage : arm.armCurrentImage = armCanLeftImage;
							break;
						case 50:
							weaponChoice = 2;	
							weapon.weaponSpriteImage = weaponGreenSpriteImage;
							weapon.weaponVelX = 15;
							player.playerCurrentImage == playerImage ? arm.armCurrentImage = armImage : arm.armCurrentImage = armLeftImage;
							break;
						case 51:
							weaponChoice = 3;
							weapon.weaponSpriteImage = weaponBrownSpriteImage;
							weapon.weaponVelX = 6;
							player.playerCurrentImage == playerImage ? arm.armCurrentImage = armBrownImage : arm.armCurrentImage = armBrownLeftImage;
							break;
						case 52:
							weaponChoice = 4;
							weapon.weaponSpriteImage = weaponFireSpriteImage;
							weapon.weaponVelX = 3
							player.playerCurrentImage == playerImage ? arm.armCurrentImage = armFireImage : arm.armCurrentImage = armFireLeftImage;
							break;
						default:
					}					
							
					}
				}, false);
				
				addEventListener("keyup", function(e){
					if(e.keyCode == 83 && !player.dead){		
						player.playerCurrentImage == crunchImage ? player.playerCurrentImage = playerImage : player.playerCurrentImage = playerLeftImage;
						player.crouching = false;
					}
					delete keysDown[e.keyCode];
					
				});

				
				
		///////////////////////////////////////////////
		////////////BEGINNING OF GAME LOOP/////////////
		///////////////////////////////////////////////
		
		var update = function(){

			if(!player.dead && !startAnimation){
				
					if(65 in keysDown && player.velX > -player.speed){	
						player.crouching = false;						//KeyLEFT
						player.velX--;
						player.playerCurrentImage = playerLeftImage;
						switch(weaponChoice){
							case 1: 
								arm.armCurrentImage = armCanLeftImage;
								break;
							case 2:
								arm.armCurrentImage = armLeftImage;
								break;
							case 3:
								arm.armCurrentImage = armBrownLeftImage;
								break;
							case 4:
								arm.armCurrentImage = armFireLeftImage;
								break; 			
						}
					}
					if(68 in keysDown && player.velX < player.speed){
						player.crouching = false;						//KeyRIGHT
						player.velX++;
						player.playerCurrentImage = playerImage;
						switch(weaponChoice){
							case 1: 
								arm.armCurrentImage = armCanImage;
								break;
							case 2:
								arm.armCurrentImage = armImage;
								break;
							case 3:
								arm.armCurrentImage = armBrownImage;
								break;
							case 4:
								arm.armCurrentImage = armFireImage;
								break; 			
						}

					}
					if (87 in keysDown && !player.jumping && player.velY <= 0){					//KeyUp
						player.jumping = true; 
						player.velY = -player.speed*4.6;
					}
					if(32 in keysDown /*&& !playerImmune*/){
						if(!shoot){shot.play();arm.animating = true;}
						if(arm.spriteX > 40){
							shoot = true; 
						}	
					}
					if(83 in keysDown && !(68 in keysDown ||65 in keysDown) && !player.dead){
						player.crouching = true;
						player.playerCurrentImage == playerImage || player.playerCurrentImage == crunchImage ? player.playerCurrentImage = crunchImage : player.playerCurrentImage = crunchLeftImage;
					}				
					if(69 in keysDown && interaction){
						sessionStorage.setItem("coins", coinsCollected);
						sessionStorage.setItem("lifes",lifes.amount);
						sessionStorage.setItem("current",2);
						window.location.reload();
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
					
						
			if(!player.dead && !startAnimation){
				player.velX*=friction;			
				player.velY += gravity;
				player.y += player.velY;
				player.x += player.velX;
				if(arm.armCurrentImage == armImage || arm.armCurrentImage == armBrownImage || arm.armCurrentImage == armFireImage || arm.armCurrentImage == armCanImage){
					arm.x = player.x +15;	
				}
				else{
					arm.x = player.x -10 ;		
				}	
				arm.y = player.y;
				if(player.velX < -.1 || player.velX >.1 ){
					player.moving = true;
				}
				else{player.moving=false;}
				player.velY != gravity ? player.inAir = true: player.inAir = false;


							///////////////////////////////////////
							////////////Camera FOllowing///////////
							///////////////////////////////////////
							if(player.x < 100){
								if (camera.x < 0){					//Kamera Bewegung x links
									player.x  = 100;
									player.velX = 0;
									player.onLeftWall = true;
									camera.x += camera.camShift;
									if(!player.moving){
										weapon.weaponXCoord += camera.camShift;
									}
									for(i in zombie){zombie[i].x += camera.camShift;}
									for (i in platformGround){platformGround[i].x += camera.camShift;}
									for(i in platformLevelOne){platformLevelOne[i].x += camera.camShift;}
									for(i in coins){coins[i].x += camera.camShift;}
									weapon.hitX += camera.camShift;
									
								}
								else { 				//Left Wall Clamping
									player.x = 100;
									player.velX = 0;
									camera.x =0;
								}
							}
							else{player.onLeftWall = false;}
							
							if(player.x + 64 > 350 && player.x + 64 < 360){ // Kamera Bewegung X rechts
								
								if(camera.x > -5000 + canvas.width){
									player.x = 350 - 64;
									player.velX = 0;
									camera.x -= camera.camShift;
									player.onRightWall=true;
									if(!player.moving){
										weapon.weaponXCoord -= camera.camShift;
									}
									for(i in zombie){zombie[i].x -= camera.camShift;}
									for (i in platformGround){platformGround[i].x -= camera.camShift;}
									for(i in platformLevelOne){platformLevelOne[i].x -= camera.camShift;}
									for(i in coins){coins[i].x -= camera.camShift;}
									weapon.hitX -= camera.camShift;
								}
							}
							else if (player.x > 350 && !startAnimation){					// Right Wall Clamping
									camera.x = -5000 + canvas.width;
									if(player.x >= 622){
										player.velX = 0;
										player.x = 622;
									}
							}
							else{player.onRightWall = false;}
							if(player.jumping || (!checkOnPlatformGround() && !checkOnPlatformLevelOne() &&!(player.y > canvas.height/2))){	//Kamera Bewegung Y					
										camera.y = (-270-player.y)/2; 
										weapon.hitY = 270 + weapon.hitYfirst + camera.y;
										for (i in platformGround){platformGround[i].y = 270 + platformGround[i].initialY + camera.y;}
										for(i in platformLevelOne){platformLevelOne[i].y = 270 + platformLevelOne[i].initialY + camera.y;}
										for(i in coins){coins[i].y = (270+coins[i].initialY+camera.y);}
										for(i in zombie){
											if(!zombie[i].dead){
												zombie[i].y = 270+ canvas.height/2 + camera.y ;
											}	
											else{
												zombie[i].y = 270+ canvas.height/2 + camera.y + 125;
											}
												
										}
							}
			}

					////////////////////////////////////////
					//checking for hit and remaining lifes//
					////////////////////////////////////////
					if(!playerImmune){
					for(i in zombie){
						if(player.x + 64 > zombie[i].x +30 && player.x < zombie[i].x + 50 && player.y + playerImage.height-20>= zombie[i].y && !zombie[i].dead){
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
					if(weapon.weaponXCoord +32 > zombie[i].x +60 && weapon.weaponXCoord +32 < zombie[i].x + 81 && weapon.weaponYCoord+ 32 >= zombie[i].y && shoot && !zombie[i].dead && !zombieHit){	
						zombieHit = true;
						zombie[i].gotHit = true;
						if(weaponChoice == 1){
							zombie[i].lifes -= 2;
						}
						else if (weaponChoice == 2 ){
							zombie[i].lifes -= 1.25;
						}
						if (zombie[i].lifes <= 0){
							zombie[i].dead = true;
							zombieDie(i);
							coinsCollected++;
							sessionStorage.setItem("coins",coinsCollected);
						}		
					}
			}
			////////////////////////////
			////player in y pos check///
			////////////////////////////
			if(checkOnPlatformGround(0) &&!player.dead){
				if(player.y +playerImage.height>= checkOnPlatformGround(1)+20){
					player.y = checkOnPlatformGround(1)-playerImage.height+20;
					player.jumping = false;
					player.velY = 0;

				}
			}
			else if(checkOnPlatformLevelOne(0)&&!player.dead){
					if(player.y + playerImage.height>= checkOnPlatformLevelOne(1)+20){
					player.y = checkOnPlatformLevelOne(1)- playerImage.height+20;
					player.jumping = false;
					player.velY = 0;		
					}
				
			}
			else if(player.y >= canvas.height/2 &&!player.dead){
				player.y = canvas.height/2;
				player.jumping = false;
				player.velY = 0;
			}
		
			////////////////////////////
			//Weapon Ground Hit Check///
			////////////////////////////
		if(weapon.weaponYCoord + 32> camera.y +canvas.height+180){	
				weapon.hitX = weapon.weaponXCoord -  80;
				weapon.hitY = weapon.weaponYCoord - 100;
				weapon.hitYfirst = weapon.hitY;
				weapon.grav = 3;
				weapon.onGround = true;
				shoot = false;
				if(weaponChoice == 4){
					checkInFire();
				}
				resetWeapon();

			}
			else{weapon.onGround = false;}
			
			//First Platform Check
			for(i in platformGround){
					if(camera.x - (player.x+64) < -(platformGround[i].x +40 - camera.x) && camera.x - player.x >-(platformGround[i].x + 
					platformGround[i].platformImage.width - 20 -camera.x) && player.y+playerImage.height > platformGround[i].y && 
					player.y+playerImage.height < platformGround[i].y +30 && player.velY > 0){
						platformGround[i].onLayerOne = true;	
					}
					else if (!(camera.x - (player.x+64) < -(platformGround[i].x +40 -camera.x) && 
					camera.x - player.x > -(platformGround[i].x + platformGround[i].platformImage.width - 20 -camera.x))){
						platformGround[i].onLayerOne = false;
					}
				
			}
			//Second Platform Check
			for(i in platformLevelOne){
				if(camera.x - (player.x+64) < -(platformLevelOne[i].x- camera.x +20) && camera.x - player.x >-(platformLevelOne[i].x + 
				platformLevelOne[i].platformImage.width - 30 -camera.x) && player.y+playerImage.height > platformLevelOne[i].y &&
				player.y+playerImage.height < platformLevelOne[i].y +30 && player.velY > 0){
						platformLevelOne[i].onLayerTwo = true;				
				}
				else if (!(camera.x - (player.x+64) < -(platformLevelOne[i].x + 20 -camera.x) && 
				camera.x - player.x > -(platformLevelOne[i].x +markiseImage.width - 30 -camera.x))){
					platformLevelOne[i].onLayerTwo = false;
				}		
			}
			
			/*coinHitCheck*/
			for(i in coins){
				if(camera.x -(player.x + 64) < -(coins[i].x - camera.x) && camera.x - player.x > -(coins[i].x+43-camera.x)&&
				player.y+playerImage.height > coins[i].y && player.y< coins[i].y + coinImage.height){
					coinSound.play();
					coinsCollected+=3;
					sessionStorage.setItem("coins", coinsCollected);
					delete coins[i];
				}
			}


		if(!startAnimation){
			zombieMove(1);
		}	
		
		trackWeaponDirection();
		}
		
		////////////////////////////
		////END OF GAME LOOP////////
		////////////////////////////
		
		
		
		
	var main = function(){
		if(!shopIsOpen){
			update(); 
			render();
		}
		if(startAnimation){
			startAnim();
		}
		
		
		requestAnimationFrame(main);
	}
	spawnZombieleft();
	main();
	
	window.addEventListener('resize', function(event) {
	clearTimeout(resizeTimeout);
	var resizeTimeout = setTimeout(function(){
		window.location.reload();
	}, 600);
	});



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
					ctx.rect(platform.x,platform.y,tonneImage.width,tonneImage.height);
					ctx.stroke();*/