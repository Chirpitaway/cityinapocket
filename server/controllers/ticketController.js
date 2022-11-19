const asyncHandler = require('express-async-handler');
const Ticket = require('../models/TicketsModel');
const Provider = require('../models/ProvidersModel');

const AddTicket = asyncHandler(async (req, res) => {
    const { type, providerId } = req.body;

    try {
        const provider = await Provider.findById(providerId);
        let ticketType

        if (provider) {
            // Check if the ticket type exists
            if (provider.ticketTypes.id(type)) {
                ticketType = provider.ticketTypes.id(type)
                // Check if the ticket exists
                const ticketExists = await Ticket.findOne({ type: type, userId: userId, provider: provider, expiresAt: expiresAt });

                if (ticketExists) {
                    res.status(400);
                    throw new Error('Ticket already exists');
                } else {
                    const newTicket = await Ticket.create({
                        type: type,
                        userId: req.user._id,
                        provider: provider,
                        // Add the ticket type duration (in days) to the current time
                        expiresAt: new Date(Date.now() + (ticketType.duration * 24 * 60 * 60 * 1000)),
                    });
                    res.status(201).json(newTicket);
                }
            } else {
                res.status(404);
                throw new Error('Ticket type not found');
            }
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error adding ticket");
    }
});

const GetTickets = asyncHandler(async (req, res) => {
    try {
        const tickets = await Ticket.find({ userId: req.user._id });
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500);
        throw new Error("Error getting tickets");
    }
});

const GetAllTickets = asyncHandler(async (req, res) => {
    try {
        const tickets = await Ticket.find({});
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500);
        throw new Error("Error getting tickets");
    }
});

const ValidateTicket = asyncHandler(async (req, res) => {
    const { ticketId } = req.body;

    try {
        let ticket = await Ticket.findById(ticketId);

        if (ticket) {
            // Check if the ticket is expired
            if (ticket.expiresAt > Date.now()) {
                ticket.used = true;
                await ticket.save();
                res.status(200).json({ valid: true });
            } else {
                res.status(400);
                throw new Error('Ticket expired');
            }
        } else {
            res.status(404);
            throw new Error('Ticket not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error validating ticket");
    }
});

const DeleteTicket = asyncHandler(async (req, res) => {
    const { ticketId } = req.body;

    try {
        const ticket = await Ticket.findById(ticketId);

        if (ticket) {
            await ticket.remove();
            res.status(200).json({ message: 'Ticket removed' });
        } else {
            res.status(404);
            throw new Error('Ticket not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error deleting ticket");
    }
});

module.exports = {
    AddTicket,
    GetTickets,
    GetAllTickets,
    ValidateTicket,
    DeleteTicket
}