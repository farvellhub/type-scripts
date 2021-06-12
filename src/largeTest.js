const largeFactorial = require("./factorial/largeFactorial").default;
const performance = require('perf_hooks').performance;

let time = performance.now();
for (let i = 0; i < 100; i++) {
    largeFactorial(i);
}
time = performance.now() - time;
console.log(time);