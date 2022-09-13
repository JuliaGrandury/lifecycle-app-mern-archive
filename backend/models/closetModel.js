const mongoose = require('mongoose')

const closetSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add an item to the closet'],
    } 
})

module.exports = mongoose.model('Closet', closetSchema)




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