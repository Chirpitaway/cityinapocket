const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const { validateCity, validateCityEdit } = require("../middleware/validators/cityValidator");
const {
    AddCity,
    GetCities,
    GetCity,
    EditCity,
    DeleteCity,
} = require("../controllers/cityController");

router.route("/").post(admin, validateCity, AddCity).get(protect, GetCities);
router.route("/:id").get(protect, GetCity).put(admin, validateCityEdit, EditCity).delete(admin, DeleteCity);

module.exports = router;