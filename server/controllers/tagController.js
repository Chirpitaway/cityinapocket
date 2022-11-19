const asyncHandler = require('express-async-handler');
const Tag = require('../models/TagModel');

const AddTag = asyncHandler(async (req, res) => {
    const { name, type } = req.body;

    try {
        // Try to see if the tag already exists
        const tag = await Tag.findOne({ name: name, type: type });
        
        if (tag) {
            res.status(400);
            throw new Error('Tag already exists');
        } else {
            const tag = await Tag.create({
                name: name,
                type: type,
            });

            res.status(201).json({
                _id: tag.id,
                name: name,
                type: type,
            });
        }
    } catch (error) {
        res.status(500);
        throw new Error('Error creating tag');
    }
});

const GetTags = asyncHandler(async (req, res) => {
    try {
        const query = req.query;
        const tags = await Tag.find(query);
        res.status(200).json(tags);
    } catch (error) {
        res.status(500);
        throw new Error('Error getting tags');
    }
});

