const db = require("../models");
const { QueryTypes } = require('sequelize');

exports.getBonaqua = async(req, res) => {

    const bonaqua = await db.sequelize.query(`SELECT DISTINCT Capacity  FROM SMTTerms.dbo.vGoods_Elements WHERE Brand like '%bonaqua%'`, { type: QueryTypes.SELECT });

    try {
        if(bonaqua != 0) {
            res.status(200).send(bonaqua);
        } else {
            res.status(404).json({ message: "Couldn't find bonaqua." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};