const express = require('express')
const router = express.Router()
const {getCloset, setClosetItem, updateClosetItem, deleteClosetItem} = require('../controllers/closetController')

const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getCloset)
router.post('/', protect, setClosetItem)
router.put('/:id', protect, updateClosetItem)
router.delete('/:id', protect, deleteClosetItem)

//The 4 lines above can be shortened into the next 2 lines
// router.route('/').get(protect, getCloset).post(protect, setClosetItem)
// router.route('/:id').put(protect, updateClosetItem).delete(protect, deleteClosetItem)

module.exports = router