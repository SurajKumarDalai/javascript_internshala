// use if to execute a block of code if condition is true
// use else to execute a block of code if condition is false
// use else if to basically check any new condition
// switch statement 

// whether a number is positive or not 

let num = 5;
if(num > 0){
    console.log("Number is positive");
    }else{
        console.log("Number is negative");
    }

// print grade of students, mark > 90 --> grade 'A', mark >80 and mark<=90 --> 'B'
// marks > 70 and mark <=80 --> 'c' and below this --> 'Fail'

let marks = 70;
let grade;

if (marks > 90){
    grade ='A';
}else if (marks > 80 && marks <= 90){
    grade ='B';
}else if (marks > 70 && marks <= 80){
    grade = 'C';
}else{
    grade = 'Fail';
}

console.log("Grade of student is", grade);