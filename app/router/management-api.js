const express = require("express");
const router = express.Router();
const AuthMiddleWare = require("../middleware/auth-middleware");
const AuthController = require("../controller/auth");
const managementBooks = require('../controller/management-book')

const initAPIs = (app) => {
    router.get('/get-books', managementBooks.getDataBooks)
    router.get('/save/:title/:author', managementBooks.insertBooks)
    router.post("/api/auth/login", AuthController.login);
    router.post("/api/auth/register", AuthController.register);
    router.use(AuthMiddleWare.isAuth);

    return app.use("/", router);
}

module.exports = initAPIs