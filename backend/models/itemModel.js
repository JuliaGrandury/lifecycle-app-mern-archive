const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        name: {
            type: String,
            required: [true, 'Please add a name for the item'],
        },
        // image: {
        //     type: String,
        //     required: [false],
        // },
        color : {
            type: String,
            required: [true, 'Please add a color for the item'],
        },
        category : {
            type: String,
            required: [true, 'Please add a category for the item'],
        },
        season: {
            type: String,
            required: [true, 'Please add a season for the item'],
        },
        incloset: {
            type: Boolean,
            default: true,
        },
        torepair: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Item', itemSchema)
