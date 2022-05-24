
module.exports = app => {
    const bonaqua = require("../controller/UserController");
    var router = require("express").Router();

    router.get("/", bonaqua.getBonaqua);

    app.use('/api/bonaqua', router);
};
