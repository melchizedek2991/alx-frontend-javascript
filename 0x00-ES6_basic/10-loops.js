export default function appendToEachArrayValue(array, appendString) {
  const appArray = [];
  for (const index of array) {
    const val = index;
    appArray.push(appendString + val);
  }

  return appArray;
}
