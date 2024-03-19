require("dotenv").config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const port = process.env.PORT;

app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
