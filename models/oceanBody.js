const mongoose = require("mongoose")

const oceanBody = new mongoose.Schema({
    "_id": ObjectId,
    "name": String,
    "type": String,
    "coordinates": [longitude, latitude],
    "description": String,
    "endangered_species": [{
        "_id": ObjectId,
        "name": String,
        "scientific_name": String,
        "habitat": String,
        "conservation_status": "Conservation status of the species",
        "description": "Description of the species and why it's endangered",
        "conservation_tips": [
           "Tips on how to help conserve this species and its habitat"
        ]
    }]
}
)