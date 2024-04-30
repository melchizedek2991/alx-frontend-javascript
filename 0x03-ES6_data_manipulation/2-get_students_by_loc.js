export default function getStudentsByLocation(arr, city) {
  return arr.filter((art) => art.location === city);
}
