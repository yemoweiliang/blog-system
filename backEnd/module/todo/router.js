var express = require('express')
var router = express.Router()
var controller=require('./controller').controller
router.post(
    '/',controller.putItem
)
router.get(
    '/',controller.getItems
)
router.put(
    '/',controller.updateItem
)
router.delete('/',controller.deleteItem)
module.exports = router