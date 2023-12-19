/* Node JS

const http = require("http");

function handleRequest(request, response) {

    // URL
    // localhost:3000/currenttime
    // localhost:3000

    if (request.url === "/currenttime") {
        response.statusCode = 200;
        response.end("<h1>" + new Date().toISOString() + "</h1>");
    }
    else if (request.url === "/") {
        response.statusCode = 200; // error 404
        response.end("<h1>Hello World!</h1>");
    }
}

const server = http.createServer(handleRequest);

//port number
server.listen(3000); */


const fs = require("fs");
const path = require("path");

// Express JS
const express = require("express");

const app = express();

// middleware Function
app.use(express.urlencoded({extended: false}));

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>name :</label><input type=\"text\" name='username'/><button>Sumbit</button></form>"
  );
}); // localhost:3000/

app.get("/currenttime", function (request, response) {
  response.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.post("/store-user", function (req, res) {
    const userName = req.body.username;

    const filePath = path.join(__dirname, "data", "user.json");

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    existingUsers.push(userName);

    fs.writeFileSync(filePath, JSON.stringify(existingUsers));

    res.send("<h1>Username stored!</h1>");
});

app.get("/users", function(req, res) {
    const filePath = path.join(__dirname, "data", "user.json");

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    let responseData = "<ul>";

    for (const user of existingUsers) {
        responseData += "<li>" + user +  "</li>";
    }

    responseData += "</ul>";

    res.send(responseData);
});

app.listen(3000);
