const { User } = require("../../models/User");
const bcrypt = require('bcryptjs')


const register = async (req, res, next) => {

    const {password, email} = req.body;
    
    const user = await User.findOne({email})
    
      if (user) {
        throw new Error("Email is already in use");
      }
        
        const hashPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(15))
        
        const newUser = await User.create({password: hashPassword, email })
    
        res.status(201).json({ message: "Register User", status: "success",  newUser})
    }
    
    module.exports = register;