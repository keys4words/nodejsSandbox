const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "basics", "text.txt");
fs.readFile(filepath, "utf-8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log(contents);
  const lowerContents = contents.toLowerCase();

  setInterval(()=>process.stdout.write("**** \n"), 1).unref();
  setTimeout(()=> updateFile(filepath, lowerContents), 10);
});

function updateFile(filepath, contents){
 fs.writeFile(filepath, contents, function(err){
    if (err) throw err;
    console.log("File updated");
  });
}