/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let RegularTicket=800;
const Children=19;
const student=false;
const SeniorAge=40;

if(student){
   console.log( `student 50% of: ${RegularTicket * 50 / 100}`)
}
if(SeniorAge>=60){
    console.log(`senior people 15% of: ${RegularTicket * 15 / 100}`)
}

if(Children<10){

   console.log( `children : ${ RegularTicket=0}`)
}
else {
    console.log(`regular ticket fare : ${RegularTicket}`)
}

