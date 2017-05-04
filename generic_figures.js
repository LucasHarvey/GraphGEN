
// ========================================================================
// erase the canvas
// ========================================================================
function clear(){
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// ========================================================================
// draw a circle
// ========================================================================
function Circle(x, y, r){
	ctx.fillstyle = "#FFFFFF";
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}

// ========================================================================
// draw a rectangle
// ========================================================================
function Rectangle(x, y, w, h){
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.closePath();
	ctx.fill();
}

// ========================================================================
// draw a line
// ========================================================================
function Line (x1,y1,x2,y2){
		ctx.fillstyle = "black"
		ctx.beginPath();
		ctx.moveTo(x1,y1)
		ctx.lineTo(x2,y2)
		ctx.stroke();
  }
