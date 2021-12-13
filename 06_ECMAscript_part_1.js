/* 
  Now Its time for modern javascript
  features of ECMAscript 2015 is also known as ES6

  ====>  LET VS. CONST VS. VAR

  var => function scope
  let, const => block scope

  we cant change the value of const whereas we can change in let and var

*/

var myName = "prince";
console.log(myName);

myName = "parvesh";
console.log(myName);

console.log("************************");

let myName2 = "prince";
console.log(myName2);

myName2 = "parvesh";
console.log(myName2);

console.log("************************");

// const myName3 = "prince";
// console.log(myName3);

// myName3 = "parvesh";
// console.log(myName3);

//------------Now We will see difference between let , const and var-------------------

function biodata() {
    var Firstname = "princy";
    console.log(Firstname);

    if(true) {
        var myLastName = "wadhwa ji";
        console.log("inner "+ myLastName);
        console.log("inner "+ Firstname);

    }

    console.log("innerOuter "+ myLastName);
}

biodata();

function biodata1() {
    const Firstname = "princy";
    console.log(Firstname);

    if(true) {
        let myLastName = "wadhwa ji";
        console.log("inner "+ myLastName);
        console.log("inner "+ Firstname);

    }

    // console.log("innerOuter "+ myLastName);
}

// console.log(FirstName);
biodata1();

/* 

  Now 2nd topic Template Strings(Template Strings)

*/ 

for(let num=1; num<=10; num++) {
    let tableOf = 12;
    console.log(tableOf + ' * ' + num + ' = ' + tableOf*num);

    //-----another way using template string

    console.log(`${tableOf} * ${num} = ${tableOf*num}`);
}

//------------ 3rd topic Default parameters also an interview ques.---------------

function mult(a, b) {
    return a*b;
}

console.log(mult(5)); // NaN , it will not give error as less arguements but it will give error as not a number as 5 will be passed to a and b will be anything

/* 
  4th topic :-Now We will study about arrow functions (Fat Arrow Functions)

  DrawBacks :- 1.  We can call the traditional function before or after decleration but incase of arrow functions it cant be possible 
                   it will give error if we call the function before initializing 
  Benefits  :-   1. In case if we want to write single line of code then we dont want to use return keyword and no parenthesis required while returning inase of arrow functions 
*/

console.log(sum());

function sum() {
    let a=5, b=6;
    let sum= a+b;

    return `the sum of a+b is ${sum}`;
}

console.log(sum());

const sum1 = () => 
     `the sum of a+b is ${(a=5)+(b=6)}`; // it can also be written as `the sum of a+b is ${sum}`

console.log(sum1());

