const { createReadStream } = require("fs");

const stream = createReadStream(
  "./big-file.txt",
  { encoding: "utf-8" },
  { highWaterMark: 50000 }
);

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
