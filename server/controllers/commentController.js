const asyncHandler = require('express-async-handler');
const Provider = require('../models/ProvidersModel');

const AddComment = asyncHandler(async (req, res) => {
    const { message, rating } = req.body;
    
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            const comment = {
                userId: req.user._id,
                userName: req.user.name,
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
    const { message, rating } = req.body;
    
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            const comment = {
                userId: req.user._id,
                userName: req.user.name,
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
                    res.status(201).json({message:'User has been deleted'});
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