//declare global variables which are used in this file
var loopcounter = 0
var last_x_inc
var last_y_inc

//the draw_adjusted_linear_fn function is used to draw a linear function based on the chosen increments
function draw_adjusted_linear_fn(){

	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)
	eqslope = parseFloat(document.getElementById('slope').value);
	eqintercept = parseFloat(document.getElementById('y-intercept').value);

	left_intercept_adjusted = parseFloat(HEIGHT/2) - ((-1*eqslope*x_increments * 25 + eqintercept) * (20/y_increments))
	width_intercept_adjusted = parseFloat(HEIGHT/2) - ((eqslope * x_increments * 25 + eqintercept) * (20/y_increments))

	if (eqslope == 0){
		Line(0,parseFloat(HEIGHT/2) - (eqintercept*(20/y_increments)),WIDTH,parseFloat(HEIGHT/2) - (eqintercept*(20/y_increments)))
	}

	else{
		Line(0,left_intercept_adjusted,WIDTH,width_intercept_adjusted)
	}
}

//the draw_linear function calls the draw_adjusted_linear_fn function and decides if it must clear the canvas
//before doing so (if the increments have been changed)
function draw_linear(){

	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)

	if (loopcounter !=0){

		if((x_increments != last_x_inc) || (y_increments != last_y_inc)){

			clear();
			draw_axis();
			draw_ticks();
		}
			draw_adjusted_linear_fn()
			last_x_inc = x_increments
			last_y_inc = y_increments

	}

	if (loopcounter == 0){

		draw_adjusted_linear_fn()
		last_x_inc = x_increments
		last_y_inc = y_increments
  	loopcounter+=1
	}

}

//the draw_adjusted_quadratic_fn function is used to draw a quadratic function based on the chosen increments
function draw_adjusted_quadratic_fn(){

	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)
	var min = parseFloat(-1)*25*x_increments; // Minimum x
	var max = 25*x_increments; // Maximum x
	var xstep = 0.1; // How smooth the curve should be
	var quad_a = parseFloat(document.getElementById('quad_a').value)
	var quad_b = parseFloat(document.getElementById('quad_b').value)
	var quad_c = parseFloat(document.getElementById('quad_c').value)
	var ratio_x = x_increments/20

//ctx is the context object

	for (var x = min; x < max; x = x + xstep) {
    var y = (quad_a * x * x + quad_b * x + quad_c)
    if (x == min) {
    	ctx.moveTo((x/x_increments)*20+parseFloat(WIDTH/2), HEIGHT/2 - (y/y_increments)*20); // First point
    }
		else {
    	ctx.lineTo((x/x_increments)*20+parseFloat(WIDTH/2), HEIGHT/2 - (y/y_increments)*20); // Subsequent points
    }

	}
ctx.stroke();

	}

//the draw_quadratic function calls the draw_adjusted_quadratic_fn function and decides if it must clear the canvas
//before doing so (if the increments have been changed)
function draw_quadratic(){

	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)

	if (loopcounter !=0){

			if((x_increments != last_x_inc) || (y_increments != last_y_inc)){
				clear();
				draw_axis();
				draw_ticks();
			}

			draw_adjusted_quadratic_fn()
			last_x_inc = x_increments
			last_y_inc = y_increments

	}

		if (loopcounter == 0){

			draw_adjusted_quadratic_fn()
			last_x_inc = x_increments
			last_y_inc = y_increments
			loopcounter+=1
		}

}

//the draw_adjusted_sin_fn function is used to draw a sin function based on the chosen increments
function draw_adjusted_sin_fn(){

	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)
	var min = parseFloat(-1)*25*x_increments; // Minimum x
	var max = 25*x_increments; // Maximum x
	var xstep = 0.1; // How smooth the curve should be
	var trig_a = document.getElementById('trig_a').value
	var trig_b = document.getElementById('trig_b').value

// ctx is the context object

	for (var x = min; x < max; x = x + xstep) {
  	var y = trig_a*Math.sin(trig_b*x)
  	if (x == min) {
  		ctx.moveTo((x/x_increments)*20+parseFloat(WIDTH/2), HEIGHT/2 - (y/y_increments)*20); // First point
  	}

		else {
  		ctx.lineTo((x/x_increments)*20+parseFloat(WIDTH/2), HEIGHT/2 - (y/y_increments)*20); // Subsequent points
  	}

	}

	ctx.stroke();

}

//the draw_sin function calls the draw_adjusted_sin_fn function and decides if it must clear the canvas
//before doing so (if the increments have been changed)
function draw_sin(){

	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)

	if (loopcounter !=0){

		if((x_increments != last_x_inc) || (y_increments != last_y_inc)){
			clear();
			draw_axis();
			draw_ticks();
		}

	draw_adjusted_sin_fn()
	last_x_inc = x_increments
	last_y_inc = y_increments

	}

	if (loopcounter == 0){

		draw_adjusted_sin_fn()
		last_x_inc = x_increments
		last_y_inc = y_increments
		loopcounter+=1
	}
}

//the draw_adjusted_cos_fn function is used to draw a cos function based on the chosen increments
function draw_adjusted_cos_fn(){

	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)
	var min = parseFloat(-1)*25*x_increments; // Minimum x
	var max = 25*x_increments; // Maximum x
	var xstep = 0.1; // How smooth the curve should be
	var trig_a = document.getElementById('trig_a').value
	var trig_b = document.getElementById('trig_b').value

// ctx is the context object

		for (var x = min; x < max; x = x + xstep) {
		  var y = trig_a*Math.cos(trig_b*x)
		  if (x == min) {
		  	ctx.moveTo((x/x_increments)*20+parseFloat(WIDTH/2), HEIGHT/2 - (y/y_increments)*20); // First point
		  }
			else {
		  	ctx.lineTo((x/x_increments)*20+parseFloat(WIDTH/2), HEIGHT/2 - (y/y_increments)*20); // Subsequent points
		  }
		}

	ctx.stroke();
}

//the draw_cos function calls the draw_adjusted_cos_fn function and decides if it must clear the canvas
//before doing so (if the increments have been changed)
function draw_cos(){
	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)

  if (loopcounter !=0){

		if((x_increments != last_x_inc) || (y_increments != last_y_inc)){
			clear();
			draw_axis();
			draw_ticks();
		}
	draw_adjusted_cos_fn()
	last_x_inc = x_increments
	last_y_inc = y_increments
	}

	if (loopcounter == 0){

		draw_adjusted_cos_fn()
		last_x_inc = x_increments
		last_y_inc = y_increments
		loopcounter+=1
	}

}

//the draw_adjusted_tan_fn function is used to draw a tan function based on the chosen increments
function draw_adjusted_tan_fn(){

	var x_increments = parseFloat(document.getElementById('x_inc').value)
	var y_increments = parseFloat(document.getElementById('y_inc').value)
	var min = parseFloat(-1)*25*x_increments; // Minimum x
	var max = 25*x_increments; // Maximum x
	var xstep = 0.1; // How smooth the curve should be
	var trig_a = document.getElementById('trig_a').value
	var trig_b = document.getElementById('trig_b').value

// ctx is the context object

	for (var x = min; x < max; x = x + xstep) {
		var y = trig_a*Math.tan(trig_b*x)
		if (x == min) {
			ctx.moveTo((x/x_increments)*20+parseFloat(WIDTH/2), HEIGHT/2 - (y/y_increments)*20); // First point
		}
		else {
			ctx.lineTo((x/x_increments)*20+parseFloat(WIDTH/2), HEIGHT/2 - (y/y_increments)*20); // Subsequent points
		}
	}

	ctx.stroke();
}

//the draw_tan function calls the draw_adjusted_tan_fn function and decides if it must clear the canvas
//before doing so (if the increments have been changed)
function draw_tan(){
		var x_increments = parseFloat(document.getElementById('x_inc').value)
		var y_increments = parseFloat(document.getElementById('y_inc').value)

		if (loopcounter !=0){

				if((x_increments != last_x_inc) || (y_increments != last_y_inc)){
					clear();
					draw_axis();
					draw_ticks();
				}

		draw_adjusted_tan_fn()
		last_x_inc = x_increments
		last_y_inc = y_increments
		}

		if (loopcounter == 0){

			draw_adjusted_tan_fn()
			last_x_inc = x_increments
			last_y_inc = y_increments
			loopcounter+=1
		}
}

//the draw_trigonometric calls the appropriate draw function depending on the chosen trigonometric function//
	function draw_trigonometric(){
		if (document.getElementById("three_dots").innerHTML == "sin"){
			draw_sin()}
		else if (document.getElementById("three_dots").innerHTML == "cos") {
			draw_cos()}
		else if (document.getElementById("three_dots").innerHTML == "tan") {
			draw_tan()}
	}
