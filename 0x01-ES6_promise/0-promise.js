export const getResponseFromAPI = () => {
    const success = true;
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Response from API");
        } else {
            reject("Error fetching data from API");
        }
    });
};

