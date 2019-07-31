const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://rafael:rafael@cluster0-jzvld.azure.mongodb.net/test?retryWrites=true&w=majority' , {
    useNewUrlParser: true
});

requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));
app.listen(3001);
