const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "basics", "text.txt");
const contents = fs.readFileSync(filepath, "utf-8");
console.log(contents);

const upperContents = contents.toUpperCase();
fs.writeFileSync(filepath, upperContents);
console.log("File updated!");