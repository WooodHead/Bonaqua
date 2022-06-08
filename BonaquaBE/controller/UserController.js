const db = require("../models");
const { QueryTypes } = require('sequelize');

exports.getBonaqua = async(req, res) => {

    const bonaqua = await db.sequelize.query(`select t.*, p.InCase, pr.BPrice 
    from SMTTerms.dbo.vGoods_Elements t
    left join SMTTerms.dbo.t_Products p
    on t.Article=p.Article
    left join SMTTerms.dbo.t_Pricelists pr
    on pr.Article=p.Article
    and pr.PLTypeId=1
    where Brand like '%bonaqua%' and FlavorName like '%still%'`, { type: QueryTypes.SELECT });

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

exports.addBonaqua = async(req, res) => {

}