// for loop
// for in
// for of
// while
//do while

//for loop

for(let i =1; i <=100; i++){
    console.log(i);
}

//for in

const user = {Harry:56, Akash: 67, Dev: 78};

for(key in user){
    console.log(user[key])
}

// for of loop

const fruits = ['guava', 'apple', 'mango'];

for (let fruit of fruits){
    console.log(fruit);
}

//whilw loop
// whilw(condition){
//    execute code
// }

print value from 1 to 100
while(value<= 10){
    console.log(value);
    value++;
}

// do while
// do{
//     execute your code
// } while(condition)

let num = 1;
do{
    console.log(num);
    num++;
}while(num <= 5);