const { User } = require("../../models/User");

const updateUser = async (req, res, next) => {
  const { _id } = req.user;

  const updateUser = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  }).select("-password -updatedAt -createdAt -token");

  res.json({
    status: "succes",
    code: 200,
    updateUser,
  });
};

module.exports = updateUser;
