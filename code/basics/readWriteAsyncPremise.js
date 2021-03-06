const fs = require("fs").promises;
const path = require("path");

const filepath = path.join(process.cwd(), "basics", "text.txt");

async function run(){
  try{
    const contents = await fs.readFile(filepath, "utf-8");
    console.log(contents);
  } catch (error) {
    console.error(error);
  }
}