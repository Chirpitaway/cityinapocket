const asyncHandler = require("express-async-handler");
const EmergencyServices = require("../models/EmergencyServicesModel");

const AddEmergencyService = asyncHandler(async (req, res) => {
    const { name, contact, city, country } = req.body;

    try {
        // Try to see if the emergency service already exists
        const emergencyService = await EmergencyServices.findOne({ name: name, contact: contact, city: city, country: country });

        if (emergencyService) {
            res.status(400);
            throw new Error("Emergency service already exists");
        } else {
            const emergencyService = await EmergencyServices.create({
                name: name,
                contact: contact,
                city: city,
                country: country,
            });

            res.status(201).json({
                _id: emergencyService.id,
                name: name,
                contact: contact,
                city: city,
                country: country,
            });
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error creating emergency service");
    }
});

const GetEmergencyServices = asyncHandler(async (req, res) => {
    try {
        const query = req.query;
        const emergencyServices = await EmergencyServices.find({query});
        res.status(200).json(emergencyServices);
    } catch (error) {
        res.status(500);
        throw new Error("Error getting emergency services");
    }
});

