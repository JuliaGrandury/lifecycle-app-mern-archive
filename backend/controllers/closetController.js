const asyncHandler = require('express-async-handler')

const Closet = require('../models/closetModel')

// @desc Get closet of specific user
// @route GET /api/closet
// @acces Private
const getCloset = asyncHandler(async (req, res) => {
    const closet = await Closet.find()
    res.status(200).json(closet)
})

// @desc Set closet item
// @route POST /api/closet
// @acces Private
const setClosetItem = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const closet = await Closet.create({
        text: req.body.text
    })

    res.status(200).json(closet)
})

// @desc Update closet item
// @route PUT /api/closet/:id
// @acces Private
const updateClosetItem = asyncHandler(async (req, res) => {
    const closetItem = await Closet.findById(req.params.id)
    if (!closetItem) {
        res.status(400)
        throw new Error('Closet item not found')
    }
    const updatedClosetItem = await Closet.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedClosetItem)
})

// @desc Delete closet item
// @route DELETE /api/closet/:id
// @acces Private
const deleteClosetItem = asyncHandler(async (req, res) => {
    const closetItem = await Closet.findById(req.params.id)
    if (!closetItem) {
        res.status(400)
        throw new Error('Closet item not found')
    }
    await closetItem.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getCloset,
    setClosetItem,
    updateClosetItem,
    deleteClosetItem,
}