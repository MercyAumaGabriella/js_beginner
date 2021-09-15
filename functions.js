// FUNCTIONS
var answer; //global variable

//1. Static Functions
function add () {
   let num11 = 10, num22 = 20;
   var answer = num11 + num22;
   return answer;
}
console.log("Static Functions");
console.log(add());

//2. Dynamic Functions (Parametarised Functions)
//function with parameters
function sub(a, b){
   let ans = a - b;
   return ans;
}
console.log("Parametarised Functions");
console.log(sub(2,5));
console.log(sub(35, 8));

function myFunction () {
   let counter = 10;
   for (var item = 0; item < 5; item++){
      console.log("item", item);
   }
}
console.log("Function with loop inside");
myFunction();

//3. Functions calling other functions
function divide() {
   var result = sub(15,5) / 2;
   console.log(result);
}
console.log("Functions calling other functions")
divide();

// customising functions
console.log("Customising Functions");
//Function for even numbers
function even(x, y) {
   for (let item = x; item <= y; item++){
      if(item%2 == 0){
         console.log(item);
      }
   }
}

function even2(){
   for (let item = 0; item <= 23; item+=2){
      console.log(item)
   }
}
even2();

//Function for odd numbers.
console.log("Functions for Odd numbers");
function odd(a,b){
   for (item = a; item < b; item++){
      if(item %2 == 1){
         console.log(item);
      }
   }
}// we can also use (item%2 != 0)

odd(6,19);