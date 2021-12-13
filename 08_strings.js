/*
 What we will do 
 => Escape character
 => Finding a string in a string
 => Searching for a string in a string
 => Extracting string parts
 => Replacing String content
 => Extracting String characters
 => Other useful methods
*/

//---How to find the length of the string-------------

let myName = "prince wadhwa";
console.log(myName.length);

//------------------------Escape character-------------

let anySentence = "We are the so-called \"vikings\" from the north "; // if we want double or single quotes around any word then use escape character
console.log(anySentence);

// If you dont want to mess, simply use the alternate quotes :--- 'We are the so-called "vikings" from the north '

//------------------------Finding a String in a String-------------------------

const myBioData = "I am prince wadhwa";
console.log(myBioData.indexOf("prince"));
console.log(myBioData.indexOf("prince", 5)); // starting from 5th index

console.log(myBioData.lastIndexOf("p"));

//-----------------------Searching for a string in a string--------------------

/*
  The search() method searches a string for a specified value and returns the position of the match
  The difference from indexOf is it cant take second start position arguement 
*/

let sData = myBioData.search("wadhwa");
console.log(sData);

//----------------------Extracting a Part from a string---------------------------

/*
  There are 3 methods for extracting a part of a string:
  1.slice(start, end)
  2.substring(start, end)
  3.substr(start, length)
*/

// The slice() extracts a part of a string and returns the extracted part in a new string and takes 2 parameters the start and end position 
// and the original array will not be changed

var str = "Apple, Banana, Kiwi";

let res = str.slice(0,4);
console.log(res); // return a string from 0 to 3rd index

let res1 = str.slice(7, -2); // here -2 means it will go to last index then from it , it will move to previous 2 indices
console.log(res1);

// substring() is similar to slice() but the difference is , it cant accept negative values but if we add this negative arguement then it will not have any impact on result

// substr() is similar to slice() but the difference is that the second parameter specifies the length of the extracted path but we will see ans. will be same
// but in case if we give negative value in 2nd parameter then it will not return anything

let res2 = str.substr(0, 4);
console.log(res2);

// let res3 = str.substr(7, -2); No result 

let res4 = str.substr(-4); // it will work bcz we give negative parameter on 1st arguement ---> kiwi

//-------------Replacing String content-------------------------------

/*
=>  String.prototype.replace(searchFor, replaceWith)
    The replace() method replaces a specified value with another value in a string

    Points to remember:- 
    1.The replace() method does not change the string it is called on. it returns a new string
    2.By default, the replace() method replaces only the first match
    3.By default, the replace() method is case sensitive.
*/

let myName2 = "I am prince Wadhwa prince";

let replaceData = myName2.replace("prince", "Parvesh");  
console.log(replaceData); // I am Parvesh Wadhwa prince

// Note :- replace method() will replace only first string it will find not all strings with same Name

//-------------Extracting String Characters---------------------

/*
   There are 3 methods for extracting string characters: 
   charAt(position)
   charCodeAt(position)
   Property access []
*/

// The charAt() method returns the character at a specified index (position) in a string

let str3 = "prince";
console.log(str3.charAt(0));

// The charCodeAt() method returns the unicode of the character at a specified index in a string
// the method returns a UTF-16 code (an integer between 0 and 65535)

console.log(str3.charCodeAt(0));

/*
 The unicode standard provides a unique number for every character, no matter the platform, device, application or language.
 UTF-8 is a popular unicode encoding which has 88-bit code units.
*/

// Property access , ECMAscript 5 allows property access [] on strings

let str4 = "Prince Wadhwa";
console.log(str[0]);

