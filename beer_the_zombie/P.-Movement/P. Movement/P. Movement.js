// Canvas setup
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;
const gravity = 13;
var time = 0;
var usedTime = 0;

document.body.appendChild(canvas);


// Object: Projectile
var projectile = {
    x: 50,
    y: 200,
    r: 15,
    speedX: 100,
    speedY: -10
}

// Draw function.
function draw(){
    usedTime = time/12;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, projectile.r, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill(); 
    ctx.closePath();
    projectile.x = (projectile.speedX * usedTime) + 50;
    time++;
    if(projectile.y + 2 * projectile.r < canvas.height){
       projectile.y = (gravity * usedTime * usedTime/2) + (projectile.speedY*usedTime) + 200; 
    }
    if(projectile.x >= canvas.width + 2 * projectile.r){
        projectile.x = 50;
        projectile.y = 200; 
        time = 0;
    }
}
setInterval(draw, 17);


