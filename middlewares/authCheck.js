const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { catchAsync } = require("../services");
const { Unauthorized } = require("http-errors");

const { SECRET_KEY } = process.env;

const authCheck = catchAsync(async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    // return res.status(401).json({ message: "Not authorized" });
    next(Unauthorized("Not authorized"));
  }

  const { id } = jwt.verify(token, SECRET_KEY);

  const user = await User.findById(id).select(
    "-createdAt -updatedAt -password"
  );

  if (!user || !user.token) {
    // return res.status(401).json({ message: "Not authorized" });
    next(Unauthorized("Not authorized"));
  }
  req.user = user;
  next();
});

module.exports = {
  authCheck,
};
