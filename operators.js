//Operators in JavaScript.

//1. ARITHMETIC OPERATORS
let num1 =100;
let num2 = 50;

//Addition operator
let result = num1 + num2;
console.log(result);

//Multiplication operator
let result1 = num1 * num2;
console.log(result1);

//Division operator
let result2 = num1 / num2;
console.log(result2);

//Subtraction operator
let result3 = num1 - num2;
console.log(result3);

//Modulo operator
let result4 = num1 % num2;
console.log(result4);


//2. INCREMENTAL OPERATORS

//Addition increments
//** post increment
let num3 = 5;
console.log(num3); // here num3 is still 5 beacuse no increment has been applied.
let result5 = num3++;
let answer = num3;

console.log(num3); //here num = 6, because increment has been applied after.
console.log(result5); //here result5 = 5 because the increment(1) is applied after use.
console.log(answer);

//** pre increment
let num4 = 7;
console.log(num4); //here num4 = 7, beacuse no increment has been applied.
let result6 = ++num4;
let answer1 = num4; 

console.log(num4); //here num4 = 8, because increment is applied.
console.log(result6); // here result6 = 8, because increment added before use.
console.log(answer1); //here answer = 8 because increment had already been applied.
