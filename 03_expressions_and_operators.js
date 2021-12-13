console.log(5+20);

var x =5;
var y=5;

console.log(x==y); // it will give true 
console.log("is both the x and y are equal or not" + x==y); // it will give false 

console.log(`is both the x and y are equal or not : ${x==y}`); // it will give true nd we will study during ES6

//-------------------Practise-------------------

/* 
  1. what will be output of 3**3?
  => 27 it means 3^3 i.e (**=^) (3*3*3) (i.e exponentiation operator)

*/

// Write a program for swap of two numbers using third variable

var a=5;
var b=10;
var c=b;
b=a;
a=c;

console.log(a);
console.log(b);

// Write a program for swap of two numbers without using third variable

var a=5;
var b=10;

a=a+b;
b=a-b;
a=a-b;


console.log(a);
console.log(b);

//----Interview Question-----------

//-------Difference between == vs ===   ------------------

var num1 = 5;
var num2 = '5';

console.log(num1==num2); // it will give true
console.log(num1===num2); // it will give false

// == checks only value but === checks value as well as data type