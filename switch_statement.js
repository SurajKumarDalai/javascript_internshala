let dayNum = 4;

console.log("day number", dayNum);

let day;
let msg;

// based on Number, give the day

switch(dayNum){
    case 0:
    day = "Sunday";
    break;

    case 1:
    day = "Monday";
    break;

    case 2:
    day = "Tuesday";
    break;

    case 3:
    day = "Wednesday";
    break;

    case 4:
    day = "Thursday";
    break;

    case 5:
    day = "Friday";
    break;

    case 6:
    day = "Saturday";
    break;

    default:
        msg = "Incorrect day number";
}

if(msg){
    console.log("message",msg);
}else{
    console.log("Day of the week is", day);
}

