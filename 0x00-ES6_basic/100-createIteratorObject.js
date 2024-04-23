export default function createIteratorObject(report) {
  let allEmp = [];
  for (const val of Object.values(report.allEmp)) {
    allEmp = [
      ...allEmp,
      ...val,
    ];
  }
  return allEmp;
}
