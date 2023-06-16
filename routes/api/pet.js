const express = require('express')

const { pet } = require('../../controllers')

const { authCheck } = require('../../middlewares/authCheck')

console.log(pet, 'petsssss')


const router = express.Router()



router.get('/', pet.allPets)
router.post('/', authCheck, pet.createPets)
router.delete('/:petId', pet.createPets)

module.exports = router