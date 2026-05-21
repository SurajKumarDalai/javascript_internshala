1. Store Data in localStorage ⭐
localStorage.setItem("name", "Suraj");

Stores:

name = Suraj

inside browser.

2. Get Data from localStorage ⭐
const data = localStorage.getItem("name");

console.log(data);
Output
Suraj
3. Remove Data ⭐
localStorage.removeItem("name");

Deletes stored data.

4. Clear All localStorage ⭐
localStorage.clear();

Deletes ALL stored data.

5. Store User Theme ⭐ REAL PROJECT USE
localStorage.setItem("theme", "dark");
Get Theme
const theme = localStorage.getItem("theme");

console.log(theme);
Output
dark
6. sessionStorage Example ⭐
sessionStorage.setItem("user", "Suraj");
Get sessionStorage Data
const data = sessionStorage.getItem("user");

console.log(data);
Output
Suraj
IMPORTANT ⭐

If browser/tab closes:

sessionStorage

data gets deleted.

7. Store Object in localStorage ⭐ IMPORTANT
const user = {

    name: "Suraj",

    age: 25

};

localStorage.setItem("user", JSON.stringify(user));
8. Get Object Back ⭐
const data = JSON.parse(localStorage.getItem("user"));

console.log(data.name);

console.log(data.age);
Output
Suraj
25
MOST IMPORTANT Notes ⭐
Method	Purpose
setItem()	store data
getItem()	get data
removeItem()	delete one item
clear()	delete all
JSON.stringify()	object → string
JSON.parse()	string → object
SUPER IMPORTANT Memory Rule ⭐
localStorage = permanent

sessionStorage = temporary