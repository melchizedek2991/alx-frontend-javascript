export default function updateStudentGradeByCity(stds, city, newGrade){
  return stds
    .filter((stud) => stud.location == city)
    .map((stud) => {
      let grades = newGrade.find((grade) => grade.studId == stud.id);
      let grade = grades ? grades.grade : "N/A";
      return { ...stud, grade };
     });
}

/* eslint-disable
export default function updateStudentGradeByCity(students, city, newGrade){
  return students
    .filter((student) => student.location == city)
    .map((student) => {
      let grades = newGrade.find((grade) => grade.studentId == student.id);
      let grade = grades ? grades.grade : "N/A";
      return { ...student, grade };
     });
}*/
