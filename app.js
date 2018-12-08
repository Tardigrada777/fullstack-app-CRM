const express = require("express");

const app = express();

let data = {
    message: "working",
    id: 6
};

app.get("/", (req, res) => {
    res.status(200).json(data);
});

module.exports = app;