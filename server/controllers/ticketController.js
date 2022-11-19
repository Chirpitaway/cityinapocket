const asyncHandler = require('express-async-handler');
const Ticket = require('../models/TicketsModel');
const Provider = require('../models/ProviderModel');

const AddTicket = asyncHandler(async (req, res) => {
    const { type, userId, providerId } = req.body;

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
                        userId: userId,
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
