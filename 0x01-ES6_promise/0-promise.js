export default function getResponseFromAPI() {
  const requestSucceeded = true;
  return new Promise((resolve, reject) => {
    if (requestSucceeded) {
      resolve();
    } else {
      reject();
    }
  });
}
