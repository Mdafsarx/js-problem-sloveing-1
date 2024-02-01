/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const mark=80;
let grade;

switch(true){

case(mark>=80 && mark<=100):grade="A+"; break;
case(mark>=70 && mark<80):grade="A";break;
case (mark>=60 && mark<70):grade="A-";break;
case (mark>=50 && mark<60):grade="B";break;
case (mark>=40 && mark<50):grade="C";break;
case (mark>=33 && mark<40):grade="D";break;
case (mark>=0 && mark<33):grade="F";break;

default:grade="invalid";

}console.log(`the ${mark} mark grade is:${grade}`)