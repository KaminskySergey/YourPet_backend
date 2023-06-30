const { Pet } = require("../../models/Pet");


const allPetsById = async (req, res, next) => {
const {_id} = req.user;

const result = await Pet.find({user: _id})
    res.json({
        status: "success",
        code: 200,
        result,
      });
}


module.exports = allPetsById;