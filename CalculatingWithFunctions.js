function zero(func) {
  return newNumber(0, func);
}
function one(func) {
  return newNumber(1, func);
}
function two(func) {
  return newNumber(2, func);
}
function three(func) {
  return newNumber(3, func);
}
function four(func) {
  return newNumber(4, func);
}
function five(func) {
  return newNumber(5, func);
}
function six(func) {
  return newNumber(6, func);
}
function seven(func) {
  return newNumber(7, func);
}
function eight(func) {
  return newNumber(8, func);
}
function nine(func) {
  return newNumber(9, func);
}

function plus(num1) {
  return function(num2){ return num2 + num1 ; }
}
function minus(num1) {
  return function(num2){ return num2 - num1 ; }
}
function times(num1) {
  return function(num2){ return num2 * num1 ; }
}
function dividedBy(num1) {
  return function(num2){ return num2 / num1 ; }
}

function newNumber(num, func){
  if(!func)
     return num;
  else
     return func(num);
}
