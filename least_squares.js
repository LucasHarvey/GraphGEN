//These are the formulas for a linear function
// y = ax + b
//
// a = (n*sum(xy) - sum(x)*sum(y)) / (n*sum(x^2) - sum (x)^2)
// b = (sum(y) * sum (x^2)  - sum (x) * sum (xy) ) / n*sum(x^2) - (sum (x))^2

var x_array = []
var y_array = []

//this function draws the trend line
function draw_trend_line(){
  //return array of a,b
  fill_arrays();
  var params_good = check_inputs();

  if (!params_good){
    return false
  }

  if (x_array.length == 0){
    return false
  }

//this is what is being executed below: var parameters = calculate_parameters(2);
  draw_result(calculate_parameters(2));

}

//this function fills the arrays with the points from the pts array
function fill_arrays() {

  for (i=0; i<pts.length; i++){
    x_array.push(pts[i][0])
    y_array.push(pts[i][1])
  }

}

//this function verifies that the inputs are adequate
function check_inputs(){

// make sure x array and y array are the same length
    if (x_array.length != y_array.length){
      alert("size of arrays don't match" + x_array.length + " " + y_array.length);
      return false;
    }

  return true

}

//this function calculates the parameters for the best fit equation
  function calculate_parameters(size){

    if (size == 2) {
      // sum variables
      var sum_xy = 0;
      var sum_x = 0;
      var sum_y = 0;
      var sum_x2 = 0;

      // n
      var n = x_array.length;

      //calculate the sums
      for (i=0; i<n; i++){
        sum_xy += x_array[i] * y_array[i];
        sum_x += x_array[i];
        sum_y += y_array[i];
        sum_x2 += x_array[i] * x_array[i]
      }

      // calculate a and b
      var a = (n*sum_xy - sum_x*sum_y) / (n*sum_x2 - sum_x * sum_x)
      var b =  (sum_y * sum_x2  - sum_x * sum_xy) / (n*sum_x2 - sum_x*sum_x)

      // set & return parameters
      var parameters = [];
      parameters[0] = a;
      parameters[1] = b;

      return parameters;
    }

}

//this functions draws the trend line
function draw_result(parameters){

  var x_increments = parseFloat(document.getElementById('x_inc').value)
  var y_increments = parseFloat(document.getElementById('y_inc').value)

  trend_slope = parameters[0]
  b = parameters[1]

  trend_at_width = parseFloat(HEIGHT/2) - ((trend_slope*x_increments * 25 + b) * (20/y_increments))
  trend_at_left = parseFloat(HEIGHT/2) - ((-1*trend_slope*x_increments * 25 + b) * (20/y_increments))
  Line (0,trend_at_left,WIDTH,trend_at_width)

  if (b<0){
    alert("Equation: "+ "y = " + trend_slope + "x " + " " + b);
  }

  else if (b==0){

    	if (a == 1){
    	alert("Equation: y = x");
      }

    	else{
    		alert("Equation: "+ "y = " + trend_slope + "x ")
    	}
    }
    
    else {
    	alert("Equation: "+ "y = " + trend_slope + "x " + " + " + b);
    }

}
