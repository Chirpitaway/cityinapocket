const asyncHandler = require('express-async-handler');
const Provider = require('../models/ProviderModel');

const AddComment = asyncHandler(async (req, res) => {
    const { userId, userName, message, rating } = req.body;
    
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            const comment = {
                userId: userId,
                userName: userName,
                message: message,
                rating: rating,
            };
            provider.comments.push(comment);
            await provider.save();
            res.status(201).json(provider);
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error adding comment");
    }
});