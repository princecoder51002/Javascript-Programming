/* 
 six data types that are primitives

 => undefined : typeof instance === "undefined"
 => Boolean : typeof instance === "boolean"
 => Number : typeof instance === "number"
 => String : typeof instance === "string"
 => BigInt : typeof instance === "bigint"
 => Symbol : typeof instance === "symbol"
*/

var myName = "prince Wadhwa";

console.log(myName);
 // typeof operator 
console.log(typeof(myName)); //string

//--------------------

var myAge = 26;

console.log(typeof(myAge)); //number

var i_m_prince = true;

console.log(typeof(i_m_prince)); //boolean

//----------------------Practise----------------

console.log(10 + "20");// 1020 concate in javascript using +
console.log(9 - "5");// bug bcz it will give 4

console.log(true + true ); // 2 bcz true=1 then true+true = 1+1=2
console.log(true + false); // 1
console.log(false - true); // -1

/* 

Ques-1: Difference between null and undefined?

 var iAmStandBy; if we dont assign any value right now then it will be undefined at that moment and that undefined is also a data type
 console.log(iAmStandBy); // undefined


 var iAmUseless = null;
 console.log(iAmUseless); // null
 console.log(typeof(iAmUseless)); // object => again bug in javascript bcz how null can be an data type of object

 Ques-2: what is NaN?

 if we subtract two strings it will give NaN => NaN is a property of the global object , in other words it is a variable in global scope 
 and the initial value of NaN is Not-A-Number

 console.log(isNaN(9087654321)); // false

*/

console.log(NaN===NaN); // false bcz koi nhi janta ki kya hai bss no. nhi hai
console.log(Number.NaN); // NaN
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true bcz NaN is not a no. nd it will give true