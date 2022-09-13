const asyncHandler = require('express-async-handler')

// @desc Get closet of specific user
// @route GET /api/closet
// @acces Private
const getCloset = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Closet' })
})

// @desc Set closet item
// @route POST /api/closet
// @acces Private
const setClosetItem = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Create Closet Item" })
})

// @desc Update closet item
// @route PUT /api/closet/:id
// @acces Private
const updateClosetItem = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Closet Item ${req.params.id}` })
})

// @desc Delete closet item
// @route DELETE /api/closet/:id
// @acces Private
const deleteClosetItem = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Closet Item ${req.params.id}` })
})

module.exports = {
    getCloset,
    setClosetItem,
    updateClosetItem,
    deleteClosetItem,
}