const process = require('process');
 
process.nextTick(() => {
  console.log('Executed in the next iteration');
});
 
console.log('Executed in the current iteration');