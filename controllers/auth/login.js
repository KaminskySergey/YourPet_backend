const { User } = require('../../models/User')
require("dotenv").config();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const {SECRET_KEY} = process.env;

const login = async (req, res) => {
    const {password, email} = req.body;
    const user = await User.findOne({email})

    if(!user){
        return res.status(401).json({ message: "Email or password is wrong" })
    }
    const passCompare = bcrypt.compareSync(password, user.password)

    if(!passCompare){
        return res.status(401).json({ message: "Email or password is wrong" })

    }
    
    
    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    await User.findByIdAndUpdate(user._id, {token})
    const result = {email, token}
    res.json({
        status: 'success',
        code: 200,
        // повертаємо токін
        result
    })
}

module.exports = login;