// //  Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.

// Mock function fetchData which simulates fetching data and returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched");
      }, 1000);
    });
  }
  
  // Mock function processData which simulates processing data and returns a Promise
  function processData(data: unknown) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${data} and processed`);
      }, 1000);
    });
  }
  
  // Function executeSequentially to execute fetchData and processData sequentially
  function executeSequentially() {
    fetchData()
      .then(result1 => {
        console.log(result1); // Logs "Data fetched"
        return processData(result1);
      })
      .then(result2 => {
        console.log(result2); // Logs "Data fetched and processed"
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  }
  
  // Execute the function
executeSequentially();
  
  
  
  
  
  
  