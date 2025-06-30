let myname = "Kashav";           
const age = 22;                
var Student = true;          
let address;                  
let phone = null;              

console.log(typeof myname);      
console.log(typeof age);       
console.log(typeof Student); 
console.log(typeof address);   
console.log(typeof phone);  





let userName = prompt("Enter your name:");
let Age = Number(prompt("Enter your age:"));

if (Age < 18) {
  alert(`Hey ${userName}, you are a teen!`);
} else if (Age <= 60) {
  alert(`Welcome ${userName}, you are an adult!`);
} else {
  alert(`Hello ${userName}, you are a senior citizen!`);
}


for(let i=1;i<11;i++){
    console.log(i)
}

let j=2;
while( j < 21){
      console.log(j);
      j+=2;
}


let i=10;
do{
    console.log(i)
    i--;
}while (i>=1);


function calculate(operation,a,b){
    return operation(a,b);
}
const add =(x,y) =>x+y;
console.log(calculate(add,10,5));


function square(num){
    return num*num;
}
console.log(square(5))


const greet = function(user){
    console.log("hello",user)
}
greet("akshat")


function processNumber(num, callback) {
  callback(num);
}

processNumber(5, function (num) {
  console.log("Double is", num * 2); 
});



let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Choose operation: +, -, *, /");

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Error";
    }
    break;
  default:
    result = "Invalid operator!";
}

console.log(`Result: ${result}`);
