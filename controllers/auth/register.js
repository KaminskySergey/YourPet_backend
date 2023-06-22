const { User } = require("../../models/User");
const bcrypt = require("bcryptjs");
const { catchAsync } = require("../../services");
const { Conflict } = require("http-errors");

const register = catchAsync(async (req, res, next) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    next(Conflict("Email is already in use"));
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(15));

  const createdUser = await User.create({ password: hashPassword, email });

  const newUser = await User.findById(createdUser._id).select(
    "-token -password -createdAt -updatedAt"
  );

  res
    .status(201)
    .json({
      message: "User registered",
      status: "success",
      code: 201,
      newUser,
    });
});

module.exports = register;
