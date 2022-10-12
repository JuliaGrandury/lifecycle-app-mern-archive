const express = require('express');
const router = express.Router();
const { getItems, getItemByCategory, setItem, updateItem, deleteItem, getItemByCategory } = require('../controllers/itemController');

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getItems)
router.get('/:category', protect, getItemByCategory)
router.post('/', protect, setItem)
router.put('/:id', protect, updateItem)
router.delete('/:id', protect, deleteItem)

//The 4 lines above can be shortened into the next 2 lines
// router.route('/').get(protect, getCloset).post(protect, setClosetItem)
// router.route('/:id').put(protect, updateClosetItem).delete(protect, deleteClosetItem)

module.exports = router;