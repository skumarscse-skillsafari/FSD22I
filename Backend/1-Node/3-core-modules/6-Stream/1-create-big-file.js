const { writeFileSync } = require("fs");

for (let i = 1; i <= 10000; i++) {
  writeFileSync("./big-file.txt", `This is line no: ${i}\n`, { flag: "a" });
}
