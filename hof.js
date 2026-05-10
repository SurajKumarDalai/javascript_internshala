function name(){
    console.log("hello");
}
function sum(){
    console.log(3+4);
}
function mul(){
    console.log(2*5);
}
function div(){
    console.log(4/2);
}
function mod(){
    console.log(10%2);
}
function run(x){
    x();
}

run(div);