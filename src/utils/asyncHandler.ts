// Creates a wrapper function that takes an async route handler (fn)
const asyncHandler = (fn: Function) => {
  // Returns a new middleware function with Express parameters
  return (req: any, res: any, next: any) => {
    // Executes the original function and ensures it returns a Promise
    // If an error occurs, it passes the error to Express's error handler using next()
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Exports the asyncHandler function so it can be used in other files
module.exports = { asyncHandler };
