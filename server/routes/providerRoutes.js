const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const { validateProvider, validateProviderEdit } = require("../middleware/validators/providerValidator");
const {
    AddProvider,
    GetProviders,
    GetProvider,
    GetProviderDetails,
    UpdateProvider,
    DeleteProvider
} = require("../controllers/providerController");

router.route("/").post(admin, validateProvider, AddProvider).get(protect, GetProviders);
router.route("/:id").get(protect, GetProvider).put(admin, validateProviderEdit, UpdateProvider).delete(admin, DeleteProvider);
router.route("/details/:id").get(admin, GetProviderDetails);

module.exports = router;