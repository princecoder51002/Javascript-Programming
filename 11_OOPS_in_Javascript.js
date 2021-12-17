/*
 What is Object literals?
 => Object literal is simply a key:value pair data structure.
 Storing values and functions together in one container we can refer this as an objects
*/

// How To Create an Object?

let bioData = {
    myName: "Prince Wadhwa",
    myAge: 26,

    getData: function() {
        console.log(`My Name is ${bioData.myName} and my Age is ${bioData.myAge}`);
    },

    // getData (){                        // 2nd way no need to write functions as well after ES6 
    //     console.log(`My Name is ${bioData.myName} and my Age is ${bioData.myAge}`);
    // } 
}

console.log(bioData.getData());

/*
 What if we want object as a value inside a object
*/

let bioData2 = {
    myName: {
        firstName: "prince",
        lastName: "wadhwa",
    },
    myAge: 26,

    getData: function() {
        console.log(`My Name is ${bioData.myName} and my Age is ${bioData.myAge}`);
    },
}

console.log(bioData2.myName.firstName);

/*
 What is this object?
 => The definition of "this" object is that it contains the current context.
 => The this object can have different values depending on where it is placed
*/

console.log(this); // {}, bcz it refers to nothing

function myName() {
    console.log(this); // currently its context is global object also (i.e in browser it will be window of the browser)
}

myName();

const obj = {
    myAge: 26,
    myNameobj (){
        console.log(this.myAge);
    }
}

obj.myNameobj();

//------------Interview Question------------

/*
What will be the output of

const obj = {
    myAge: 26,
    myName: () => {
        console.log(this); now it will return again {} that means a window object bcz "this" will not be used along with arrow functions
    }
}
obj.myName();
*/