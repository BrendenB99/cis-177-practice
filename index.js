function adder(x, y) {
  return x + y
}

function subtractor(x, y){
  return x - y
}

function multiplier(x, y){
  return x * y
}


function divider(x, y){
  return x / y
}
function calculate({mathFxn, num1, num2}){
  return calculate({mathFxn: adder, num1: 3, num2: 5})
}

