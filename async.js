"use strict";
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
Object.defineProperty(exports, "__esModule", { value: true });
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // 50% chance to succeed or fail
            if (isSuccess) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
// Using the function and handling the rejection with .catch
fetchWithError()
    .then(message => {
    console.log(message);
})
    .catch(error => {
    console.error(error);
});
