
/* 
 => if-else
 => switch statement
 => while loop
 => do while loop
 => for loop
 => for in loop
 => for of loop
 => conditional (ternary) operator
*/

//-------------There are total 5 falsy values in javascript-------------
// => 0, "", undefined, null, NaN, false**

//-------------------Switch Statement---------------

var area = "rectangle";
var PI=3.142, l=5, b=4, r=3;

switch(area) {
    case 'square':
        console.log("The area of circle: "+PI*r*r);
        break;
    case 'triangle':
        console.log("The area of triangle: "+l*b/2);
        break;
    case 'rectangle':
        console.log("the area of rectangle: "+l*b);
        break;
    default:
        console.log("Please enter valid data");
}

//-------------------while loop----------------



