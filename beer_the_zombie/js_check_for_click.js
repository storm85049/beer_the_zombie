	var canvas = document.getElementById('ctx');
	var style = canvas.currentStyle || window.getComputedStyle(canvas);
	var divPosX =  canvas.getBoundingClientRect().left+ parseFloat(style.marginLeft);	
	var divPosY =  canvas.getBoundingClientRect().top + parseFloat(style.marginTop);
	var picPosX = document.getElementById('bg').getBoundingClientRect().left + parseFloat(style.marginLeft);
	var picPosY = document.getElementById('bg').getBoundingClientRect().top + parseFloat(style.marginTop);
	var onStart = false,
		onHeart = false;
	function getMousePos(e) {
        return {
		  xTotal:e.clientX,
		  yTotal:e.clientY,
        };
      }

	addEventListener('mousemove',function(e){
		if(getMousePos(e).xTotal > (picPosX+310) && getMousePos(e).xTotal < (picPosX + 398) && 
			getMousePos(e).yTotal > (picPosY + 903)&& getMousePos(e).yTotal < (picPosY +945))
		{
			console.log("now");
			onStart = true;
			document.getElementById('bgRH').style.visibility = "visible";
		}
		else{
			onStart = false;
			document.getElementById('bgRH').style.visibility = "hidden";
		}
		if(getMousePos(e).xTotal - divPosX > 100 && getMousePos(e).xTotal - divPosX  < 132 &&
			getMousePos(e).yTotal - divPosY > 100 && getMousePos(e).yTotal - divPosY < 132){
				onHeart = true;
			}
		else{
				onHeart = false;
		}
	});	
	
	addEventListener('click',function(){
		if(onStart){
			var r = confirm("Do you really want to restart?");
			if(r){
				sessionStorage.setItem("current",0);
				sessionStorage.setItem("lifes",3);
				sessionStorage.setItem("coins",0);
				window.location.reload();
			}
		}
		if(onHeart){
			if(localStorage.getItem("coins") >= 5){
				
			}
		}
	});