const { catchAsync } = require("../../services");

const current = catchAsync(async (req, res) => {
  const userLogin = req.user;
  res.json({
    status: "success",
    code: 200,
    userLogin,
  });
});

module.exports = current;
