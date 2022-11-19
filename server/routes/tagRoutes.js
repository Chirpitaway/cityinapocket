const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const { validateTag, validateTagEdit } = require("../middleware/validators/tagValidator");
const {
    AddTag,
    GetTags,
    EditTag,
    DeleteTag,
} = require("../controllers/tagController");

router.route("/").post(admin, validateTag, AddTag).get(protect, GetTags);
router.route("/:id").put(admin, validateTagEdit, EditTag).delete(admin, DeleteTag);

module.exports = router;