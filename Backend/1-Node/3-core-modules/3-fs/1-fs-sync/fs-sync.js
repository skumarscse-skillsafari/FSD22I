// const fs = require("fs");
// console.log(fs.readFileSync);
// console.log(fs.writeFileSync);

const { readFileSync, writeFileSync } = require("fs");

const fileOne = readFileSync("./first.txt", "utf-8");
// console.log(fileOne);

const fileTwo = readFileSync("./second.txt", "utf-8");
// console.log(fileTwo);

writeFileSync(
  "./write.txt",
  `The written content are: ${fileOne}, ${fileTwo}\n`,
  { flag: "a" }
);
