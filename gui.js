//this function draw the axes
function draw_axis(){
	Line(WIDTH/2,0,WIDTH/2,HEIGHT);
	Line(0,HEIGHT/2,WIDTH,HEIGHT/2);
}

//this function draws ticks on the axes
function draw_ticks(){
	var centre_x = WIDTH/2
	var centre_y = HEIGHT/2
	for(i=0;i<=WIDTH/2;i+=20){
		Line(centre_x+i,centre_y,centre_x+i,centre_y+5)
		Line(centre_x-i,centre_y,centre_x-i,centre_y+5)
	}
	for(i=0;i<=HEIGHT/2;i+=20){
			Line(centre_x,centre_y+i,centre_x - 5,centre_y+i)
			Line(centre_x,centre_y-i,centre_x - 5,centre_y-i)
	}
}

//this function clears the canvas and the input boxes
function reset(){
	clear();
	pts = [];
	draw_axis();
	draw_ticks();
	document.getElementById('x').value = ""
	document.getElementById('y').value = ""
	document.getElementById('slope').value = ""
	document.getElementById('y-intercept').value = ""
	document.getElementById('quad_a').value = ""
	document.getElementById('quad_b').value = ""
	document.getElementById('quad_c').value = ""
  document.getElementById('trig_a').value = ""
	document.getElementById('trig_b').value = ""
	clear_linear_inputs()
	clear_quadratic_inputs()
  clear_trigonometric_inputs()
  document.getElementById("three_dots").innerHTML = "..."
}

//this function clears linear inputs and hides them
function clear_linear_inputs(){

	var elements = document.getElementsByClassName("lin_function_content");
	var w;

	for ( w= 0; w < elements.length; w++) {
		var element = elements[w];
		if (element.classList.contains('reveal_fn')) {
			element.classList.remove('reveal_fn');
		}
	}
}

//this function clears quadratic inputs and hides them
function clear_quadratic_inputs(){

	var elements = document.getElementsByClassName("quad_function_content");
	var w;

	for ( w= 0; w < elements.length; w++) {
		var element = elements[w];
		if (element.classList.contains('reveal_fn')) {
			element.classList.remove('reveal_fn');
		}
	}
}

//this function clears trigonometric inputs and hides them
function clear_trigonometric_inputs(){

	var elements = document.getElementsByClassName("trig_function_content");
	var w;

	for ( w= 0; w < elements.length; w++) {
		var element = elements[w];
		if (element.classList.contains('reveal_fn')) {
			element.classList.remove('reveal_fn');
		}
	}
}


//When the user clicks on the drop-down button,
//toggle between hiding and showing the dropdown content
function show_dropdown() {

  document.getElementById("myDropdown").classList.toggle("show");
  clear_linear_inputs()
  clear_quadratic_inputs()
  clear_trigonometric_inputs()

}

//this function closes the dropdown menu if the user clicks outside of it
window.onclick = function(event) {

  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.trigbtn')) {

    var dropdowns = document.getElementsByClassName("trig-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('reveal_trig_operation')) {
        openDropdown.classList.remove('reveal_trig_operation');
      }
    }
  }

}

// When the user clicks on the linear function,
//toggle between hiding and showing the function inputs
function show_linear_function() {

    document.getElementById("linear_fn").classList.toggle("reveal_fn");
}

// When the user clicks on the quadratic function,
//toggle between hiding and showing the function inputs
function show_quadratic_function() {

    document.getElementById("quadratic_fn").classList.toggle("reveal_fn");
}

function show_trigonometric_function() {

    document.getElementById("trigonometric_fn").classList.toggle("reveal_fn");
}

// When the user clicks on the "..." drop-down button,
//toggle between hiding and showing the trig operations
function show_trig_dropdown() {

    document.getElementById("my_trig_Dropdown").classList.toggle("reveal_trig_operation");

}

//replace "..." by "sin"
function show_sin(){

document.getElementById("three_dots").innerHTML = "sin"

}

//replace "..." by "cos"
function show_cos(){

document.getElementById("three_dots").innerHTML = "cos"

}

//replace "..." by "tan"
function show_tan(){

document.getElementById("three_dots").innerHTML = "tan"

}
