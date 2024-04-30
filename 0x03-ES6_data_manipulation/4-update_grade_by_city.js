export default function updateStudentGradeByCity(std, cty, newGrade){
  return std
    .filter((stud) => stud.location == cty)
    .map((stud) => {
      let grades = newGrade.find((grade) => grade.studId == stud.id);
      let grade = grades ? grades.grade : "N/A";
      return { ...stud, grade };
     });
}
