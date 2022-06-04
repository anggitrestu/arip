module.exports = (app) => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();


    // check api useers
    router.get("/", function (req, res) {
        res.send("api users");
    });

    // Create a new User
    router.post("/register", users.create);

    // Login a User
    router.post("/login", users.login);

    app.use(`/api/users`, router);
}