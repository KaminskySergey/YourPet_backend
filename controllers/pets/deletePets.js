const { Pet } = require("../../models/Pet")

const deletePets = async (req, res, next) => {
    const {petId} = req.params
    const deletePet = await Pet.findByIdAndRemove(petId)
    if(deletePet){
        return res.status(200).json({ message: "pet deleted", status: "success" })
      } 
        return res.status(404).json({ message: "Not found" })
}

exports.module = deletePets