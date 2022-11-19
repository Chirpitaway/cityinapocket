const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const { validateEmergencyService, validateEmergencyServiceEdit } = require("../middleware/validators/emergencyServiceValidator");
const {
    AddEmergencyService,
    GetEmergencyServices,
    EditEmergencyService,
    DeleteEmergencyService,
} = require("../controllers/emergencyServiceController");

router.route("/").post(admin, validateEmergencyService, AddEmergencyService).get(protect, GetEmergencyServices);
router.route("/:id").put(admin, validateEmergencyServiceEdit, EditEmergencyService).delete(admin, DeleteEmergencyService);

module.exports = router;