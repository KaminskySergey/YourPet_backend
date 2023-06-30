const { Pet } = require("../../models/Pet");


const allPetsById = async (req, res, next) => {
const {userId} = req.params;

const allPets = await Pet.find({user: userId})
    res.json({
        status: "success",
        code: 200,
        allPets,
      });
}


module.exports = allPetsById;