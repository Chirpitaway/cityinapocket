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
        const providers = await Provider.find({query}, 'name type city tags');
        res.status(200).json(providers);
    } catch (error) {
        res.status(500);
        throw new Error("Error getting providers");
    }
});

const GetProvider = asyncHandler(async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.id, 'name type city tags comments ticketTypes');
        
        if (provider) {
            res.status(200).json(provider);
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error getting provider");
    }
});

const GetProviderDetails = asyncHandler(async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            res.status(200).json(provider);
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error getting provider details");
    }
});

const UpdateProvider = asyncHandler(async (req, res) => {
    try {
        let provider = await Provider.findById(req.params.id);
        
        if (provider) {
            provider.name = req.body.name || provider.name;
            provider.type = req.body.type || provider.type;
            provider.city = req.body.city || provider.city;
            provider.tags = req.body.tags || provider.tags;

            const updatedProvider = await provider.save();
            res.status(200).json(updatedProvider);
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error updating provider");
    }
});

const DeleteProvider = asyncHandler(async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            await provider.remove();
            res.status(200).json({ message: 'Provider removed' });
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error deleting provider");
    }
});

module.exports = {
    AddProvider,
    GetProviders,
    GetProvider,
    GetProviderDetails,
    UpdateProvider,
    DeleteProvider
}