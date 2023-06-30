const express = require("express");
const { pet } = require("../../controllers");
const { authCheck } = require("../../middlewares/authCheck");

const router = express.Router();

router.get("/", pet.allPets);
router.get("/:userId", pet.allPetsById);
router.post("/", authCheck, pet.createPets);
router.patch("/:petId", authCheck, pet.updatePets);
router.delete("/:petId", authCheck, pet.deletePets);

module.exports = router;
