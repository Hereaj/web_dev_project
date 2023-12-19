const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "restaurant.json");

function readRestaurantData() {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

function writeRestaurantData(restaurant) {
    fs.writeFileSync(filePath, JSON.stringify(restaurant));
}

module.exports = {
    readRestaurantData,
    writeRestaurantData,
};