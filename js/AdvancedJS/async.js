//const fs = require("fs");
const fs = require("fs/promises");

function readFile() {
  let fileData;

  /* fs.readFile("data.txt", (error, filedata) => {
    if (error) {
        ... error description
    }
    console.log("file parsing done!");
    console.log(filedata.toString());
  });
  
*/

  fs.readFile("data.txt").then(fileData => {
    console.log("file parsing done!");
    console.log(fileData.toString());
  }).catch(error => {
    console.log(error);
  });

  console.log("read file function!");
}

readFile();
