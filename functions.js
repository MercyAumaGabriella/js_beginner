let num1 = 23, num2 =67;
//1. Conditional statements
let num3 = num1 > num2 ? num1 : num2;
var answer; //global variable

//2. Functions
function add () {
   let num11 = 10, num22 = 20;
   var answer = num11 + num22;
   return answer;
}
//console.log(add());

// add();

//function with parameters
function sub(a, b){
   let ans = a - b;
   return ans;
}

console.log(sub(2,5));
console.log(sub(35, 8));

function myFunction () {
   let counter = 10;
   for (var item = 0; item < 5; item++){
      console.log("item", item);
   }
}

// myFunction();

