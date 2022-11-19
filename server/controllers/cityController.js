const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const AddCity = asyncHandler(async (req, res) => {
    const { name, centerLat, centerLng, radius, country } = req.body;

    try {
        // Try to see if the city already exists
        const city = await City.findOne({ name: name, centerLat: centerLat, centerLng: centerLng });

        if (city) {
            res.status(400);
            throw new Error("City already exists");
        }
        else {
            const city = await City.create({
                name: name,
                centerLat: centerLat,
                centerLng: centerLng,
                radius: radius,
                country: country,
            });

            res.status(201).json({
                _id: city.id,
                name: name,
                centerLat: centerLat,
                centerLng: centerLng,
                radius: radius,
                country: country,
            });
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error creating city");
    }
});

const GetCities = asyncHandler(async (req, res) => {
    let query = req.query;
    try {
        const cities = await City.find(query);
        res.status(200).json(cities);
    } catch (error) {
        res.status(500);
        throw new Error("Error getting cities");
    }
});

const GetCity = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const city = await City.findById(id);
        if (city) {
            res.status(200).json(city);
        } else {
            res.status(404);
            throw new Error("City not found");
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error getting city");
    }
});