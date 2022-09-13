const express = require('express')
const router = express.Router()
const {getCloset, setClosetItem, updateClosetItem, deleteClosetItem} = require('../controllers/closetController')

router.get('/', getCloset)
router.post('/', setClosetItem)
router.put('/:id', updateClosetItem)
router.delete('/:id', deleteClosetItem)

//The 4 lines above can be shortened into the next 2 lines
// router.route('/').get(getCloset).post(setClosetItem)
// router.route('/:id').put(updateClosetItem).delete(deleteClosetItem)

module.exports = router