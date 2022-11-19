const asyncHandler = require('express-async-handler');
const Provider = require('../models/ProviderModel');

const AddProvider = asyncHandler(async (req, res) => {
    const { name, type, city } = req.body;
    
    try {
        // Check if provider already exists
        const providerExists = await Provider.findOne({ name: name, type: type, city: city });

        if (providerExists) {
            res.status(400);
            throw new Error('Provider already exists');
        } else {
            const provider = await Provider.create({
                name: name,
                type: type,
                city: city,
            });
            res.status(201).json(provider);
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error creating provider");
    }
});

const GetProviders = asyncHandler(async (req, res) => {
    try {
        let query = req.query;
        const providers = await Provider.find({query});
        res.status(200).json(providers);
    } catch (error) {
        res.status(500);
        throw new Error("Error getting providers");
    }
});