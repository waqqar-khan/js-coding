// ----> SetTimeout <----
function myFunction() {
  console.log("Message will print after 2 sec");
}
setTimeout(myFunction, 2000);

//======================================================================================

// ----> SetInterval <----
function myFunction() {
  console.log(
    "Interval triggered! This message will be printed every 1000 milliseconds (1 second)."
  );
}

// Set an interval for 1000 milliseconds (1 second)
const intervalId = setInterval(myFunction, 1000);

// To stop the interval after a certain time (e.g., 5000 milliseconds or 5 seconds)
setTimeout(() => {
  clearInterval(intervalId); // This will stop the interval
  console.log("Interval stopped after 5000 milliseconds.");
}, 5000);

//======================================================================================

// ----> Promise Prototype <----
let myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  let success = true; // Simulating a successful operation

  if (success) {
    resolve("Operation succeeded!"); // Resolve the promise if successful
  } else {
    reject("Operation failed!"); // Reject the promise if unsuccessful
  }
});

// Using the promise
myPromise
  .then((message) => {
    console.log(message); // Output: Operation succeeded!
  })
  .catch((error) => {
    console.error(error); // Output: Operation failed!
  });

//======================================================================================

// ----> debouncing <----
const debouncedSearchHandler = createDebouncedFunction(searchHandler, 500);

function createDebouncedFunction(func, delay) {
  let timeoutId;

  return function debouncedHandler(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

//======================================================================================

// ----> Throtling <----
const throttledSearchHandler = createThrottledFunction(searchHandler, 500);

function createThrottledFunction(func, delay) {
  let throttled = false;

  return function throttledHandler(...args) {
    if (!throttled) {
      func(...args);
      throttled = true;
      setTimeout(() => (throttled = false), delay);
    }
  };
}
