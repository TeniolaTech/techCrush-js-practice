const students = [
{ name: "David", score: 80 }
{ name: "Loveth", score: 60 }
{ name: "peace", score: 50 }
{ name: "Davida", score: 48 }
{ name: "pheobe", score: 35 }
]
 
function summerisedStudent(studentList){
  return studentList.map(student => {
    let grade;
    if (student.score >= 80) grade = "A"
    else if(student.score  >= 60) grade = "B";
    else if (student.score >= 50) grade = "C";
    else if (student.score >= 48) grade = "D";
    else grade = "F";
    return `${student.name} scored ${student.score} - Grade: ${grade} `
  } )

}
let results = summerisedStudent(students)
console.log(results)
