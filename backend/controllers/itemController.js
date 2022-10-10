const { default: _default } = require('concurrently')
const asyncHandler = require('express-async-handler')

const Item = require('../models/itemModel')
const User = require('../models/userModel')

// @desc Get items of specific user
// @route GET /api/items
// @acces Private
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find({ user: req.user.id })
    res.status(200).json(items)
})

// @desc Set closet item
// @route POST /api/items
// @acces Private
const setItem = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add an item name field')
    }

    if (!req.body.color) {
        res.status(400)
        throw new Error('Please add a color field')
    }

    if (!req.body.category) {
        res.status(400)
        throw new Error('Please add a category field')
    }

    if (!req.body.season) {
        res.status(400)
        throw new Error('Please add a season field')
    }

    const item = await Item.create({
        user: req.user.id,
        name: req.body.name,
        color: req.body.color,
        category: req.body.category,
        season: req.body.season,
        incloset: _default,
        torepair: _default,
    })

    res.status(200).json(item)
})

// @desc Update closet item
// @route PUT /api/items/:id
// @acces Private
const updateItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)
    if (!item) {
        res.status(400)
        throw new Error('Closet item not found')
    }

    // Get User and handle if it doesn't exist
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Verify that logged in user and closet user match
    if(item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedItem)
})

// @desc Delete closet item
// @route DELETE /api/items/:id
// @acces Private
const deleteItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)
    if (!item) {
        res.status(400)
        throw new Error('Closet item not found')
    }

    // Get User and handle if it doesn't exist
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Verify that logged in user and closet user match
    if(item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await item.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getItems,
    setItem,
    updateItem,
    deleteItem,
}