import express from "express";
import apiController from "./../controllers/apiController";

const router = express.Router();

const apiRoutes = (app) => {
    router.get("/", (req, res) => {
        res.send("Hello World!");
    });

    router.get("/login", apiController.handleLogin);

    return app.use("/api/v1/", router);
};

export default apiRoutes;
