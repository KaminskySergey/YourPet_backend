const { Pet } = require("../../models/Pet");
const { catchAsync } = require("../../services");
const { NotFound, Unauthorized } = require("http-errors");

const updatePets = catchAsync(async (req, res, next) => {
  const { petId } = req.params;
  const { _id } = req.user;

  const petToUpdate = await Pet.findById(petId);

  if (!petToUpdate) {
    next(NotFound("Pet doesn't exist"));
  } else if (!petToUpdate.user.equals(_id)) {
    return next(Unauthorized("You can modify info of only your pets"));
  }

  const updatePets = await Pet.findByIdAndUpdate(petId, req.body, {
    new: true,
  });

  if (!updatePets) {
    next(NotFound());
  }

  res.json({
    status: "succes",
    code: 200,
    updatePets,
  });
});

module.exports = updatePets;
