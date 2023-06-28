const { Pet } = require("../../models/Pet");
const { catchAsync } = require("../../services");

const createPets = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  const result = await Pet.create({ ...req.body, user: _id });

  res.status(201).json({
    status: "success",
    code: 201,
    result,
  });
});

module.exports = createPets;
