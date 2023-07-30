// Globals => module, require(""), __dirname
// require("path") => import
// module.exports => {}

const users = require("./user-obj.js");
const fruits = require("./fruits.js");
const user = require("./user-details.js");
const { displayUser } = require("./display-user.js");
// console.log(users);
// console.log(fruits);
// console.log(user);
// displayUser("SkillSafari");
console.log(module);
