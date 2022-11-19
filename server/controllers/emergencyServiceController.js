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

const EditEmergencyService = asyncHandler(async (req, res) => {
    const { name, contact, city, country } = req.body;

    try {
        const emergencyService = await EmergencyServices.findById(req.params.id);

        if (emergencyService) {
            emergencyService.name = name || emergencyService.name;
            emergencyService.contact = contact || emergencyService.contact;
            emergencyService.city = city || emergencyService.city;
            emergencyService.country = country || emergencyService.country;
            const updatedEmergencyService = await emergencyService.save();
            res.status(200).json(updatedEmergencyService);
        } else {
            res.status(404);
            throw new Error("Emergency service not found");
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error editing emergency service");
    }
});

const DeleteEmergencyService = asyncHandler(async (req, res) => {
    try {
        const emergencyService = await EmergencyServices.findById(req.params.id);

        if (emergencyService) {
            await emergencyService.remove();
            res.json({ message: "Emergency service removed" });
        } else {
            res.status(404);
            throw new Error("Emergency service not found");
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error deleting emergency service");
    }
});

module.exports = {
    AddEmergencyService,
    GetEmergencyServices,
    EditEmergencyService,
    DeleteEmergencyService,
};