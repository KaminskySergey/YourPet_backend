const express = require('express')

const { auth } = require('../../controllers')

const { authCheck } = require('../../middlewares/authCheck')

console.log(auth, 'authhhhh')
console.log(authCheck, 'vvvv')


const router = express.Router()



router.post('/register', auth.register)
router.post('/login',  auth.login)
router.get('/current', authCheck,  auth.current)
router.get('/logout', authCheck,  auth.logout)

module.exports = router