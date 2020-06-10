const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user");
require("dotenv").config();

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Ok"))
    .catch((err) => console.log("Erro", err));
// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`O Server está rodadndo na porta : ${port}`);
});
