const { User } = require("../../models/User");

const updateUser = async (req, res, next) => {
const {_id} = req.user;

const updateUser = await User.findByIdAndUpdate(_id, req.body, {new: true})

res.json({
    status: 'succes',
    code: 200,
    updateUser
}).select("-password -updatedAt -createdAt -token");
}


module.exports = updateUser