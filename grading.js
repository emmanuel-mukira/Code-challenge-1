const studentMark=document.getElementById(
    'studentMark'
);
const showGrade=document.getElementById(
    'showGrade'
)
function getGrade(){
const mark=parseInt(studentMark.value);
let grade;
if(mark>=80){
    grade='A';
}
else if(mark>=60){
    grade='B';
}
else if (mark>=50){
    grade='C';
}
else if(mark>=40) {
     grade='D';
}
else{grade='E'
}
console.log(grade)
showGrade.innerText=`Your grade is, ${grade}`;
}