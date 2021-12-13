// The javascript Math Object allows you to perform mathematical tasks on numbers

console.log(Math.PI); // 3.141592653589793

console.log(Math.round(10.256)); // 10, bcz it returns the value of x rounded to its nearest integer if < 10.5 then 10 else 11

console.log(Math.pow(5,6)); // 5^6 = 15625 or we can write it as 5**6

console.log(Math.sqrt(81)); // 9, it returns the square root of num

console.log(Math.abs(-55.5)); // 55.5 , it returns the positive value of num

console.log(Math.ceil(4.4)); // 5, it returns the value of x rounded up to its nearest integer
console.log(Math.ceil(99.1));

console.log(Math.floor(4.7)); // 4, it returns the value of x rounded down to its nearest integer

console.log(Math.min(5, 6, 90, 23, 1 , 56 , 76)); // it returns the minimum value in a list of arguements
console.log(Math.max(5, 6, 90, 23, 1 , 56 , 76)); // it returns the maximum value in a list of arguements

console.log(Math.random()); // to get any random number between 0 and 1 like 0.34, 0.56 , 0.23..etc.

console.log(Math.trunc(4.6)); // 4, it returns the integer part of a number (it means decimal se pehle wali value)
console.log(Math.trunc(-90.34)); // -90

// Note :- If a arguement is a positive number, Math.trunc() is equivalent to Math.floor() otherwise it is equivalent to Math.ceil()


