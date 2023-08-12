const { readFile, writeFile } = require("fs");

// Async => callback
// Syntax
// readFile("path", "encoding", (err, res) => {...})

console.log("Start");
console.log("-----------------");

readFile("./first.txt", "utf-8", (err, data) => {
  if (err) {
    return `Something went wrong. Err: ${err}`;
  }
  let fileOne = data;
  readFile("./second.txt", "utf-8", (err, data) => {
    if (err) {
      return `Something went wrong. Err: ${err}`;
    }
    let fileTwo = data;
    // console.log(`The contents are: ${fileOne}, ${fileTwo}`);
    writeFile(
      "./write.txt",
      `The contents are: ${fileOne}, ${fileTwo}\n`,
      {
        flag: "a",
      },
      (err, data) => {
        if (err) {
          return `Something went wrong. Err: ${err}`;
        }
        console.log("File written successfully");
      }
    );
  });
});

console.log("End");
console.log("---------------");
