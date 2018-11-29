var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

}


var gurkan = new Image();
gurkan.src = "https://www.miss-thrifty.co.uk/wp-content/uploads/2010/04/cucumber-garden-bugs.jpg";

canvas.addEventListener("click", getClickPosition, false);

var buttons = [new Button("Coop", 1, 15)];

function Button(name, sps, cost) {
	this.name = name;
	this.sps = sps;
	this.cost = cost;
	
}

function getClickPosition(e) {
	var xPos = e.clientX;
	var yPos = e.clientY;
	
	if(xPos > 50 && xPos < 50 + 500 && yPos > 50 && yPos < 50 + 500) {
		increase = 10 * Math.max((increase / 9.7), 1);
		
	}
	
}

var TO_RADIANS = Math.PI / 180; 
function drawRotatedImage(img, x, y, angle) {
	
	ctx.save();
	ctx.translate(x + img.width/2, y + img.height/2);
	ctx.rotate(angle * TO_RADIANS);
	ctx.drawImage(img, -(img.width / 2), -(img.height / 2));
	ctx.restore();
}

var angle = 0;
var increase = 0;

function drawButtons() {
	
}

function tick() {
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	var score = Math.floor(angle / 360);
	angle += increase;
	if(increase > 0) increase -= 0.1;
	if(increase < 0) increase += 0.1;
	
	drawRotatedImage(gurkan, 50, 50, angle);
	ctx.font = "30px Arial";
	ctx.fillText("Varv: " + score, 50, 550);
	
}

setInterval(tick, 10);
