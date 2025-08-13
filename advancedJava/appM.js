// module import from ES6_CommonJS. Its ES6 model

// default import
import mul from "/workspaces/JSLEarning/advancedJava/ES6_CommonJS.js";

// named import
import {add} from "/workspaces/JSLEarning/advancedJava/ES6_CommonJS.js";

console.log(mul(2,4));
console.log(add(2,4));

// module imprt in CommonJS
const mathOperations = require("/workspaces/JSLEarning/advancedJava/commonJS.js")
console.log(add(3,3))