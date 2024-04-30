export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return list.map((art) => art.id);
  }
  return [];
}
