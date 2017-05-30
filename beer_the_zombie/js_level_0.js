

	if(sessionStorage.getItem("current") !=0 && sessionStorage.getItem("current") != null){
		var element = document.getElementById("script0");
		element.outerHTML = "";
		delete element.outerHTML;
		var s = document.createElement('script');
		s.src = 'js_level_'+sessionStorage.getItem("current")+'.js';
		s.id = 'script'+sessionStorage.getItem("current");
		document.getElementById('scriptDIV').appendChild(s);
		
	}
	
	else{
		sessionStorage.setItem("current",0);
		var canvas = document.getElementById('ctx');
		var ctx = canvas.getContext("2d");
		canvas.width = 	920;
		canvas.height = 530;
		var hovering = false;
		var tempX,tempY;
		var loaded = false;
		var spriteX = 0, bottleX = 280, bottleY = 300, ticker = 0;
		window.onload = function(){loaded = true;}
									
										var bgReady = false;
										var bgImage = new Image();
										bgImage.onload = function(){
											bgReady = true;
										}	
										bgImage.src = "images/start_screen/nonpressedBG.png";					

										var bgHoverReady = false;
										var bgHoverImage = new Image();
										bgHoverImage.onload = function(){
											bgHoverReady = true;
										}	
										bgHoverImage.src = "images/start_screen/hoverBG.png";								
										var bottleReady = false;
										var bottleImage = new Image();
										bottleImage.onload = function(){
											bottleReady = true;
										}	
										bottleImage.src = "images/start_screen/bottle.png";
									

	function proceed() {	
		var element = document.getElementById("script0");
		element.outerHTML = "";
		delete element.outerHTML;
		sessionStorage.setItem("current",1);
		location.reload();
	}
	var keysDown = {};
	addEventListener("keydown", function(e){
		keysDown[e.keyCode]=true;
		if(e.keyCode == 32 && e.target == document.body) {
			e.preventDefault();									//Disable Scrolling when space is pressed
		 }	
	});
	addEventListener('mousemove',function(e){
		if(getMousePos(e).x > 318 && getMousePos(e).x < 604 && getMousePos(e).y > 280 && getMousePos(e).y < 350){
			hovering = true;
		}
		else{
			hovering = false;
		}
	});
	addEventListener('click', function(e){
		if(hovering){
			proceed();
		}
	});
	



	
	var style = canvas.currentStyle || window.getComputedStyle(canvas);
	var divPosX =  canvas.getBoundingClientRect().left+ parseFloat(style.marginLeft);	
	var divPosY =  canvas.getBoundingClientRect().top + parseFloat(style.marginTop);	
	function getMousePos(e) {
        return {
          x: e.clientX - divPosX,
          y: e.clientY - divPosY
        };
      }
		var render = function(){
		if(loaded){
			if(bgReady && !hovering){
				ctx.drawImage(bgImage,0,0);
			}
			if(bgHoverReady && hovering){
				ctx.drawImage(bgHoverImage,0,0);
			}
			if(bottleReady){
				ctx.drawImage(bottleImage,spriteX,0,32,32,bottleX,bottleY,32,32);
				ctx.drawImage(bottleImage,spriteX,0,32,32,bottleX + 330,bottleY,32,32);
					ticker++;
					if(ticker % 5 == 0){
						spriteX += 32;
							if(spriteX > 224){
									spriteX = 0;
								}
							}
			}
		}	
	}

	var main = function(){
			render();
			requestAnimationFrame(main);
		}
		main();
}
	window.addEventListener('resize', function(event) {
	clearTimeout(resizeTimeout);
	var resizeTimeout = setTimeout(function(){
		window.location.reload();
	}, 600);
	});
/*
	document.getElementById("rstrt").onclick = function(){
		var r = confirm("Do you really want to restart ? ");
		if(r){ 
			localStorage.setItem("lifes",3);
			localStorage.setItem("coins",0);
			sessionStorage.setItem("current", 0);
			location.reload();
		}		
	}	*/