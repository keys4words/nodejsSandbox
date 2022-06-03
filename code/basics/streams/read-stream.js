const fs = require("fs");

const rs = fs.createReadStream("./basics/streams/file.out.stream");

rs.on("data", (data) => {
  console.log("Read chunk:", data.toString());
});

rs.on("end", ()=>{
  console.log("no more data");
});