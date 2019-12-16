const express = require("express");

const app = express();

app.use(express.static(__dirname + "assets"));

app.get("/report", (req, res) => {
    res.sendFile(__dirname + "/assets/html/index.html");
});

app.get("/report/characters", (req, res) => {
    res.sendFile(__dirname + "/assets/html/characters.html");
})

app.get("/report/plot", (req, res) => {
    res.sendFile(__dirname + "/assets/html/plot.html");
})

app.listen(8181, () => {
    console.log("server started!");
});