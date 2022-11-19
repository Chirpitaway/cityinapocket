const express = require("express");
const router = express.Router();
const { protect, admin, special } = require("../middleware/authMiddleware");

const { validateTicket } = require("../middleware/validators/ticketValidator");
const {
    AddTicket,
    GetTickets,
    GetAllTickets,
    ValidateTicket,
    DeleteTicket
} = require("../controllers/ticketController");

router.route("/").post(protect, validateTicket, AddTicket).get(protect, GetTickets);
router.route("/all").get(admin, GetAllTickets);
router.route("/:id").put(special, ValidateTicket).delete(admin, DeleteTicket);

module.exports = router;