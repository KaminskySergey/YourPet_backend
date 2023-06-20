const { Pet } = require("../../models/Pet");


const allPets = async (req, res, next) => {
    const result = await Pet.find()
    res.json({
        status: 'succes',
        code: 200,
        result
    })
}

module.exports = allPets;