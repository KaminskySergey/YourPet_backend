const { Pet } = require("../../models/Pet");
const { catchAsync } = require("../../services");

const allPets = catchAsync(async (req, res, next) => {
  const result = await Pet.find().populate({
    path: "user",
    select: "-password -createdAt -updatedAt -token",
  });
  res.json({
    status: "success",
    code: 200,
    result,
  });
});

module.exports = allPets;
