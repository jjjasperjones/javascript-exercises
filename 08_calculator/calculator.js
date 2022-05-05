const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  var total = 0;
  for (var i in a) {
  total += a[i];
}
return total;
};

const multiply = function(a) {
  var total = 1;
  for (var i in a) {
  total *= a[i];
}
return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let factor = 1;
  for (let i=a; i>0; i--){
          factor *= i;}
    return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
