let num1 = 23, num2 =67;
//1. Conditional statements
let num3 = num1 > num2 ? num1 : num2;
var answer; //global variable

//2. Functions
function add () {
   var answer = num1 + num2;
   console.log(answer);
}

function sub (){
    
}

// add();
// sub();

function myFunction () {
   let counter = 10;
   for (var item = 0; item < 5; item++){
      console.log("item", item);
   }
}

myFunction();