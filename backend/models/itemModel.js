const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
            required: [true, 'Please add an item to the closet'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Item', itemSchema)


//ITEMS IN CLOSET SCHEMA
// [{
//     referenceId: Number,
//     name: String,
//     color: String,
//     category: String,
//     season: String,
//     size: Number,
//     inCloset: Boolean,
//     toRepair: Boolean,
// }]