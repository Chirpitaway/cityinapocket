const asyncHandler = require('express-async-handler');
const Provider = require('../models/ProviderModel');

const AddComment = asyncHandler(async (req, res) => {
    const { userName, message, rating } = req.body;
    
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            const comment = {
                userId: req.user._id,
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

const EditComment = asyncHandler(async (req, res) => {
    const { userName, message, rating } = req.body;
    
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            const comment = {
                userId: req.user._id,
                userName: userName,
                message: message,
                rating: rating,
            };
            if (provider.comments.id(req.params.commentId)) {
                if (provider.comments.id(req.params.commentId).userId == req.user._id) {
                    provider.comments.id(req.params.commentId).set(comment);
                    await provider.save();
                    res.status(201).json(provider);
                } else {
                    res.status(401);
                    throw new Error('Not authorized');
                }
            } else {
                res.status(404);
                throw new Error('Comment not found');
            }
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error editing comment");
    }
});

const DeleteComment = asyncHandler(async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            if (provider.comments.id(req.params.commentId)) {
                if (provider.comments.id(req.params.commentId).userId == req.user._id || req.user.permission == 'admin') {
                    provider.comments.id(req.params.commentId).remove();
                    await provider.save();
                    res.status(201).json(provider);
                } else {
                    res.status(401);
                    throw new Error('Not authorized');
                }
            } else {
                res.status(404);
                throw new Error('Comment not found');
            }
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error deleting comment");
    }
});

module.exports = {
    AddComment,
    EditComment,
    DeleteComment,
};