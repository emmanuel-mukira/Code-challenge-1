let grade;
//The function below test the studentMark entered and returns a grade//
function getGrade(studentMark){
    if(studentMark>79){
        grade="A";
    }else if(60<studentMark&&studentMark<80){
        grade="B";
    }else if(48<studentMark&&studentMark<60){
        grade="C";
    }else if(39<studentMark&&studentMark<50){
        grade="D";
    }else if(studentMark<40){
        grade="E";
    }
    return grade;
}
console.log(`Enter grade `+ getGrade(75));
console.log(`The grade is, `+ grade);