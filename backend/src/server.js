require("dotenv").config();
import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes";

const app = express();

const port = process.env.PORT;

apiRoutes(app);

app.use(cors());

app.use((req, res) => {
    res.send("404 not found");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
