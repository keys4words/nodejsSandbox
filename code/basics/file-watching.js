const fs = require("fs");
const moment = require("moment");
const file = "./basics/file.txt";


fs.watchFile(file, (current, previous) => {
  const time = moment().format("MMM Do YYYY, h:mm:ss a");
  return console.log(`${file} updated ${time}`);
})