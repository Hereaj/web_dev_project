const express = require("express");
const path = require("path");

const app = express();

const defaultRoute = require("./routes/default");
const restaurantRoute = require("./routes/restaurant");

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", defaultRoute);
app.use("/", restaurantRoute);

// no url that user want to visit 
// placed at the bottom cuz syntax is read as in-order traversal
// no url parameter in function
// connect error : 404
const { error } = require("console");

app.use((req, res) => {
  res.status(404).render("404");
});

// server error :500
app.use((error, req, res, next) => {
  res.status(500).render("500");
})

app.listen(3000);
