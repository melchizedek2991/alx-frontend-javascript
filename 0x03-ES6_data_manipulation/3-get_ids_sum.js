export default function getListStudentIds(students) {
  return students.reduce((add, val) => add + val.id, 0);
}
