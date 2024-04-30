export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((art) => art.id);
  }
  return [];
}
