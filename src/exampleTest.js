const factorial = require("./factorial/exampleFactorial");
const performance = require('perf_hooks').performance;

let time = performance.now();
for (let i = 0; i < 100; i++) {
    factorial(i);
}
time = performance.now() - time;
console.log(time);