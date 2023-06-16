const { Pet } = require("../../models/Pet");

const createPets = async (req, res, next) => {
const {_id} = req.user
console.log(_id, 'eeeeeeee')
const addPet = await Pet.create({...req.body, user: _id})

if(addPet){
  
return res.status(201).json({ message: addPet, status: "success" })
  } else {
    res.status(404).json({ message: "Not found", status: "errorr" })
  }
}

module.exports = createPets;