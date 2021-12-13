/*
 => Date Methods
 => Time Methods
*/

/*
 Javascript Date Objects represent a single moment in time in a platform-independent format. Date objects contain a number that 
 represents milliseconds since 1 january 1970 UTC

 There are 4 ways to create a new Date Object

 new Date()
 new Date(year, month, day, hours, minutes, seconds, milliseconds) // it takes 7 or less arguements
 new Date(milliseconds) // we cannot avoid month section
 new Date(date string)

*/

//--------------------new Date()-----------------------

// Date Objects are created with the new Date() constructor

let currentDate = new Date();
console.log(currentDate); //2021-12-11T07:15:57.671Z this is timezone right now but we cant understand it right now

console.log(currentDate.toLocaleString()); // readable form 11/12/2021, 12:49:16
console.log(currentDate.toString()); // easily readable form Sat Dec 11 2021 12:50:14 GMT+0530 (India Standard Time)

console.log(Date.now()); // 1639207260799,  it returns the numeric value corresponding to the current time that is the number of milliseconds elapsed since january 1, 1970 00:00:00 UTC

/* 
 new Date(year, month, .......)
 7 numbers specify year, month, hour, minute, second, and millisecond (in that order)
 Note : Javascript counts month from 0 to 11
 January is 0 and December is 11
*/

var d = new Date(2021, 11, 24, 10, 33, 30, 45);
console.log(d.toLocaleString()); // 24/12/2021, 10:33:30

var d1 = new Date(2021);
console.log(d1.toLocaleString()); // 01/01/1970, 05:30:02

// Note: We always have to give month arguement if we dont give then it will give false result and also if we dont give time parameters it will also give time and to handle this we will deal with it later in this section

// new Date(milliseconds) creates a new Date object as zero time plus milliseconds
var d2 = Date.now();
console.log(d2); // 1639208191304

console.log(new Date(d2).toLocaleString()); // 11/12/2021, 13:06:54
console.log(new Date(0));// if we simply pass 0 then we know there is only one date we remember and i.e 1 january 1970
console.log(new Date(86400000*2)); // it means 2 days after 1 january 1970 so it will give 1/3/1970, 5:30:00 

let curDate = new Date();

console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getMonth());

//------------------Times Method----------

console.log(curDate.getTime()); // it returns the number of milliseconds since january 1, 1970
console.log(curDate.getHours()); // it returns the hours as 0-23
console.log(curDate.getMinutes());
console.log(curDate.getSeconds());
console.log(curDate.getMilliseconds());

//----------Practise time-----------------

new Date().toLocaleTimeString(); // 11:18:46 pm
new Date().toLocaleDateString(); // 11/12/2021
new Date().toLocaleString(); // 11/12/2021, 11:18:48 pm