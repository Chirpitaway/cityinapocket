const express = require("express");
const router = express.Router();
const {
    RegisterUser,
    LogInUser,
    GetUsers,
    RegisterSpecial,
    EditUser,
    EditOwnUser,
    DeleteUser,
} = require("../controllers/userController");
const { validateLogin, validateRegister, validateEditUser } = require("../middleware/validators/userValidator");
const { protect, admin } = require("../middleware/authMiddleware");

router.post("/register", validateRegister, RegisterUser);
router.post("/login", validateLogin, LogInUser);
router.get("/", admin, GetUsers);
router.post("/registerSpecial", admin, validateRegister, RegisterSpecial);
router.put("/edit/:id", admin, validateEditUser, EditUser);
router.put("/edit", protect, validateEditUser, EditOwnUser);
router.delete("/delete/:id", admin, DeleteUser);

module.exports = router;
