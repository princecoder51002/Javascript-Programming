var myFriends = ['prince', 'hardik', 'rishabh', 'saksham', 'riya', 52, true]; // we can store any value in an array like string , int, float and boolean value

/* 

What We Will Do 
=> Traversal in an array
=> Searching and filter in an array
=> How to sort and compare an array
=> how to insert, add, replace and delete elements in array (CRUD)
=> Map(), Reduce(), Filter()

*/

//-------------- After ES6 we have for..in and for..of and for..each loop for traversal------------------

var myFriends = ["prince", "hardik", "saksham", "rishabh"];

for(let elements in myFriends) // for..in loop
{
    console.log(myFriends[elements]);
}

for(let elements of myFriends) // for..of loop
{
    console.log(elements);
}

myFriends.forEach(function(element, index, array){ // for-each loop
     console.log(`${element} index: ${index} ${array}`)
});

myFriends.forEach((element,index,array)=> {
    console.log(`${element} index: ${index} ${array}`);
})

/* 
 => clearly we can see that In for..in loop we get the index and in for..of loop we get the element but in for..each loop we get index, element and array
  on which we are working.
  => we can see that we can write for each loop in arrow function as well but the main difference is that , there is a 4th paramter in this function as "this"
  we didnt use it here but we can use it only in traditional function not in arrow function.
*/

//-----------------Searching and filtering in an array--------------------------

console.log(myFriends.indexOf("prince")); // it returns position of that data from first index or return -1 if it doesnt found
console.log(myFriends.lastIndexOf("prince")); //it returns the position from last index or return -1 if it doesnt found
console.log(myFriends.includes("prince")); // it returns boolean and check whether this element is present or not

// For filtering

/* 
   1. Array.prototype.find()
   arr.find(callback(element, index, array, thisArg)

   Returns the found element in the array, if some element in the array satisfies the testing function, or udefined if not found.
   only problem is that it returns only one element

   2. Array.prototype.filter()   very-very-useful

   Returns a new array containing all elements of the calling array for which the provided filtering function returns true
*/

const prices = [200, 300, 350, 450, 670, 790];

const findElem = prices.find((currentVal, index, array) => {
   return currentVal < 400;
})

console.log(findElem); // it can also be written as console.log(prices.find((currentVal) => currentVal < 400));
// => if element or object is not found then it will return undefined

const newPriceTag = prices.filter((elem, index)=> {
    return elem < 400;
});

console.log(newPriceTag);

// Note: If we give the condition which is not satisfied then it will return an empty array

//---------------------------How To Sort An Array-----------------------------

/* 
  => The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting
  the elements into strings, then comparing their sequences of UTF-16 code units values
*/

const months = ["march", "jan", "feb", "dec", "nov"];

console.log(months.sort());

const array1 = [1, 5, 6700, 34, 67, 23, 10000];
console.log(array1.sort());

/* 
  However if no. are stored as strings, "25" is bigger than "100", because "2" is bigger than "1".
  because of this, sort() method will produce an incorrect result when sorting numbers. 
*/

//------------------CRUD Operations---------------------------------

/* 
    Array.prototype.push()
    The push() method adds one or more elements to the end of an array and returns the new length of the array.
*/

const animals = ["pig", "goats", "sheep"];
console.log(animals);

 const count = animals.push("chicken");  // push method returns new length of the array
 console.log(count);
 const count2 = animals.push("mouse", "cow", "rats");
console.log(animals);
console.log(count2);

/* 
  Array.prototype.unshift()
  The unshift() method add one or more elements to the starting of the array and returns the new length of the array
*/

console.log(animals);

 const count3 = animals.unshift("chicken");  // push method returns new length of the array
 console.log(animals);
 console.log(count3);
 const count4 = animals.unshift("mouse", "cow", "rats");
console.log(animals);
console.log(count4);

/* 
=> Array.prototype.pop()
=> The pop() method removes the last element from an array and returns that element. This method changes the length of the array
*/

const plants = ["broccoli", "cauliflower", "kale", "tomato"];

console.log(plants);
console.log(plants.pop());
console.log(plants);

/*
 => Array.prototype.shift()
 The shift() methods removes the first element from an array and returns that element. This method changes the length of the array.
*/


console.log(plants);
console.log(plants.shift());
console.log(plants);

//--------------challenge time------------------------

/*
 1: Add dec at the end of an array
 2: What is the return value of splice method?
 3: update march to March(update)?
 4: Delete June from an array
*/

const months12 = ["jan", "march", "April", "june", "july"];

console.log(months12);
const newMonth = months12.splice(months12.length,0,"dec"); // first paramter is index where we want to add and second is where we want to delete and last is value we want to add
console.log(months12.length);

// The return value of splice method is an empty array bcz we use it to delete elements but here we dont delete so it gives an empty array and hence it will return the deleted element

// const updateMonth = months.splice(1,1,"March");
// console.log(months12);

const check_present = months12.indexOf("march");
if(check_present!=-1) 
{
    var updateMonth = months12.splice(check_present,1,"March");
}

console.log(months12);
console.log(updateMonth);

// Now to delete from an array we can specify how many elements we want to delete after a particaular value 
// (months12.splice("jan", 3)) it will delete 3 elements after jan
// (months12.splice("jan", Infinity))  it will delete all the elements after jan

//---------------------Map() Method-------------------------------------------------

/*
 Array.prototype.map()
 let newArray = arr.map(callback(currentvalue[, index[, array]]){
     return element from newArray, after executing something
 }[, this Arg]);

 Returns a new Array containing the results of calling a function on every element in this array
 imp:- It returns the new array without mutating the origional array
*/

const array12 = [1, 4, 9, 16, 25];

// var newArr = array12.map((currentElem, index, arr) => {
//     return currentElem > 4;
// });

// console.log(array12); //[ 1, 4, 9, 16, 25 ]
// console.log(newArr); //[ false, false, true, true, true ]

var newArr = array12.map((currentElem, index, arr) => { // arr is for showing current array and index is for index of current value
    return `Index no. = ${index} and the value is ${currentElem} belong to ${arr}`;
})

console.log(newArr);

//-------------------Difference Between for-each and Map Method----------------------------
/*
1. The first difference is forEach() method returns undefined and map() returns a new array with the transformed elements
2. The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() 
   and so on after performing a map() method on array that something you cant do with forEach() because, as you might guess, it returns undefined

   Example:- myArray.map(x => x*x).reduce((total, value) => total +value)
*/

//-------Ques-1: Find the square root of each element in an array----------------

let arr = [25, 36, 49, 64, 81];

// let array_of_square_roots = arr.map((currentVal) => {
//       return `The square root of ${currentVal} is ${currentVal**(1/2)}`;
// });

let array_of_square_roots = arr.map((currentVal) => {
           return Math.sqrt(currentVal);
     });

console.log(array_of_square_roots);

//-------Ques-2: Multiply each element by 2 and return only those elements which are greater than 10?

let arr2 = [2, 3, 4, 6, 8];

let array_required = arr2.map((currentVal) => {
       return (currentVal*2);
}).filter((currentElem) => {
    return currentElem > 10;
})

console.log(array_required);

//---------------Reduce() Method-------------------------------------- very very important-----------

/* It is used to flatten an array means to convert the 3d or 2d array into a single dimensional array
The reduce() mehod executes a reducer function (that you provide) on each element of the array, resulting in single output value
The reducer function takes four arguements    

=> accumulator
=> current value 
=> current index
=> source array

Explanation :- Mainly We will use this reduce method to get the sum , multiply, or average etc on returned values after map or reduced or in simple words
We can say that we will use this reduce method to get the single output value

*/

let arr3 = [5, 6, 2];

let sum = arr3.reduce((accumulator, currentElem, index, arr) => {
    debugger;
       return accumulator += currentElem;
}, 7); // after , here we can put initial value for our accumulator

console.log(sum);

let array_required2 = arr2.map((currentVal) => {
    return (currentVal*2);
}).filter((currentElem) => {
 return currentElem > 10;
}).reduce((accumulator, currentElem) => {
    return accumulator += currentElem;
});

console.log(array_required2);

// Now how to flatten the array using reduce method

const arr4 = [
    ["zone-1", "zone-2"],
    ["zone-3", "zone-4"],
    ["zone-5", "zone-6"],
    ["zone-7", "zone-8"]
];

let flatArr = arr4.reduce((accum, currentVal) => {
    return accum.concat(currentVal);
})

console.log(flatArr);

/* 
 Incase if we have nested arrays like this 
 const arr4 = [
    ["zone-1", "zone-2"],
    ["zone-3", "zone-4"],
    ["zone-5", "zone-6"],
    [["zone-7", "zone-8"]]
];

Then it will not convert this into 1d array in once thats why ES2020 a feature came in which any type of nested or dimensioned array can be converted 
into 1d array which we will learn in ECMAscript part 2
*/
