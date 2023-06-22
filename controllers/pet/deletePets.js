const { Pet } = require("../../models/Pet");
const { catchAsync } = require("../../services");
const { NotFound, Unauthorized } = require("http-errors");

const deletePets = catchAsync(async (req, res, next) => {
  const { petId } = req.params;
  const { _id } = req.user;

  const petToDelete = await Pet.findById(petId);

  if (!petToDelete) {
    next(NotFound("Pet doesn't exist"));
  } else if (!petToDelete.user.equals(_id)) {
    return next(Unauthorized("You can delete only your pets"));
  }

  const deletedPet = await Pet.findByIdAndRemove(petId);
  if (!deletedPet) {
    next(NotFound("Pet doesn't exist"));
  }

  res
    .status(204)
    .json({ message: "Pet deleted", status: "success", code: 204 });
});

module.exports = deletePets;
