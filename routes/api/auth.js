const express = require('express')

const { auth, user } = require('../../controllers')

const { authCheck } = require('../../middlewares/authCheck')




const router = express.Router()



router.post('/register', auth.register)
router.post('/login',  auth.login)
router.get('/current', authCheck,  auth.current)
router.get('/logout', authCheck,  auth.logout)



module.exports = router