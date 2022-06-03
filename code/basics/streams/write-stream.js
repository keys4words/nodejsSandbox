const fs = require("fs");

const file = fs.createWriteStream("./basics/streams/file.out.stream");
for (let i=0; i<=100; i++){
  file.write(
    "Node.JS\n"
  );
}