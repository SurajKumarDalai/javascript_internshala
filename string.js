let text = "   hello Jon !! hello  ";

console.log("Length of string is ", text.length);

const replacedString = text.replace("hello", "Hii");

console.log(text);
console.log(replacedString);

const replaceAllString = text.replaceAll("hello", "hii");
console.log(replaceAllString);

// Split method 
const splitString = text.split(" ");
console.log(splitString);

let randomText = "suraj, intern, colour";
const randomStringSplit = randomText.split(",");
console.log(randomStringSplit);

// Repeat Method 
// console.log(text.repeat(4));

// Trim Method 
const trimmedString = text.trim();
console.log(trimmedString.length);

const trimStart = text.trimStart();
console.log(trimStart.length);

const trimend = text.trim();
console.log(trimend.length);

// Concant Method 

let firstname = "suraj ";
let lastname = "kumar";

const fullname = firstname.concat(lastname);

console.log(fullname);

// string methods part-ii

let text3 = "Hello John !!"

console.log(text3.charAt(6));

// ASCII codes a-z 65
console.log(text3.charCodeAt(6));

console.log(text3.at(-5));

console.log(text3[2]);

text3[2] = "y"; // not change any charecter of the string 

console.log(text3);

//SLICE METHOD

console.log(text3.slice(2));
console.log(text3.slice(2,6));
console.log(text3.slice(-6));

// SUBSTRING METHOD 

console.log(text3.substring(2));
console.log(text3.substring(2,8));
console.log(text3.substring(-6));

//SUBSTR METHOD

console.log(text3.substr(0, 4));