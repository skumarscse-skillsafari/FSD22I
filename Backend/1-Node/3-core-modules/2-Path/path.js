const path = require("path");

// console.log(path);

// console.log(path.sep);

const newPath = path.join("/base-folder", "/sub-folder", "/index.js");
console.log(newPath);

// console.log(__filename);

// console.log(__dirname);

console.log(path.join(__dirname, newPath));

console.log(path.resolve(newPath));
