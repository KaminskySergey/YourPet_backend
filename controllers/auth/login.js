const { User } = require("../../models/User");
require("dotenv").config();
const { Unauthorized } = require("http-errors");
const { catchAsync } = require("../../services");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = catchAsync(async (req, res, next) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    // return res.status(401).json({ message: "Email or password is wrong" });
    next(Unauthorized("Email or password is wrong"));
  }
  const passCompare = bcrypt.compareSync(password, user.password);

  if (!passCompare) {
    // return res.status(401).json({ message: "Email or password is wrong" });
    next(Unauthorized("Email or password is wrong"));
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  const result = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true }
  ).select("-createdAt -updatedAt -password");

  res.json({
    status: "success",
    code: 200,
    result,
  });
});

module.exports = login;
