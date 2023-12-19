const fs = require("fs/promises");

async function readFile() {
  let fileData;
  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }
  console.log("file parsing done!");
  console.log(fileData.toString());
  console.log("Hi, Y'all");
}

readFile();
