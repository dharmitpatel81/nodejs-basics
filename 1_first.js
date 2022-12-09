// 1st way : Commom Js Module
// var buddy = require('./2_second');

// 2nd way : ES6 Module : Use .mjs extension or type = "module" in package.json
// named exports and default exports

// Using named export we can import multiple methods
// import {buddy1 as simple} from './2_second.js';
// import {buddy1, buddy2} from './2_second.js';
// console.log(buddy1);
// console.log(buddy2);

// Using default exports we import only one method
// import buddy3 from './2_second.js';
// console.log(buddy3());
// import favNum from './2_second.js';
// console.log(favNum);

// import simple from './2_Second.js';
// console.log(simple)

import * as simple from './2_Second.js';
console.log(simple.buddy1);
console.log(simple.buddy2);