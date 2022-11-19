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

const { validateComment, validateCommentEdit } = require("../middleware/validators/commentValidator");
const {
    AddComment,
    EditComment,
    DeleteComment,
} = require("../controllers/commentController");

router.route("/:id/comments").post(protect, validateComment, AddComment);
router.route("/:id/comments/:commentId").put(protect, validateCommentEdit, EditComment).delete(protect, DeleteComment);

const {validateTicketType, validateTicketTypeEdit} = require("../middleware/validators/ticketTypeValidator");
const {
    AddTicketType,
    EditTicketType,
    DeleteTicketType,
} = require("../controllers/ticketTypeController");

router.route("/:id/ticket-types").post(admin, validateTicketType, AddTicketType);
router.route("/:id/ticket-types/:ticketTypeId").put(admin, validateTicketTypeEdit, EditTicketType).delete(admin, DeleteTicketType);

module.exports = router;