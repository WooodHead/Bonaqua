
module.exports = app => {
    const bonaqua = require("../controller/UserController");
    var router = require("express").Router();

    router.get("/", bonaqua.getBonaqua);
    router.post("/addBonaqua", bonaqua.addBonaqua);

    app.use('/api/bonaqua', router);
};
