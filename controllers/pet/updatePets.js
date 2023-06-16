const { Pet } = require("../../models/Pet")

const updatePets = async () => {
const {_id} = req.user

const updatePets = Pet.findByIdAndUpdate(_id, req.body, {new: true})
res.json({
    status: 'succes',
    code: 200,
    updatePets
})
}

module.exports = updatePets