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
console.log("Increments");
let num4 = 7;
console.log(num4); //here num4 = 7, beacuse no increment has been applied.
let result6 = ++num4;
let answer1 = num4; 

console.log(num4); //here num4 = 8, because increment is applied.
console.log(result6); // here result6 = 8, because increment added before use.
console.log(answer1); //here answer = 8 because increment had already been applied.

//Subtraction decrements
//** pre-decrement
console.log("Decrements");
let num5 = 5;
let result7 = --num5;
let answer2 = num5;

console.log(result7);
console.log(num5);

let num6= 9;
let result8 = num6--;
let answer3 = num6;

console.log(result8);
console.log(num6);

//More about increments when we want to add, subtract, multiple, divide and find the modulo of a number with a value more tham 1.
let num7 = 34, num8 = 56,num9 = 78, num10 = 88, num11 = 11;
let result9 = num7 +=2; 

let result10 = num8 -=3;

let result11 = num9 *=4;

let result12 = num10 /=2;

let result13 = num11 %= 2;


//the results of our arithmetics.
console.log("Today's work");
console.log(result9);
console.log(result10);
console.log(result11);
console.log(result12);
console.log(result13);

//2. COMPARISON OPERATORS
// for these, we shall use the the variables sample.

console.log("Comparison operators");
//i. strict comparison operator (===)
let sample1 = 12;
let sample2 = "12";

console.log(sample1 === sample2); 

//ii. not equal to operator (!=)
let sample3 = 26;
let sample4 = 25;

console.log(sample3 != sample4); 

//iii. equal to operator (==)
let sample5 = 190;
let sample6 = 75;

console.log(sample5 >= sample6); 
console.log(sample5 >! sample6); 

// Other operators include less than (<), not equal to type (!==)

//3. LOGICAL OPERATORS
// These operators are used to determine logic between values and variables. For this we shall use the variables value and ans.

console.log("Logical Operators");

// i. Ampersand Operators (&&)
// this operator returns true if both expressions are true, otherwise it is false.

let value1 = 37;
let value2 = 35;

console.log("AND OPERTOR");
//instance where both statements (value1 and vallue2) are TRUE.
console.log( value1 > 36 && value2 < 36); 

//instance where one statement (value1) is false while the other statement (value2) is TRUE.
console.log( value1 < 36 && value2 < 36); 

//instance where both statements (value1 and value2) are FALSE.
console.log( value1 < 36 && value2 > 36); 

//ii. Or (||) operator
// this operator returns true if one of the expressions is true. It only shows false when both expressions are false

//instance where one expression is false, It returns TRUE.
console.log("OR OPERATOR");
console.log( value1 > 36 || value2 < 36);  //returns true
console.log( value1 <36 || value2 > 36);   //returns false

//iii. NOT (!) operator
//this opertor denotes the opposite of the expression
console.log("NOT OPERATOR");
console.log( !(value1 == value2)); //this returns TRUE because it has reversed the answer which is False (it's supposed to be false because it has 37 != 35)

//4. CONDITIONAL OPERATORS
// This is used to assign a variable to a variable based on a condition.

let value3 = 5, value4 = 90;

let ans = (value3 < value4) ? value3 : value4;
console.log("Conditional Operator");  //ans = 5 caz value3 is less than value4
console.log(ans);

/************************THIS IS THE END OF OPERATOR KNOWLEDGE AS OF SEPTEMBER 2021*************************** */
