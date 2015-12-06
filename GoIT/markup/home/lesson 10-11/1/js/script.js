var x = prompt('x?', '');
var n = prompt('n?', '');
function pow(x, n){
  var result = x;
	var i;
	for (i = 1; i < n; i++){
	 result *= x;	
	}
return result;
}
var powResult = pow(x, n);
console.log(powResult);
