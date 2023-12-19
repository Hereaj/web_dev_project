const fs = require("fs");

function readFile() {
    try {
        fs.readFileSync("data.json");
    } catch {
        console.log("Error Catch");
    }
    console.log("function finished");
}

readFile();