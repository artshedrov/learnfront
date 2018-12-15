//var power = function(base, exponent) {
//	var result = 1;
//	for (var count = 0; count < exponent; count++)
//		result *= base;
//	return result;
//};

//console.log(power(2, 2));

//function 1
//
//function min(x, y) {
//	if (x < y) return x;
//	else return y;
//}
//console.log(min(-15000, 1000));


//function 2
//
function isEven(x) {
	if (x == 0) return true;
	else if (x == 1) return false;
	else if (x < 0) return isEven(-x);
	else return isEven(x -2);
}
console.log(isEven(-100));
