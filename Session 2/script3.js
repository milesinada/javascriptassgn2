let gpa;
let studentName;
let examPoints;
let assignmentPoints;

function registerStudent(){
    studentName=prompt("Enter student name:");
    examPoints=prompt("Enter exam points:");
    assignmentPoints=prompt("Enter assignment points");
    console.log(studentName,examPoints,assignmentPoints);
    displayInfo(studentName,examPoints,assignmentPoints);
}

function displayInfo(a,b,c){
    document.write(`
    <p>Student name: ${a}</p>
    <p>exam points: ${b}</p>
    <p>assignmernt points: ${c}</p>
    `);

}

registerStudent();