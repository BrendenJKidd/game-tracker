const mongoose = require('mongoose')

const gameSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
            required: [true, 'Please enter a title']
        },
        series: {
            type: String,
            required: [true, 'Please enter a series']
        },
        developer: {
            type: String,
            required: [true, 'Please enter a developer']
        },
        publisher: {
            type: String,
            required: [true, 'Please enter a publisher']
        },
        releaseDate: {
            type: String,
            required: [true, 'Please enter a release date']
        },
        platform: {
            type: String,
            required: [true, 'Please select a platform']
        },
        status: {
            type: String,
            required: [true, 'Please select a status']
        },
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Game', gameSchema)