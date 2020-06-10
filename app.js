const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Ok"))
    .catch((err) => console.log("Erro", err));

app.get("/", (req, res) => {
    res.send("Hello word from node strey");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`O Server está rodadndo na porta : ${port}`);
});
