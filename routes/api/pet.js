const express = require('express')

const { pets } = require('../../controllers')

// const { authCheck } = require('../../middlewares/authCheck')

console.log(pets, 'petsssss')


const router = express.Router()



router.get('/', pets.allPets)
router.post('/', pets.createPets)
router.delete('/:petId', pets.createPets)

module.exports = router