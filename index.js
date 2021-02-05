
let operator
let FirstNum
let SecondNum

//call
function calculate(){
  console.log('big function call....')
  operator = prompt('what maths operation are you trying to do?\nPlease enter +, -, *, or/','')
  FirstNum = parseFloat(prompt(`Enter first number for your ${operator} oporation:`,''))
  SecondNum = parseFloat(prompt(`Enter second number for your ${operator} oporation:`,''))
  console.log(`first ${FirstNum}, second ${SecondNum}`)
  calc(FirstNum, SecondNum)
  
}

//switch between different maths operator
function calc(firstNum, secondNum)
{
  console.log('calculation called...')
  switch(operator)
  {
    case '+':
      add(firstNum, secondNum)
    break;
    case '*':
      times(firstNum, secondNum)
    break;
    case '/':
      divide(firstNum,secondNum)
    break;
    case '-':
      subtract(firstNum,secondNum)
    break;
    default:
      alert('invalid maths operator used')
    break;
  }
}


//add
function add(x,y){
  let result = parseFloat(x+y)
  alert("Here's your result: "+ result)
}
//times
function times(x, y){
  let result = parseFloat(x*y)
  alert("Here's your result: "+ result)
}

//subtract
function subtract(x, y){
  let result = parseFloat(x-y)
  alert("Here's your result: "+ result)
}

//divide
function divide(x, y){
  let result = parseFloat(x/y)
  alert("Here's your result: "+ result)
}
