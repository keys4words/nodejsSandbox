const fs = require("fs");

const rs = fs.createReadStream("./basics/streams/file.out.stream");
async function run() {
  for await (const chunk of rs) {
    console.log("Read chunk:", chunk.toString());
  }
  console.log("The end");
}

run();