/*

 Destructuring in ES6 
 => The destructuring assignment syntax is a javascript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables

*/

/*
 ---------------------Array Destructuring----------------------------------
*/

const myBioData = ["prince", "wadhwa", 19];

let myFname = myBioData[0];
let myLname = myBioData[1];
let myAge = myBioData[2];

console.log(myAge);

let [myFName, myLName, myage] = myBioData;

console.log(myFName);
console.log(myLName);
console.log(myage);

// We can add values too

// let [myF, myL, myA,  myDegree = "B.Sc"] = myBioData;
// console.log(myDegree);

//----------------------------Object Destructuring---------------------------------------------

const BioData = {
    age: 19,
    fname: "prince",
    lname: "wadhwa",
}

console.log(BioData.age);
console.log(BioData.fname);

let {age, fname, lname, myDegree = "B.Sc"} = BioData; // Names of variables must be same incase of object destructuring
console.log(age);

//----------------------Object Properties--------------------------

// we can now use dynamic properties

let meraNaam = "prince";
const myBio = {
    meraNaam : "How Are You??",
    20: "is my Age",
}

console.log(myBio);

// Now if we want to use the value of meraNaam in an object or we can say we want dynamic data then we can put it in [] 

const myBio2 = {
    [meraNaam] : `How Are You ${[meraNaam]} ??`,
    [20 + 6] : "is my age", // we can also perform arithmetic operators inside these []
}

console.log(myBio2);

// No need to write key and value , if both are same

let myName2 = "prince";
let myAge2 = 26;

// const myBio3 = {
//     myName2 : myName2,
//     myAge2 : myAge2
// }

const myBio3 = {myName2, myAge2}

console.log(myBio3);

// --------------------Spread Operator-------------------------

const colors = ["red", "green", "blue", "white"];

const mycolours = [...colors, "yellow", "black"]
// 2nd time add one more colour on top and tell we need to write it again on mycolurs array too

/* 
Note: We can d this also incase of objects
const person = {name: "prince", age: 19}

const sperson = {...person}

console.log(person) and console.log(sperson) will be same
*/

console.log(mycolours);

//----------------Object values()-----------------

const person = {name: "prince", age: 19}
console.log(Object.values(person));
console.log(Object.entries(person)); // it converts object into an array

//--------Convert n-dimension array into one dimension array

const fArray = [
    ["zone-1", "zone-2"],
    ["zone-3", "zone-4"],
    ["zone-5", "zone-6"],
    [["zone-7", "zone-8"]]
];

console.log(fArray.flat(Infinity)); // aruguement is for no. of levels upto we want to flat the array and Infinity is for any level we want