/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/


let MyMark=80;
let friendMark=90;
let message;
let block;
if(MyMark>=80){

    if(friendMark>80){
        console.log('lets go to lunch');
    }
    else if(friendMark>=60){
console.log("dont warry guys good luck next time");
    }
    else if(friendMark >= 40 && friendMark <60){
console.log(message=false)
    }
    else{
console.log(block=true)
    }
}


else{
    console.log("go to home and sleep also act sad")
}
